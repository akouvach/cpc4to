
function cargarUsuarios(){
    var url = "http://localhost:3000/usuarios";
    var misCabeceras = new Headers();

    var miInit = { method: 'GET',
                headers: misCabeceras,
                mode: 'cors',
                cache: 'default' };

    fetch(url,miInit)
    .then(function(response) {
        return response.json();
    })
    .then(function(miJson) {
        MostrarUsuarios(miJson);
        
    });
}
function MostrarUsuarios(usuarios){
console.log(usuarios);
let rdo = document.getElementById("respuesta");
let tabla= "<table border=1, >";
tabla += "<tr>  <td><b>Id</b></td> <td><b>Nombre de Usuario</b></td>"
tabla +="<td><b>Empresa</b></td>  <td><b> Contraseña </b></td> <td><b> Nivel </b></td> </tr>"

for (let i=0; i<usuarios.length; i++){
tabla += "<tr> <td>" +i+ "</td> <td>" +usuarios[i].Nombre_usuario+ "</td> "
tabla +="<td>"+usuarios[i].empresa+"</td> <td>"+usuarios[i].contra+"</td> <td>"+usuarios[i].Nivel+"</td> </tr>"}
tabla += "</table>"
rdo.innerHTML = tabla;
}


function cargarEmpresas(){
    
    var url = "http://localhost:3000/Empresa";
    var misCabeceras = new Headers();

    var miInit = { method: 'GET',
                headers: misCabeceras,
                mode: 'cors',
                cache: 'default' };

    fetch(url,miInit)
    .then(function(response) {
        return response.json();
    })
    .then(function(miJson) {
        MostrarEmpresas(miJson);
    });
};
function MostrarEmpresas(Empresa){
    console.log(Empresa);
    let rdo = document.getElementById("mostrarempresas");
    
    let tabla1= "<table border=1,>";
    tabla1 += "<tr>  <td><b>Id</b></td> <td><b>Empresa</b></td> </tr>"
    
    for (let j=0; j<Empresa.length; j++){
    tabla1 += "<tr> <td>" +Empresa[j].ID_Empresa+ "</td> <td>" +Empresa[j].Empresa+ "</td> </tr>"
}
    tabla1 += "</table>"
    rdo.innerHTML = tabla1;
    }


function crearEmpresas(){
        var url = "http://localhost:3000/crearempresa";
        var data = {empresax: document.getElementById("nombreempresa").value,
        }  
fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {
    alert("empresa registrada correctamente");
    console.log('Success:', response);
});
};


function crearUsuarios(){
    var url = "http://localhost:3000/crearusuarios";
    var data = {empresa: document.getElementById("empresa").value,
    usuario: document.getElementById("nombreusuario").value,
    nivel:document.getElementById("nivel").value,
    contrasena:document.getElementById("contrasena").value
};
fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {
    alert("usuario registrado correctamente");
    console.log('Success:', response);
});
}
