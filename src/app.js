const express = require('express');
const app = express();
const path = require('path');
let port = 3000;
const methodOverride =  require("method-override");
let session = require('express-session')
let cookieParser = require('cookie-parser')
const cookieSessionCheck = require('./midlewares/cookieSessionCheck')
const headerCategoriesMiddleware = require ('./midlewares/headerCategoriesMiddleware')


/* Enrutadores */       // -------- Esto es nuevo y se necesita!
let indexRouter = require('./routes/indexRoute');
let accountsRouter = require('./routes/accountsRoute');
let carritoRouter = require('./routes/carritoRoute')
let detalleDeProductoRouter = require('./routes/detalleDeproductoRoute');
let adminRouter = require('./routes/adminRoute')
let productsRouter = require('./routes/productsRoute');
const { use } = require('./routes/indexRoute');



/* view engine setup */        // -------- Esto es nuevo y se necesita! 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middleware */     // -------- Esto lo modifique porque movi app.js a src y se necesita! 
app.use(express.static(path.join(__dirname + '/../public')));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser())
app.use(session({
    secret: "sm4rtTechConDatos",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000}
}))
app.use(cookieSessionCheck)
app.use(headerCategoriesMiddleware)

/* Routes */
app.use('/', indexRouter);
app.use('/accounts', accountsRouter);
app.use ('/carritoDeCompra', carritoRouter);
app.use('/admin', adminRouter);
app.use('/products', productsRouter)
   
app.get('/prueba', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/prueba.html'))
})


/* error 404 */
app.use((req, res, next) => {
    res.status(404).render('error404');
    next()
})

/* Servidor */
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} \nhttp://localhost:${port}`);
})