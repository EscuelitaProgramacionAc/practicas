module.exports = function(sequelize, Sequelize) {
    const PreInscripcionesDefinition = {
        preinscripcion_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        apellido: Sequelize.STRING,
        email: Sequelize.STRING,
        pais: Sequelize.STRING,
        ocupacion: Sequelize.STRING

    };

    const  PreInscripcion = sequelize.define('PRE_INSCRIPCION', PreInscripcionesDefinition);
    
    return  PreInscripcion;
}