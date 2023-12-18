//usaremos express para facilitar la creacion

const express = require('express');
const path = require('path');
const routes = require('./router');

const app = express();

//habilitar pug
app.set('view engine', 'pug');

//Carpeta para las vistas
app.set('views', path.join(__dirname,'./views'));

//definir rutas de aplicacion
app.use('/', routes());


app.listen(3000);
