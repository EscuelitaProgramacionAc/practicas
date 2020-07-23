const express = require('express');
const router = new express.Router();
const sequalize = require('../sequelize')
const PreInscripcion = sequalize.PreInscripcion;

//Aca van los servicios
router.post('/', async function(req, res){
    var preInscrip = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        pais: req.body.pais,
        ocupacion: req.body.ocupacion
    }
    
    var preInscripcion = await PreInscripcion.create(preInscrip)
    res.json(preInscripcion);
});

module.exports = router;