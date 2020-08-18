let usu= JSON.parse(localStorage.getItem("login"));
console.log("usu", usu);

    
function cargarStock(){
        
    var url = "http://localhost:3000/Stock/"+ usu.Nombre_usuario;
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
        MostrarStock(miJson);
    });
};


function MostrarStock(Stock){
    console.log(Stock);
    let rdo = document.getElementById("showstock");
    
    let tabla1= "<table border=1,>";
    tabla1 += "<tr> <td><b>Artículo </b></td> <td><b>Stock</b></td> </tr>"
    
    for (let j=0; j<Stock.length; j++){
    tabla1 += "<tr> <td>" +Stock[j].articulo+ "</td> <td>" +Stock[j].Stock+ "</td> </tr>"
    //tabla1 += "<td>" +Articulos[j].Empresa+ "</td> <td>" +Articulos[j].Foto+ "</td> </tr>" 
}
    tabla1 += "</table>"
    rdo.innerHTML = tabla1;
}

//mostrar resumen por mes o mostrar los movimentos

cargarStock();