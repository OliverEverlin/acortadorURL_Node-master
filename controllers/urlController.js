//como exportaremos bastante no usamos 
//el modo para exportar por default

exports.home = (req, res) => {
    res.render('index'); //renderizamos con el nombre de la vista
}

exports.agregarUrl =(req, res) => {
    console.log('Enviando formulario...');
    console.log(req.body.urlOriginal);
    //se pone urOriginal del name de index.pug, no del id
}
// exports.nosotros = (req, res) => {
//     res.send('Sobre nosotros');
// }

