// // const prdct =[
//     //Aqui creamos cada uno de los datos que irá en la tabla, está separado por arrays

//     {nombreDelElemento:"Maquina expendedora de agua",
//     descripcion:"Es una maquina especialmente rara",
//     serie:"5235235326",
//     estado:"Activo",
//     prioridad:"Media"},    
    
//     {nombreDelElemento:"Rumba automático",
//     descripcion:"Limpia todo tipo de",
//     serie:"4245235233",
//     estado:"Activo",
//     prioridad:"Baja"},

//     {nombreDelElemento:"Aire acondicionado ambiental",
//     descripcion:"Acondiciona la temperatura del ambiente",
//     serie:"25643752722634",
//     estado:"Activo",
//     prioridad:"Alta"},

//     {nombreDelElemento:"Vaporera móvil",
//     descripcion:"Caja a vapor ",
//     serie:"354325235235",
//     estado:"Activo",
//     prioridad:"Media"},

//     {nombreDelElemento:"iRobot",
//     descripcion:"Robot que hace las tareas de casa",
//     serie:"23252353253225",
//     estado:"Activo",
//     prioridad:"Alta"},

//     {nombreDelElemento:"Controlador",
//     descripcion:"Controla todas los aparatos de casa",
//     serie:"669222950522",
//     estado:"Activo",
//     prioridad:"Media"},

//     {nombreDelElemento:"Jacuzzi fachero",
//     descripcion:"Es un aparato autómatico en el que etpuedes relajar tranquilamente",
//     serie:"354325235235",
//     estado:"Activo",
//     prioridad:"ALta"}
// ];



fetch('http://localhost/daw2/dws/monFab/ws/getElement.php') 
    .then(response => response.json())
    //.then(data => console.log(data));
    .then(data => {

        let crearTabla =
            function () {
            let tablita = "<tr><th>Acciones</th><th>Nombre</th><th>Descripcion</th><th>Numero</th><th>Estado</th><th>Prioridad</th></tr>";
            let i = 0;
            for (let prdct of data) {
                //i++;
                let row = "<tr> <td>"
                row += "<input type='button' id='eliminar' onclick='elmo()' value='X'>";
                row += "<input type='button' id='editar' onclick='edititi()' value='Editar'>";
                row += "</td>"
                row += "<td>"
                row += prdct.nombre;
                row += "</td>"

                row += "<td>"
                row += prdct.descripcion;
                row += "</td>"

                row += "<td>"
                row += prdct.nserie;
                row += "</td>"

                row += "<td>"
                row += prdct.estado;
                row += "</td>"

                row += "<td>"
                row += prdct.prioridad;
                row += "</td>"

                row += "</tr>"
                tablita += row;

            }
            return tablita;


        };
        //esto escribe la tabla debido a que lleva .innerHtml
        document.getElementById("tablaDts").innerHTML = crearTabla(data);
        window.onload = crearTabla;
    console.log(data)
});



    function eliminarFila(){
        fetch('./ws/deleteElement.php?id=')
        .then(response => response.json())
        .then(data => {
            function elim(){

                var i = document.getElementById("tablaDts");
                i.deleteRow(1)}
                
                document.getElementById("tablaDts").innerHTML = elim(data),
                window.onload = elim
            }    

                //eliminarFila();

        )
    } 

    // function eliminarFila() {
    //     document.getElementsByTagName("td").remove();
    // }


/*fetch('getprdctent.php')
 .then(respuesta => respuesta.json())
 .then(data => {
    console.log(data);
 })
//Asincronia de la tabla
const getprdctentos = () =>{
    return new Promise((resolve, reject)=>{
        if(reject===true){
            reject(new Error(Swal.fire({
        icon: 'error',
        title: 'Vaya...',
        text: 'Algo fue mal padre!',
})));
        }

        setTimeout(()=>{
            resolve 
            );
        },1500)
    })
 
}
async function fetchingData(){
    try{
        await getprdctentos();
    }catch(error){
        console.log(error.message);
    }

}
fetchingData()
*/

// fetch('http://localhost/daw2/dws/monFab/ws/deleteElement.php') 
//     .then(response => response.json())
//     //.then(data => console.log(data));
//     .then(data => {
//         let elim =eliminarFila(){    
    
//         var i = document.getprdctentById("tablaDts");
    
//         i.deleteRow(1);
//         //document.getprdctentsByTagName("tr")[0].setAttribute('td', "tablaDts");
//         //document.getprdctentById("tablaDts").deleteRow(i);
    
//     }})



    //Aqui se coge cada fila, y al apretar el botón, se elimina una fila.









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
                //var prdctento = [!'Alta', !'Baja', !'Media', !'Activo'].filter(filtr);
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
function cambiar(){
    var radios = document.getprdctentsByName('prioridad');
       for (var radio of radios)
       {
           if (radio.checked) {
               pri = 'Activo';
           }else{
               pri = 'Inactivo';
           }
       }
   
      
   
    var nose = [        
        nom = document.getprdctentById("nom").value,
        des = document.getprdctentById("des").value,
        ser = document.getprdctentById("ser").value,
        est = document.getprdctentById("est").innerHTML,
        pri = document.getprdctentById("pri").innerHTML,



    /*
    nom : prdct.nombreDelprdctento,
    des : prdct.descripcion,
    ser : prdct.serie,
    est : prdct.estado,
    pri : prdct.prioridad*/
    ];   

    document.write(nose);

}



    
    function editarDatos(){
        
        let fila = parseInt(prompt('Elige el valor de la fila', "2"));
        let columna = parseInt(prompt('Elige el valor de la columna', "2"));
        
            if((fila >=2 && fila <= 8) && (columna >=2 && columna <=6)) {      

                let celda = document.getprdctentById('tablaDts').rows[fila - 1].cells;
                celda[columna - 1].innerHTML = prompt('Cambia el valor de la celda:');
    
            }
    }


    
    






    function mostrForml(){
        document.getprdctentById('contenedorForm').style.display = 'block';

    }


    const tablet = document.querySelector("#tablaDts");


    const btnLimpiar = document.querySelector("#btn-limp");

    function limpiar(){

    // Y en el click, limpiamos
        btnLimpiar.addEventListener("click", () => {

            let input = document.createprdctent("input");
            input.value = this.textContent;
    });
    }





//function filtrar(){
    //var nodo = document.getprdctentById("filtro").prdctents["tablaDts"]
    //var plbr = nodo.value;
    //for(var i = 0; i < grocerias.length;i++){
        //regex = new RegExp("(^|\\s)"+grocerias[i]+"($|(?=\\s))","gi")
        //plbr = plbr.replace(regex, function($0, $1){return $1 + "#4@!@"});
    //}
    //nodo.value = plbr;    }
