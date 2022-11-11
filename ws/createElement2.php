<?php
    include "./models/element.php";
    include "./conexion.php";

    $atrb = $pdo->prepare("INSERT INTO elementos (nombre, descripcion, serie, estados, prioridad) VALUES(:nombre, :descripcion, :numSerie, :estado, :prioridad)");

    $atrb->bindParam(nombre, $nombre);
    $atrb->bindParam(descripcion, $descripcion);
    $atrb->bindParam(serie, $numSerie);
    $atrb->bindParam(estado, $estado);
    $atrb->bindParam(prioridad, $prioridad);


    /*
    $nombre =   isset($_POST["nombre"]);     
    $descripcion = isset($_POST["descripcion"]);
    $numSerie = isset($_POST["serie"]);
    $estado = isset($_POST["estados"]);
    $prioridad = isset($_POST["prioridad"]);*/
    /*
    $sentencia = $pdo->prepare("INSERT INTO elementos (nombre, descripcion, serie, estados, prioridad) VALUES(:nombre, :descripcion, :numSerie, :estado, :prioridad)");
    $result = $sentencia->execute([:nombre, :descripcion, :numSerie, :estado, :prioridad])
    */
    /*if($resultado === TRUE){
        echo "Insertado correctamente";
    }else{
       echo "Algo salió mal. Por favor verifica que la tabla exista"; 
    } */


?>