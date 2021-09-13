const fs = require('fs');
const path = require('path')

module.exports = {

    products : JSON.parse(fs.readFileSync('./src/data/products.json', "utf-8")),
    writeJson : (dataBase) => {
        fs.writeFileSync('./src/data/products.json', JSON.stringify(dataBase), "utf-8")
    },
    users : JSON.parse(fs.readFileSync('./src/data/users.json', "utf-8")),
    writeUserJSON: (dataBase) => {
        fs.writeFileSync('./src/data/users.json', JSON.stringify(dataBase), "utf-8")
    }
}