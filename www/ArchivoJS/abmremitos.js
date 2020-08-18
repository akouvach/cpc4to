
let movimientos=[];

function cargarRemitos(){
let emp=document.getElementById("empresa").value;
if  (!emp)
{
    emp="0"
}

    var url = "http://localhost:3000/Movimientos/"+emp;
    console.log (url)
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
        movimientos=miJson
        MostrarRemitos(miJson);
        
    });
}
function MostrarRemitos(Movimientos){
console.log(Movimientos);
let rdo = document.getElementById("respuesta");
let tabla= "<table border=1, >";
tabla += "<tr>  <td><b>Id</b></td> <td><b>Tipo</b></td> <td> <b> Artículo </b> </td>"
tabla +="<td><b>Empresa</b></td>  <td><b> Cantidad </b></td> <td><b> Fecha </b></td> </tr>"

for (let i=0; i<Movimientos.length; i++){
tabla += "<tr> <td>" +i+ "</td> <td>" +Movimientos[i].Tipo+ "</td> <td>"+Movimientos[i].Nombre_Articulo+"</td> "
tabla +=" <td>"+Movimientos[i].empresa+"</td> <td>"+Movimientos[i].cantidad+"</td><td>"+Movimientos[i].Fecha+"</td> </tr>"}
tabla += "</table>"
rdo.innerHTML = tabla;
}


function crearRemitos(){
    var url = "http://localhost:3000/crearremitos";
    var data = {tipo: document.getElementById("tipo").value,
    articulo: document.getElementById("articulo").value,
    empresa:document.getElementById("empresa").value,
    cantidad:document.getElementById("cantidad").value,
    fecha:document.getElementById("fecha").value
};
console.log ( data);
fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {
    alert("Movimiento registrado correctamente");
    console.log('Success:', response);
});
}



//con lo de aca en adelante no anda

    
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
};


function MostrarArticulos(Articulos){
    console.log(Articulos);
    let rdo = document.getElementById("showarticulos");
    
    let tabla1= "<table border=1,>";
    tabla1 += "<tr>  <td><b>Id</b></td> <td><b>Artículo </b></td> <td><b>Empresa</b></td> <td><b>Foto</b></td> </tr>"
    
    for (let j=0; j<Articulos.length; j++){
    tabla1 += "<tr> <td>" +Articulos[j].ID_Articulo+ "</td> <td>" +Articulos[j].Nombre_Articulo+ "</td>"
    tabla1 += "<td>" +Articulos[j].Empresa+ "</td> <td>" +Articulos[j].Foto+ "</td> </tr>" 
}
    tabla1 += "</table>"
    rdo.innerHTML = tabla1;
}


function crearArticulos(){
    var url = "http://localhost:3000/creararticulos";
    var data = {nombrearticulo: document.getElementById("nombrearticulo").value,
    empresay: document.getElementById("empresay").value,
    foto: document.getElementById("foto").value,
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
alert("Articulo registrado correctamente");
console.log('Success:', response);
});
};




















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
    let rdo = document.getElementById("listaempresa");
    let tabla1= "<select id='empresa'>"; 

    
var k,l,aux,aux1;
for(k=0;k<(Empresa.length-1);k++)
{
    for(l=k+1;l<Empresa.length;l++)
        {
            if(Empresa[l].ID_Empresa<Empresa[k].ID_Empresa)
                {
                    aux=Empresa[l].ID_Empresa;
                    Empresa[l].ID_Empresa=Empresa[k].ID_Empresa;
                    Empresa[k].ID_Empresa=aux;
                    aux1=Empresa[l].Empresa;
                    Empresa[l].Empresa=Empresa[k].Empresa;
                    Empresa[k].Empresa=aux1;
                }
        }
}

    for (let j=0; j<Empresa.length; j++){
    tabla1 += "<option value='" +Empresa[j].ID_Empresa+ "'> "+ Empresa[j].Empresa+ "</option>";
}

tabla1 += "<option value=0 selected> Todos </option>"; 
    tabla1 += "</select>"
    rdo.innerHTML = tabla1;
}

function 
















cargarEmpresas();



function ordenarTipo(){
for(j=0; j<movimientos.length; j++ )
{
// algoritmo de ordenamiento cico adentro de otro
// agrupamiento 

}
MostrarRemitos(movimientos)
}


