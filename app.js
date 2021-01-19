const fs = require('fs')

const dataBuffer = fs.readFileSync('json-data/1-json-data.json')
const dataString = dataBuffer.toString()
const data = JSON.parse(dataString)

console.log(data);

data.name = 'Ramzan Khatri'
data.age = 24


const userData = JSON.stringify(data);

fs.writeFileSync('json-data/1-json-data.json',userData);