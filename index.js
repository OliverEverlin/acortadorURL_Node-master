//usaremos express para facilitar la creacion

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
//para poder acceder a los datos del url debe habilitarse bodyparser
const routes = require('./router');

const app = express();

// Habilitamos BOdy parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//habilitar pug
app.set('view engine', 'pug');

//Carpeta para las vistas
app.set('views', path.join(__dirname,'./views'));//dirname retorna la url del archivo actual

//Cargar los archivos estaticos en public
app.use(express.static('public')); //en master.pug los tengo enlazados


//definir rutas de aplicacion
app.use('/', routes());


app.listen(3000);
