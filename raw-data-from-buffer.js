const _ = require('struct-fu')

function rawDataFromBuffer(buffer) {

	const entry = _.struct([
		_.uint32le('time'),
		_.uint32le('paused'),
		_.uint32le('ets2_telemetry_plugin_revision'),
		_.uint32le('ets2_version_major'),
		_.uint32le('ets2_version_minor'),

		_.byte('padding1'),
		_.int8('trailer_attached'),
		_.byte('padding2'),
		_.byte('padding3'),

		_.float32le('speed'),

		_.float32le('accelerationX'),
		_.float32le('accelerationY'),
		_.float32le('accelerationZ'),

		_.float32le('coordinatesX'),
		_.float32le('coordinatesY'),
		_.float32le('coordinatesZ'),

		_.float32le('rotationX'),
		_.float32le('rotationY'),
		_.float32le('rotationZ'),

		_.int32le('gear'),
		_.int32le('gearsForward'),
		_.int32le('gearRanges'),
		_.int32le('gearRangeActive'),

		_.float32le('engineRpm'),
		_.float32le('engineRpmMax'),

		_.float32le('fuel'),
		_.float32le('fuelCapacity'),
		_.float32le('fuelRate'),
		_.float32le('fuelAvgConsumption'),

		_.float32le('userSteer'),
		_.float32le('userThrottle'),
		_.float32le('userBrake'),
		_.float32le('userClutch'),

		_.float32le('gameSteer'),
		_.float32le('gameThrottle'),
		_.float32le('gameBrake'),
		_.float32le('gameClutch'),

		_.float32le('truckWeight'),
		_.float32le('trailerWeight'),

		_.int32le('modelOffset'),
		_.int32le('modelLength'),

		_.int32le('trailerOffset'),
		_.int32le('trailerLength'),

		_.int32le('timeAbsolute'),
		_.int32le('gearsReverse'),

		_.float32le('trailerMass'),

		_.char('trailerId', 64),
		_.char('trailerName', 64),

		_.int32le('jobIncome'),
		_.int32le('jobDeadline'),

		_.char('jobCitySource', 64),
		_.char('jobCityDestination', 64),

		_.char('jobCompanySource', 64),
		_.char('jobCompanyDestination', 64),

		_.int32le('retarderBrake'),
		_.int32le('shifterSlot'),
		_.int32le('shifterToggle'),
		_.int32le('padding4'),

		_.struct('aux', [
			_.int8('cruiseControl'),
			_.int8('wipers'),
			_.int8('parkBrake'),
			_.int8('motorBrake'),
			_.int8('electricEnabled'),
			_.int8('engineEnabled'),
			_.int8('blinkerLeftActive'),
			_.int8('blinkerRightActive'),
			_.int8('blinkerLeftOn'),
			_.int8('blinkerRightOn'),
			_.int8('lightsParking'),
			_.int8('lightsBeamLow'),
			_.int8('lightsBeamHigh'),
			_.uint8('lightsAuxFront'),
			_.uint8('lightsAuxRoof'),
			_.int8('lightsBeacon'),
			_.int8('lightsBrake'),
			_.int8('lightsReverse'),
			_.int8('batteryVoltageWarning'),
			_.int8('airPressureWarning'),
			_.int8('airPressureEmergency'),
			_.int8('adblueWarning'),
			_.int8('oilPressureWarning'),
			_.int8('waterTemperatureWarning'),
		]),
		_.float32le('airPressure'),
		_.float32le('brakeTemperature'),
		_.int32le('fuelWarning'),
		_.float32le('adblue'),
		_.float32le('adblueConsumption'),
		_.float32le('oilPressure'),
		_.float32le('oilTemperature'),
		_.float32le('waterTemperature'),
		_.float32le('batteryVoltage'),
		_.float32le('lightsDashboard'),
		_.float32le('wearEngine'),
		_.float32le('wearTransmission'),
		_.float32le('wearCabin'),
		_.float32le('wearChassis'),
		_.float32le('wearWheels'),
		_.float32le('wearTrailer'),
		_.float32le('truckOdometer'),
		_.float32le('cruiseControlSpeed'),

		_.char('truckMake', 64),
		_.char('truckMakeId', 64),
		_.char('truckModel', 64),

		_.float32le('speedLimit'),
		_.float32le('routeDistance'),
		_.float32le('routeTime'),
		_.float32le('fuelRange'),
		_.float32le('gearRatioForward', 24),
		_.float32le('gearRatioReverse', 8),
		_.float32le('gearRatioDifferential'),
		_.int32le('gearDashboard'),
		_.int8('onJob'),
		_.int8('jobFinished'),
	])

	const rawData = entry.unpack(buffer)

	delete rawData.padding1
	delete rawData.padding2
	delete rawData.padding3
	delete rawData.padding4

	return rawData
}

module.exports = rawDataFromBuffer