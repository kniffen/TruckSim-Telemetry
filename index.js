const path = require('path')
const edge = require('edge')
const rawDataFromBuffer = require('./raw-data-from-buffer.js')

const SharedMemory = edge.func(path.resolve(__dirname, 'SharedMemory.cs'))

// 4 day offset to make the day of the week line up
// Because the game thinks it's year 1 and JavaScript think it's 1970
const dateOffset = 345600000

function telemetry() {
	const trucksimTelemetry = SharedMemory({}, true)

	return {
		getBuffer: 			() => trucksimTelemetry.getData(null, true),
		getRaw: 				() => rawDataFromBuffer(trucksimTelemetry.getData(null, true)),
		getGame: 				() => game(rawDataFromBuffer(trucksimTelemetry.getData(null, true))),
		getUserInput: 	() => userInput(rawDataFromBuffer(trucksimTelemetry.getData(null, true))),
		getTruck: 			() => truck(rawDataFromBuffer(trucksimTelemetry.getData(null, true))),
		getTrailer: 		() => trailer(rawDataFromBuffer(trucksimTelemetry.getData(null, true))),
		getJob: 				() => job(rawDataFromBuffer(trucksimTelemetry.getData(null, true))),
		getNavigation: 	() => navigation(rawDataFromBuffer(trucksimTelemetry.getData(null, true))),
		getAll: 				() => {
			const rawData = rawDataFromBuffer(trucksimTelemetry.getData(null, true))
			return {
				game: game(rawData),
				userInput: userInput(rawData),
				truck: truck(rawData),
				trailer: trailer(rawData),
				job: job(rawData),
				navigation: navigation(rawData),
			}
		}
	}
}

const game = (rawData) => ({
	time: 									rawData.timeAbsolute*60000 + dateOffset | 0,
	paused: 								rawData.paused ? true : false,
	telemetryPluginVersion: rawData.ets2_telemetry_plugin_revision,
	gameVersion: 						rawData.ets2_version_major + '.' + rawData.ets2_version_minor,
})

const userInput = (rawData) => ({
	steer: 		rawData.userSteer,
	throttle: rawData.userThrottle,
	brake: 		rawData.userBrake,
	clutch: 	rawData.userClutch,
})

