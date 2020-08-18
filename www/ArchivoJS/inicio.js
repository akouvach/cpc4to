function IniciarSesion(){
let usuario= document.getElementById("usuario").value;
let contra= document.getElementById("contrasena").value;
let data={};
data.usuario=usuario;
data.contra=contra;
console.log (data);

var url = "http://localhost:3000/usuarios/"+ usuario;
console.log (url);
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
if(miJson.length>0 && miJson[0].contra== data.contra){
console.log (miJson);
let usu= {};
usu.Id= miJson[0].ID_usuario;
usu.nombre=miJson[0].Nombre_usuario;

if(miJson[0].Nivel==1){
    alert ("Ha iniciado sesión como Administrador");
usu.esadmin= true;
localStorage.setItem("login", JSON.stringify(usu));
location.href="ppal.html";
}else{

    alert ("Ha iniciado sesión como Cliente");
    usu.esadmin= false;
    localStorage.setItem("login", JSON.stringify(usu));
    location.href="articuloscliente.html";
}

}else {
    alert("Problema en inicio de sesión");
}
});
}

