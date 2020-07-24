const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const consultaRouter = require("./routers/consultaRouter");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/consulta", consultaRouter);

app.use(express.static(__dirname + '/public/'));
app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
