const fs = require('fs');

module.exports = {
    getProducts : JSON.parse(fs.readFileSync('./src/data/products.json', "utf-8")),
    writeJson : (dataBase) => {
        fs.writeFileSync(`./src/data/products.json`, JSON.stringify(dataBase), "utf-8")
    }
}