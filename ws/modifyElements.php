<?php


include_once "conexion.php";
        if(!isset($_POST["nombre"]) || 
        !isset($_POST["descripcion"]) || 
        !isset($_POST["serie"]) ||
        !isset($_POST["estado"]) ||
        !isset($_POST["prioridad"]))exit();
    
    
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $numSerie = $_POST['serie'];
        $estado = $_POST['estado'];
        $prioridad = $_POST['prioridad'];
    
    
        $patata = ["success" => $success, "message" => $message, 
        "data" => [
            "nombre" => $nombre,
            "descripcion" =>$descripcion,
            "nserie" => $numSerie,
            "estado" => $estado,
            "prioridad" => $prioridad  
        ]];
        
    
        try{
            $success = true;
            $message = 'Se ha podido actualizar los datos perfectamente';
            $query ="UPDATE elementos SET nombre = ?, descripcion = $?, nserie = ?, estado = ?, prioridad = ?";
            $sentencia = $pdo->prepare($query);
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