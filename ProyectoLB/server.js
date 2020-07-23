const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const preInscripcionRouter = require('./routers/preInscripcionRouter');


app.use(cors());
app.use(bodyParser.json()); // parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use("/api/preinscripcion", preInscripcionRouter);

app.use(express.static(__dirname + '/public/'));
app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
