
function validarfor(){
    document.getElementById('btn-frm').disabled = true;
    var nombre = document.getElementsByName("nombre")[0].value;
    var descripcion = document.getElementsByName("descripcion")[0].value;
    var numero = document.getElementsByName("serie")[0].value;
    document.getElementsByName("estado").innerHTML;
    document.getElementsByName("prioridad").innerHTML;

    if ((nombre == "") || (descripcion == "") || (numero == "") || 
        (!document.querySelector('input[name="prioridad"]:checked'))) {  //COMPRUEBA CAMPOS VACIOS
        Swal.fire({
            icon: 'error',
            title: 'Che loquito, te equivocaste...',
            text: 'Algo fue mal capito! No rellenaste bien los campos o están vacíos'
        })
        
    }else{        
        document.getElementById('btn-frm').disabled = false;   

        Swal.fire({
            icon: 'success',
            title: 'Todos los campos están rellenos, si quiere enviar dale al botón de enviar capo',
            showConfirmButton: false,
            timer: 1500
        })
    }

/*
    var nombre = document.getElementsByName("nombre")[0].value;
    if( nombre == null || nombre.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Che loquito, te equivocaste...',
            text: 'Algo fue mal capito! rellena el nombre, se te olvidó!'
        })
    }
    var descripcion = document.getElementsByName("descripcion")[0].value;
    if( descripcion == null || descripcion.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Che loquito, te equivocaste...',
            text: 'Algo fue mal capito! rellena la descripción, se te olvidó!'
        })
    }
    var numero = document.getElementsByName("serie")[0].value;
    if( numero == null || numero.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Che loquito, te equivocaste...',
            text: 'Algo fue mal capito! rellena la descripción, se te olvidó!'
        })
    }*/

}  



function elmo(){
    Swal.fire({
        title: 'Estas seguro que lo quieres borrar mi loco?',
        text: "Aqui no se puede hacer cntrl z!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Obvio que quiero padre!',

      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'ELIMINAO!',
            'Se ha eliminado correctamente.',
            'success'
          )
          eliminarFila();
        }

    }) 
}

function edititi(){

    Swal.fire({
        title: 'Seguro que lo quieres editar?',
        showDenyButton: true,
        confirmButtonText: 'Claro mi loco',
        denyButtonText: 'No gracias, me equivoqué',
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Guardao mi loco!', '', 'success')
            editarDatos();

        } else{
            Swal.fire({
                icon: 'error',
                text: 'Ahora por bobo no lo edito!',
            })       
            }
      })
    
}





function errorGravisimo(){
    Swal.fire({
        icon: 'error',
        title: 'No loco, tuviste un error, es algo ',
        showConfirmButton: false,
      })
}

