const ts   = require('typescript')
const path = require('path')
const fs   = require('fs')

const typingsPath  = path.resolve(__dirname, '../typings')
const typedefsPath = path.resolve(__dirname, '../docs/typedefs.md')

const typedefs = []

const genericTypes = {
  128: {
    name: 'Object',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
  },
  147: {
    name: 'String',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
  },
  144: {
    name: 'Number',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
  },
  179: {
    name: 'Array',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
  },
  131: {
    name: 'Boolean',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'
  }
}

const folderContents = fs.readdirSync(typingsPath)
const filepaths = 
  folderContents
    .filter(name => name.includes('.d.ts'))
    .map(filename => path.resolve(typingsPath, filename))

const program = ts.createProgram(filepaths, { allowJS: true })

for ( const filepath of filepaths ){
  const sourceFile = program.getSourceFile(filepath)
  
  ts.forEachChild(sourceFile, parseNode)
}

typedefs.sort(function(a, b) {
  if (a.name > b.name) return 1
  if (a.name < b.name) return -1
  return 0
})

writeMDFile(typedefs)

function parseNode(node) {
  if ( node.expression || node.parameters )
    return

  if ( node.body )
    return parseNode(node.body)

  if ( node.statements?.length > 0 ) {
    for ( const statement of node.statements ) {
      parseNode(statement)
    }
    return
  }

  if ( node.members?.length > 0 ) {
    const typedef = parseType(node)

    for ( const member of node.members ) {
      const parsedMember = parseMember(member)
      
      if ( parsedMember )
        typedef.members.push(parsedMember)
    }

    typedefs.push(typedef)
  }

}

function parseType(type) {
  return {
    name: type.name.escapedText,
    members: []
  }
}

function parseMember(member) {
  if (member.parameters)
    return

  return {
    name:     member.name.escapedText || '',
    type:     member.type.typeName?.escapedText || member.type.kind,
    optional: member.questionToken ? true : false,
  }
}

function writeMDFile(data) {
  let output = ''

  for ( const entry of data ) {

    output +=
`
### ${entry.name}
| Name | Type | Optional |
| ---- | ---- | -------- |
` 
    for ( const member of entry.members ) {
      let type = `[${member.type}](typedefs.md#${member.type})`

      if ( genericTypes[member.type] )
        type = `[${genericTypes[member.type].name}](${genericTypes[member.type].url})`
      
      output += `| ${member.name} | ${type} | ${member.optional ? 'YES' : 'NO'} |\n`
    }

    output += '\n---\n'
  }

  fs.writeFileSync(typedefsPath, output)

  console.log('Typedefs file successfully generated')
}