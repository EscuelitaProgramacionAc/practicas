module.exports = function(sequelize, Sequelize) {
    const consultaDefinition = {
        consulta_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        mail: Sequelize.STRING,
        servicio: Sequelize.STRING,
        mensaje: Sequelize.STRING,
    };

    const Consulta = sequelize.define('CONSULTA', consultaDefinition);
    
    return Consulta;
}