const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');
//recordar que ../ es para retroceder una carpeta

module.exports =()=>{
    // router.get('/',(req,res) => {
    //     res.send('Hola Mundo');
    // });
    // //ruteo de urls
    // router.get('/nosotros',(req,res) => {
    //     res.send('Sobre nosotros');
    // });

    router.get('/', urlController.home);
    router.post('/',urlController.agregarUrl);
    //router.get('/nosotros', urlController.nosotros);

    return router;
}