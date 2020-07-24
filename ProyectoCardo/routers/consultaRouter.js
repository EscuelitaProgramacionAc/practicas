const express = require('express');
const router = new express.Router();
const sequalize = require('../sequelize')
const Consulta = sequalize.Consulta;

//Aca van los servicios
router.post('/', async function(req, res){
    var user = {
        userName: req.body.userName,
        password: req.body.password
    }

    var usuario = await Usuario.create(user)
    res.json(usuario);
});

module.exports = router;