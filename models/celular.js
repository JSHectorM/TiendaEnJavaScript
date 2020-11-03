var Celular;
exports.setModel = function(modelo){
	Celular = modelo;
};
exports.index = function(req, res){
	Celular.find({}, function(error, celulares){
		if(error){
			res.send('Ha surgido un error.');
		}else{
			res.render('celulares/index', {
				celulares: celulares
			});
		}
	})
};
exports.create = function(req, res){
	res.render('celulares/save', {
		put: false,
		action: '/celulares/',
		personaje: new Celular({
			nombre: '',
			apellido: '',
			biografia: ''
		})
	});
};
exports.store = function(req, res){
	var personaje = new Celular({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		biografia: req.body.biografia
	});
	personaje.save(function(error, documento){
		if(error){
			res.send('Error al intentar guardar el personaje.');
		}else{	
			res.redirect('/celulares');
		}
	});
};
exports.show = function(req, res){
	Celular.findById(req.params.id, function(error, documento){
		if(error){
			res.send('Error al intentar ver el personaje.');
		}else{
			res.render('celulares/show', {
				personaje: documento
			});
		}
	});
};
exports.edit = function(req, res){
	Celular.findById(req.params.id, function(error, documento){
		if(error){
			res.send('Error al intentar ver el personaje.');
		}else{
			res.render('celulares/save', {
				put: true,
				action: '/celulares/' + req.params.id,
				personaje: documento
			});
		}
	});
};
exports.update = function(req, res){
	Celular.findById(req.params.id, function(error, documento){
		if(error){
			res.send('Error al intentar modificar el personaje.');
		}else{
			var personaje = documento;
			personaje.nombre = req.body.nombre;
			personaje.apellido = req.body.apellido;
			personaje.biografia = req.body.biografia;
			personaje.save(function(error, documento){
				if(error){
					res.send('Error al intentar guardar el personaje.');
				}else{	
					res.redirect('/celulares');
				}
			});
		}
	});
};
exports.destroy = function(req, res){
	Celular.remove({_id: req.params.id}, function(error){
		if(error){
			res.send('Error al intentar eliminar el personaje.');
		}else{	
			res.redirect('/celulares');
		}
	});
};