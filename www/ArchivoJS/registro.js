const ADODB = require('node-adodb');

//Editar Data Source por la ruta correspondiente

const connection = ADODB.open("Provider=Microsoft.ACE.OLEDB.12.0;Data Source='baselopez.accdb';Persist Security Info=False;");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/registrar', function (req, res) {
    var instruccion = "insert into cliente(DNI, APELLIDO, NOMBRE) values ('" + req.body.dni + "','" + req.body.apellido + "','" + req.body.nombre + "')";

    console.log (instruccion);
    connection
        .execute(instruccion)
        .then(data => { res.json(data) })
        .catch(error => { res.render(error) });
});

app.post('/modificar', function (req, res) {
    var instruccion = "update cliente set APELLIDO='" + req.body.apellido + "',NOMBRE='" + req.body.nombre + "' where DNI='" + req.body.dni + "'";

    connection
        .execute(instruccion)
        .then(data => { res.json(data) })
        .catch(error => { res.render(error) })
});

app.post('/borrar', function (req, res) {
    var instruccion = "delete * from cliente where DNI='" + req.body.dni + "'";

    connection
        .execute(instruccion)
        .then(data => { res.json(data) })
        .catch(error => { res.render(error) });
});

app.get('/listar', function (req, res) {
    var instruccion = "select * from cliente";

    connection
        .query(instruccion)
        .then(data => { res.json(data) })
        .catch(error => { res.render(error) })
});





app.use("/", express.static('www', { index: "registro.html" }));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
 





