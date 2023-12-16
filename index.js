//usaremos express para facilitar la creacion

const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('Hola Mundo');
})
app.listen(3000);
