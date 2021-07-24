const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

/* Middleware */
app.use(express.static(__dirname + '/public'))

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

/* Servidor */
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} \nhttp://localhost:${port}`);
})