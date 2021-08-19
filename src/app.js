const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

/* Enrutadores */       // -------- Esto es nuevo y se necesita!
let indexRouter = require('./routes/indexRoute');
let accountsRouter = require('./routes/accountsRoute');


/* view engine setup */        // -------- Esto es nuevo y se necesita! 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middleware */     // -------- Esto lo modifique porque movi app.js a src y se necesita! 
app.use(express.static(path.join(__dirname + '/../public')))

/* Routes */
app.use('/', indexRouter);
app.use('/accounts',accountsRouter);
    
app.get('/prueba', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/prueba.html'))
})





app.get("/detalleDeProducto",(req, res)=>{
    res.sendFile(path.join(__dirname,"/views/detalleProducto.html"))
})

app.get("/carritoDeCompra", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/carritoDeCompra.html"))
})

/* Servidor */
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} \nhttp://localhost:${port}`);
})