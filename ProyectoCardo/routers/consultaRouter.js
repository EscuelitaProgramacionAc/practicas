const express = require('express');
const router = new express.Router();
const sequalize = require('../sequelize')
const Consulta = sequalize.Consulta;

//Aca van los servicios
router.post('/', async function(req, res){
    var consulta = {
        nombre: req.body.nombre,
        email: req.body.email,
        servicio: req.body.servicio,
        mensaje: req.body.mensaje,
    }

    var consulta = await Consulta.create(user)
    res.json(Consulta);
});

module.exports = router;