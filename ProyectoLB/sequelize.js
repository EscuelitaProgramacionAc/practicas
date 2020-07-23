const Sequelize = require('sequelize')

//Constantes de configuracion
const DATABASE_NAME = 'congreso';
const USERNAME = 'root';
const PASSWORD = 'root';
const HOST = 'localhost';
const DIALECT = 'mysql';

//Conexion a la base de datos
const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        //Evitamos que sequelize ponga en plural los nombres de las tablas
        freezeTableName: true
    }
})

//Obtenemos la definicion de nuestros objetos y le decimos a sequelize que lo empieze a usar
const PreInscripcionModel = require('./models/preinscripcion')
const PreInscripcion = PreInscripcionModel(sequelize, Sequelize)


//Creamos las tablas en base a nuestros objetos
//force: true cada vez que reiniciamos el servidor se borran y se crean las tablas.
//force: false cuando reiniciamos el servidor solo se crean las tablas nuevas.
sequelize.sync({ force: true })
    .then(() => {
        console.log(`Tables created here!`)
    })

module.exports = {
    PreInscripcion
}