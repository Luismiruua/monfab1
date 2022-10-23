const prdct =[
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



document.querySelectorAll('.tablita').forEach(function(dr){
    let fila = {
        nombreDelElemento: dr.querySelector(),
        descripcion: dr.querySelector(),
        serie: dr.querySelector(),
        estado: dr.querySelector(),
        prioridad: dr.querySelector()
        
    };
    prdct.push(fila);
    
});
    console.log(prdct);

let crearTabla = function(tbl){
    //const boton = document.createElement("button");
    let tablita = "<tr><th>Acciones</th><th>Nombre del elemento</th><th>Descripción</th><th>Número de serie</th><th>Estado</th><th>Prioridad</th></tr>";

    for(let prdct of tbl){
        let row = "<tr><td>";
        row += "<input type='button' id='eliminar' onclick='eliminarFila()' value='X'>";
        //row += boton.type;
        row += "</td>";
        row += "<td >";
        row += prdct.nombreDelElemento;
        row += "</td>";
        row += "<td>";
        row += prdct.descripcion;
        row += "</td>";
        row += "<td >";
        row += prdct.serie;
        row += "</td>";
        row += "<td >";
        row += prdct.estado;
        row += "</td>";
        row += "<td>";
        row += prdct.prioridad;
        row += "</td>";
        row += "</tr>";
        tablita +=row;

    }
    return tablita;

    
}

document.getElementById('tablaDts').innerHTML = crearTabla(prdct);

function eliminarFila(i) {     
    //document.getElementsByTagName("tr")[0].setAttribute('td', "tablaDts");
    //document.getElementById("tablaDts").deleteRow(i);
    var i = document.getElementById("tablaDts");
    i.deleteRow(1);
}

function mostr(){

    const tablaCmp = document.getElementById('tablaDts');

    const palbrEnct = document.getElementById('buscar').value.toLowerCase();

    let total = 1;

    for (let i = 1; i < tablaCmp.rows.length; i++) {

        let fila = false;
        

        const cellsOfRow = tablaCmp.rows[i].getElementsByTagName('td');

        for (let j = 0; j < cellsOfRow.length && !fila; j++) {

            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();

            if (palbrEnct.length ==  2|| compareWith.indexOf(palbrEnct) > -1 ) {

                fila = true;

                total++;
                //var elemento = [!'Alta', !'Baja', !'Media', !'Activo'].filter(filtr);
            }

            if(tablaCmp.rows[i].classList.contains("noBuscar")) {
                total++;

            }
            if (fila) {
                tablaCmp.rows[i].style.display = '';
            } else {
                tablaCmp.rows[i].style.display = 'none';
            }
        }

    }
    


}

//function filtrar(){
    //var nodo = document.getElementById("filtro").elements["tablaDts"]
    //var plbr = nodo.value;
    //for(var i = 0; i < grocerias.length;i++){
        //regex = new RegExp("(^|\\s)"+grocerias[i]+"($|(?=\\s))","gi")
        //plbr = plbr.replace(regex, function($0, $1){return $1 + "#4@!@"});
    //}
    //nodo.value = plbr;    }