const truck = (rawData) => ({
	id: 								rawData.truckMakeId,
	make: 							rawData.truckMake,
	model: 							rawData.truckModel,
	//weight: 						rawData.truckWeight,
	//length: 						rawData.modelLength,
	//offset: 						rawData.modelOffset,
	lightsDashboard: 		rawData.lightsDashboard ? true : false,

	engine: {
		rpm: 							rawData.engineRpm,
		rpmMax: 					rawData.engineRpmMax,
		oilPressure: 			rawData.oilPressure,
		oilTemperature: 	rawData.oilTemperature,
		waterTemperature: rawData.waterTemperature,
		batteryVoltage: 	rawData.batteryVoltage,
		wear: 						rawData.wearEngine,
	},

	transmission: {
		gear: 							rawData.gear,
		displayedGear: 			rawData.gearDashboard,
		gearsForward: 			rawData.gearsForward,
		gearsReverse: 			rawData.gearsReverse,
		gearRanges: 				rawData.gearRanges,
		currentRange: 			rawData.gearRangeActive,
		shifterSlot: 				rawData.shifterSlot,
		shifterToggle: 			rawData.shifterToggle,
		ratioForward: 			rawData.gearRatioForward.filter(ratio => ratio),
		ratioReverse: 			rawData.gearRatioReverse.filter(ratio => ratio < 0),
		ratioDifferential: 	rawData.gearRatioDifferential,
		wear: 							rawData.wearTransmission,
	},

	fuel: {
		amount: 						rawData.fuel,
		capacity: 					rawData.fuelCapacity,
		rate: 							rawData.fuelRate,
		avgConsumption: 		rawData.fuelAvgConsumption, 
		range: 							rawData.fuelRange,
		warning : 					rawData.fuelWarning ? true : false,
		adblue: 						rawData.adblue,
		adblueConsumption: 	rawData.adblueConsumption,
	},

	lights: {
		blinkerLeftActive: 					rawData.aux.blinkerLeftActive 			? true : false,
		blinkerRightActive: 				rawData.aux.blinkerRightActive 			? true : false,
		blinkerLeftOn: 							rawData.aux.blinkerLeftOn 					? true : false,
		blinkerRightOn: 						rawData.aux.blinkerRightOn 					? true : false,
		lightsParkingOn: 						rawData.aux.lightsParking 					? true : false,
		lightsBeamLowOn: 						rawData.aux.lightsBeamLow 					? true : false,
		lightsBeamHighOn: 					rawData.aux.lightsBeamHigh 					? true : false,
		lightsAuxFrontOn: 					rawData.aux.lightsAuxFront 					? true : false,
		lightsAuxRoofOn: 						rawData.aux.lightsAuxRoof 					? true : false,
		lightsBeaconOn: 						rawData.aux.lightsBeacon 						? true : false,
		lightsBrakeOn: 							rawData.aux.lightsBrake 						? true : false,
		lightsReverseOn: 						rawData.aux.lightsReverse 					? true : false,
	},

	metrics: {
		speed: 							rawData.speed,
		cruiseControlSpeed: rawData.cruiseControlSpeed,
		odometer: 					rawData.truckOdometer,
		steer: 							rawData.gameSteer,
		throttle: 					rawData.gameThrottle,
		brake: 							rawData.gameBrake,
		clutch: 						rawData.gameClutch,
		retarderBrake: 			rawData.retarderBrake,
		airPressure: 				rawData.airPressure,
		brakeTemperature: 	rawData.brakeTemperature,
		adblue: 						rawData.adblue,
		adblueConsumption: 	rawData.adblueConsumption,
		oilPressure: 				rawData.oilPressure,
		oilTemperature: 		rawData.oilTemperature,
		waterTemperature: 	rawData.waterTemperature,
		batteryVoltage: 		rawData.batteryVoltage,
		fuel: 							rawData.fuel,
		fuelAvgConsumption: rawData.fuelAvgConsumption,
	},

	indicators: {
		cruiseControlOn: 						rawData.aux.cruiseControl 					? true : false,
		wipersOn: 									rawData.aux.wipers 									? true : false,
		parkBrakeOn: 								rawData.aux.parkBrake 							? true : false,
		motorBrakeOn: 							rawData.aux.motorBrake 							? true : false,
		electricOn: 								rawData.aux.electricEnabled 				? true : false,
		engineOn: 									rawData.aux.engineEnabled 					? true : false,
		batteryVoltageWarningOn: 		rawData.aux.batteryVoltageWarning 	? true : false,
		airPressureWarningOn: 			rawData.aux.airPressureWarning 			? true : false,
		airPressureEmergencyOn: 		rawData.aux.airPressureEmergency 		? true : false,
		adblueWarningOn: 						rawData.aux.adblueWarning 					? true : false,
		oilPressureWarningOn: 			rawData.aux.oilPressureWarning 			? true : false,
		waterTemperatureWarningOn: 	rawData.aux.waterTemperatureWarning ? true : false,
	},

	wear: {
		engine: 			rawData.wearEngine,
		transmission: rawData.wearTransmission,
		cabin:   			rawData.wearCabin,
		chassis: 			rawData.wearChassis,
		wheels:  			rawData.wearWheels,
	},

	acceleration: {
		x: rawData.accelerationX,
		y: rawData.accelerationY,
		z: rawData.accelerationZ,
	},

	coordinates: {
		x: rawData.coordinatesX,
		y: rawData.coordinatesY,
		z: rawData.coordinatesZ,
	},

	rotation: {
		x: rawData.rotationX,
		y: rawData.rotationY,
		z: rawData.rotationZ,
	}
})

const trailer = (rawData) => ({
	attached: rawData.trailer_attached ? true : false,
	id: 			rawData.trailerId,
	name: 		rawData.trailerName,
	//weight: 	rawData.trailerWeight,
	//length: 	rawData.trailerLength,
	//offset: 	rawData.trailerOffset,
	mass: 		rawData.trailerMass,
	wear: 		rawData.wearTrailer,
})

const job = (rawData) => ({
	income: 			rawData.jobIncome,
	deadline: 		rawData.jobDeadline*60000 + dateOffset | 0,
	onJob: 				rawData.onJob ? true : false,
	jobFinished: 	rawData.jobFinished ? true : false,

	source: {
		city: 		rawData.jobCitySource,
		company: 	rawData.jobCompanySource,
	},

	destination: {
		city: 		rawData.jobCityDestination,
		company: 	rawData.jobCompanyDestination,
	}
})

const navigation = (rawData) => ({
	speedLimit: 	rawData.speedLimit * 3.6 | 0,
	estDistance: 	rawData.routeDistance | 0,
	estTime: 			(rawData.timeAbsolute*60000) + (rawData.routeTime*1000) + dateOffset | 0,
	estDuration: 	rawData.routeTime*1000 | 0,
})

module.exports = telemetry()