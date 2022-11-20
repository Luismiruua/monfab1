const prdct =[
    //Aqui creamos cada uno de los datos que irá en la tabla, está separado por arrays

    {nombreDelElemento:"Maquina expendedora de agua",
    descripcion:"Es una maquina especialmente rara",
    serie:"5235235326",
    estado:"Activo",
    prioridad:"Media"},    
    
    {nombreDelElemento:"Rumba automático",
    descripcion:"Limpia todo tipo de",
    serie:"4245235233",
    estado:"Activo",
    prioridad:"Baja"},

    {nombreDelElemento:"Aire acondicionado ambiental",
    descripcion:"Acondiciona la temperatura del ambiente",
    serie:"25643752722634",
    estado:"Activo",
    prioridad:"Alta"},

    {nombreDelElemento:"Vaporera móvil",
    descripcion:"Caja a vapor ",
    serie:"354325235235",
    estado:"Activo",
    prioridad:"Media"},

    {nombreDelElemento:"iRobot",
    descripcion:"Robot que hace las tareas de casa",
    serie:"23252353253225",
    estado:"Activo",
    prioridad:"Alta"},

    {nombreDelElemento:"Controlador",
    descripcion:"Controla todas los aparatos de casa",
    serie:"669222950522",
    estado:"Activo",
    prioridad:"Media"},

    {nombreDelElemento:"Jacuzzi fachero",
    descripcion:"Es un aparato autómatico en el que etpuedes relajar tranquilamente",
    serie:"354325235235",
    estado:"Activo",
    prioridad:"ALta"}
];
//var palabrs = ["Alta", "Media", "Baja", "Activo"];



console.log(prdct);

let crearTabla = function(tbl){
    //const boton = document.createElement("button");
    let tablita = "<tr><th>Acciones</th><th>Nombre del elemento</th><th>Descripción</th><th>Número de serie</th><th>Estado</th><th>Prioridad</th></tr>";

    for(let prdct of tbl){
        //Aqui creamos la tabla, con cada uno de los datos, creando celdas, el botón, y los datos que irán de forma ordenada
        let row = "<tr><td>";
        //En este caso el botón irá a una función creada abajo
        row += "<input type='button' id='eliminar' onclick='eliminarFila()' value='X'>";
        row += "<input type='button' id='editar' onclick='editarDatos()' value='Editar'>";
        //row += boton.type;
        row += "</td>";
        row += "<td name='nom'>";
        row += prdct.nombreDelElemento;
        row += "</td>";
        row += "<td name='dsc'>";
        row += prdct.descripcion;
        row += "</td>";
        row += "<td name='ser'>";
        row += prdct.serie;
        row += "</td>";
        row += "<td id='est'>";
        row += prdct.estado;
        row += "</td>";
        row += "<td id='pri'>";
        row += prdct.prioridad;
        row += "</td>";
        row += "</tr>";
        tablita +=row;

    }
    return tablita;

    
}
//Esto hace que se escriba todos los datos en la tabla
document.getElementById('tablaDts').innerHTML = crearTabla(prdct);



function eliminarFila(i) {     

    //Aqui se coge cada fila, y al apretar el botón, se elimina una fila.
    var i = document.getElementById("tablaDts");
    i.deleteRow(1);
}



function mostr(){
    //Se crean las constantes
    const tablaCmp = document.getElementById('tablaDts');

    const palbrEnct = document.getElementById('buscar').value.toLowerCase();

    let total = 1;
    // Recorremos todas las filas con contenido de la tabla
    for (let i = 1; i < tablaCmp.rows.length; i++) {

        let fila = false;

        //td el td, tiene la clase 'noSearch', no se buscaría su contenido
        //if(tablaCmp.rows[i].classList.contains("noBuscar")) {
            //total++;

        //}
        

        const cellsOfRow = tablaCmp.rows[i].getElementsByTagName('td');

        //En este caso recoreriamos todas las celdas de su contenido

        for (let j = 0; j < cellsOfRow.length && !fila; j++) {
            //Buscamos la celda en el que se encuentra la palabra buscada

            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();

            if (palbrEnct.length ==  2|| compareWith.indexOf(palbrEnct) > -1 ) {

                fila = true;

                total++;
                //var elemento = [!'Alta', !'Baja', !'Media', !'Activo'].filter(filtr);
            }

            if (fila) {
                //td ha encontrado alguna coincidencia se deja lo que ha coincidido
                tablaCmp.rows[i].style.display = '';
            } else {
                //Pero td no hay ninguna coincidencia se esconde la fila de la tabla
                tablaCmp.rows[i].style.display = 'none';
            }
        }

    }
     


}




function editarDatos(){
    let fila = parseInt(prompt('Elige el valor de la fila', 2));
    let columna = parseInt(prompt('Elige el valor de la columna', 2));
  
    
    if((fila >=2 && fila <= 8) && (columna >=2 && columna <=6)) {      

        let celda = document.getElementById('tablaDts').rows[fila - 1].cells;
        celda[columna - 1].innerHTML = prompt('Cambia el valor de la celda:');

    }
  
}
  








            

function editarDatos(){
    let fila = parseInt(prompt('Elige el valor de la fila', 1));
    let columna = parseInt(prompt('Elige el valor de la columna', 1));

    if((fila >=1 && fila <= 8) && (columna >=1 && columna <=6)) {
        let celda = document.getElementById('tablaDts').rows[fila - 1].cells;
        celda[columna - 1].innerHTML = prompt('Cambia el valor de la celda:');
    }
    
}





/*



//function filtrar(){
    //var nodo = document.getElementById("filtro").elements["tablaDts"]
    //var plbr = nodo.value;
    //for(var i = 0; i < grocerias.length;i++){
        //regex = new RegExp("(^|\\s)"+grocerias[i]+"($|(?=\\s))","gi")
        //plbr = plbr.replace(regex, function($0, $1){return $1 + "#4@!@"});

*/