"use strict";

/*
1.- Instalar NodeJs desde https://nodejs.org/en/

2.- Crear un directorio (por ejemplo "www" ) para colocar 
los arhivos estáticos :
- html
- js
- css
- imagenes

3.- Instalar los paquetes para utilizar el servidor
y conectar con la base de datos access:

Desde la línea de comandos (cmd) en el directorio de trabajo, 
ejecutar:

npm init
npm install body-parser --save
npm install express --saveinstall body-parser --save
npm install node-adodb --save

4.- Ejecuto el servidor web

node server.js
*/

const ADODB = require("node-adodb");
const connection = ADODB.open(
  "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=data.mdb;"
);

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static("www", { index: "inicio.html" }));

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
