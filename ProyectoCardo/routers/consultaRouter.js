const express = require('express');
const router = new express.Router();
const sequalize = require('../sequelize')
const Consulta = sequalize.Consulta;

//Aca van los servicios
router.post('/', async function(req, res){
    var consultaIn = {
        nombre: req.body.nombre,
        email: req.body.email,
        servicio: req.body.servicio,
        mensaje: req.body.mensaje,
    }

    var consultOut = await Consulta.create(consultaIn)
    res.json(consultOut);
});

module.exports = router;