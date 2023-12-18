//como exportaremos bastante no usamos el default
exports.home = (req, res) => {
    res.render('index');
}

exports.nosotros = (req, res) => {
    res.send('Sobre nosotros');
}

