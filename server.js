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

/*
Dentro del servidor web existen las rutas... estas rutas son las 
diferentes urls.  Por ejemplo:
localhost/
localhost/insertar
localhost/buscar
localhost/insertar/usuarios


Estas rutas me ayudan a ordenar qué funciones ejecutar cuando se pide algo

Las peticiones al servidor (realizadas a través de las diferentes rutas) 
puedern ser de varios tipos:

GET: Se utilizan para pedir datos
POST: Se utilizan para enviar datos
DELETE: Se utilizan para enviar datos destinados a eliminar

*/

//Esta es una petición de enviar datos
// y esta direccionada a la ruta "/insertar"

// esta es una petición de borrado
app.delete("/borrarTodo", (req, res, next) => {
  var instruccion = "delete * from usuarios";

  //Voy a insertar lo que me mandaron por parámetro
  connection
    .execute(instruccion)
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
    })
    .catch((error) => {
      res.render(error);
    });

  res.json({ mensaje: "borrado exitoso" });
});

app.post("/insertar", (req, res, next) => {
  var registro = req.body;
  var instruccion =
    "Insert into usuarios (nombre, apellido, email, pais) values ('" +
    registro.nombre +
    "','" +
    registro.apellido +
    "','" +
    registro.email +
    "','" +
    registro.pais +
    "')";

  //Voy a insertar lo que me mandaron por parámetro
  connection
    .execute(instruccion)
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
    })
    .catch((error) => {
      res.render(error);
    });

  res.json({ mensaje: "insercion exitoas" });
});

//fin de ejemplos

app.post("/crearusuarios", (req, res, next) => {
  var registro = req.body;
  var instruccion =
    "Insert into usuarios (empresa, Nombre_usuario, contra, Nivel) values (" +
    registro.empresa +
    ",'" +
    registro.usuario +
    "','" +
    registro.contrasena +
    "'," +
    registro.nivel +
    ")";
  console.log(instruccion);
  //Voy a insertar lo que me mandaron por parámetro
  connection
    .execute(instruccion)
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      res.json({ mensaje: "insercion exitosa" });
    })
    .catch((error) => {
      res.render(error);
    });
});

app.get("/usuarios", (req, res, next) => {
  connection
    .query("SELECT * FROM usuarios")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.render(error);
    });
});

app.get("/Empresa", (req, res, next) => {
  connection
    .query("SELECT * FROM Empresa")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.render(error);
    });
});

app.get("/Stock/:Nombre_usuario", (req, res, next) => {
  connection
    .query(
      // "SELECT * FROM Stock"

      "SELECT * FROM Stockcompleto where Nombre_usuario ='" +
        req.params.Nombre_usuario +
        "'"
    )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.render(error);
    });
});

app.get("/usuarios/:nombre_usuario", (req, res, next) => {
  connection
    .query(
      "SELECT * FROM Usuarios where nombre_usuario= '" +
        req.params.nombre_usuario +
        "'"
    )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.render(error);
    });
});

app.post("/crearempresa", (req, res, next) => {
  var registro = req.body;
  var instrucciona =
    "Insert into Empresa (Empresa) values ('" + registro.empresax + "')";
  console.log(instrucciona);
  //Voy a insertar lo que me mandaron por parámetro
  connection
    .execute(instrucciona)
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      res.json({ mensaje: "insercion exitosa" });
    })
    .catch((error) => {
      res.render(error);
    });
});

app.get("/Movimientos/:ID_Empresa", (req, res, next) => {
  //let instruccion= "SELECT * FROM Articulos";
  let instruccion =
    "SELECT m.*, a.Nombre_Articulo FROM Movimientos m INNER JOIN Articulos a on (a.ID_Articulo=m.Articulo) ";
  //instruccion += " a.empresa FROM Movimientos m INNER JOIN Empresa a on (a.ID_Empresa=m.Empresa) ";
  if (req.params.ID_Empresa != "0") {
    instruccion = instruccion + " where a.Empresa= " + req.params.ID_Empresa;
  }
  instruccion = instruccion + " order by fecha desc";

  connection
    .query(instruccion)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.render(error);
    });
});

app.post("/crearremitos", (req, res, next) => {
  var registro = req.body;
  var instruccion =
    "Insert into Movimientos (Tipo, Articulo, empresa, cantidad, Fecha) values (" +
    registro.tipo +
    "," +
    registro.articulo +
    "," +
    registro.empresa +
    "," +
    registro.cantidad +
    ",'" +
    registro.fecha +
    "')";
  console.log(instruccion);
  //Voy a insertar lo que me mandaron por parámetro
  connection
    .execute(instruccion)
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      res.json({ mensaje: "insercion exitosa" });
    })
    .catch((error) => {
      res.render(error);
    });
});

app.get("/Articulos", (req, res, next) => {
  connection
    .query("SELECT * FROM Articulos")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.render(error);
    });
});

app.post("/creararticulos", (req, res, next) => {
  var registro = req.body;
  var instrucciona =
    "Insert into Articulos (Nombre_Articulo, Empresa, Foto) values ('" +
    registro.nombrearticulo +
    "', " +
    registro.empresay +
    ", '" +
    registro.foto +
    "')";
  console.log(instrucciona);
  //Voy a insertar lo que me mandaron por parámetro
  connection
    .execute(instrucciona)
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      res.json({ mensaje: "insercion exitosa" });
    })
    .catch((error) => {
      res.render(error);
    });
});

//Le indico donde estan mis archivos estáticos
// y el nombre del archivo por default que quiero que muestre:
// datos.html
app.use("/", express.static("www", { index: "inicio.html" }));

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
