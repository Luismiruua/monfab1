<?php


include_once "conexion.php";
/*
        if(!isset($_POST["nombre"]) || 
        !isset($_POST["descripcion"]) || 
        !isset($_POST["serie"]) ||
        !isset($_POST["estado"]) ||
        !isset($_POST["prioridad"]))exit();*/
    
        //Recoge los parametros que introducimos
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $numSerie = $_POST['serie'];
        $estado = $_POST['estado'];
        $prioridad = $_POST['prioridad'];
    
        //Creamos un array en el que introduciremos después todos los datos
        
        $patata = ["success" => $success, "message" => $message, 
        "data" => [
            "nombre" => $nombre,
            "descripcion" =>$descripcion,
            "nserie" => $numSerie,
            "estado" => $estado,
            "prioridad" => $prioridad  
        ]];
        
    
        try{
            //Pongo las variables
            $success = true;
            $message = 'Se ha podido actualizar los datos perfectamente';
            //creamos la instruccion que queremos que se cree
            $query ="UPDATE elementos SET nombre = :nombre , descripcion = :descripcion, nserie = :serie, estado = :estado, prioridad = :prioridad";
            $sentencia = $pdo->prepare($query);
            //la ejecutamos
            $sentencia->execute(
                $nombre,
                $descripcion,
                $numSerie,
                $estado,
                $prioridad
            );
            echo json_encode($patata) . "\n";
    
        }catch(PDOException $e){
            echo $e->getMessage();
        }
    




?>