
function cargarArticulos(){
    var url = "http://localhost:3000/Articulos";
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
        MostrarArticulos(miJson);
        
    });
}
function MostrarArticulos(articulos){
console.log(articulos);
let rdo = document.getElementById("respuesta");
let tabla= "<table border=1, >";
tabla += "<tr>  <td><b>Id</b></td> <td><b>Nombre de Articulo</b></td>"
tabla +="<td><b>Empresa</b></td> </tr>"

for (let i=0; i<Articulos.length; i++){
tabla += "<tr> <td>" +i+ "</td> <td>" +Articulos[i].Nombre_Articulo+ "</td> "
tabla +="<td>"+Articulos[i].Empresa+"</td></tr>"}
tabla += "</table>"
rdo.innerHTML = tabla;
}

