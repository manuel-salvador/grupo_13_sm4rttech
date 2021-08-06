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
    
app.get('/prueba', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/prueba.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})
app.get('/recuperar', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/recuperarcontra.html'))
})

app.get("/detalleDeProducto",(req, res)=>{
    res.sendFile(path.join(__dirname,"/views/detalleProducto.html"))
})

/* Servidor */
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} \nhttp://localhost:${port}`);
})