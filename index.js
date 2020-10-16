const path = require('path');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public/html/index.html'));
});
app.get('/index.html', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public/html/index.html'));
});

app.get('/formulario.html', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public/html/formulario.html'));
    // res.send(200,{products: []});
});

app.post('/formulario.html', function (req, res) {
    // console.log(req.body);
    res.send({messaje: 'El producto se recibido'});
});

// app.delete('/formulario.html', function (req, res) {
    
// });

app.get('/producto.html', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public/html/producto.html'));
});

app.use(express.static('public')); 

app.listen(3000, function () {
    console.log('Servido listo');
});