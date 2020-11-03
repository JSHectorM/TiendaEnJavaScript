const path = require('path');

var express = require('express');
var app = express(); 
var Celulares = require('./models/celular');
//BD
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cyberphone', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});
var CelularEsquema =  mongoose.Schema({
  nombre: { type: String },
  year: { type: Number },
  marca: { type: String },
  modelo: { type: String },
  precio: { type: Number },
});
module.exports = mongoose.model('CyberPanter', CelularEsquema);

var ProductoModel = mongoose.model('CyberPanter', CelularEsquema);
Celulares.setModel(ProductoModel);

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

app.get('/Celulares', Celulares.index);
app.get('/Celulares/create', Celulares.create);
app.post('/Celulares', Celulares.store);
app.get('/Celulares/:id', Celulares.show);
app.get('/Celulares/:id/edit', Celulares.edit);
app.put('/Celulares/:id', Celulares.update);
app.delete('/Celulares/:id', Celulares.destroy);