<?php
require 'conexion.php';
require './models/element.php';



    //$element = Element::getById();
    $id = $_GET['id'] ?? NUll;
    $nombre = $_POST['nombre'] ?? NUll;
    $descripcion = $_POST['descripcion'] ?? NUll;
    $numSerie = $_POST['serie'] ?? NUll;
    $estado = $_POST['estado'] ?? NUll;
    $prioridad = $_POST['prioridad'] ?? NUll;
    $success = true;
    $message = "Elementos obtenidos correctamente"; 

   
    try{
   
        $query = "SELECT * FROM elementos WHERE id = $id;";
        $sentencia = $pdo->prepare($query);
        //$sentencia->bindParam(':id',$id);
        $sentencia->execute();
        $respuesta = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        //print_r($respuesta);

        //print_r($respuesta);
        //Se  crea un array donde van a ir todos los datos
            $patata = ["success" => $success, "message" => $message, 
            "data" => $respuesta];

            if($sentencia->execute()){
                
                echo json_encode(var_dump($patata)) . "\n";
        
            }else{
                $success = false;
                $message = "Los elementos no se han podido obtener de manera correcta";   
                echo json_encode($patata) . "\n";
                
            }

    }catch(PDOException $e){
        echo 'Fallo capito';

    }

    


    //Es la respuesta que se especifica, que en este caso si se ejecuta, 
    //coge el objeto de  arriba y lo 

    



    /*
    $sentencia->bindParam(':id', $id);
    
    if ($sentencia->execute()) {

        json_encode(print_r($sentencia->fetchAll(PDO::FETCH_ASSOC)));
    

    }else {
        echo "No se pudieron obtener correctamente capito";
    }
    //$element->guardar();

    */

    /*
    //$sql = 'SELECT $id FROM elementos order by nombre';

    foreach ($variable as $key => $value) {
        # code...
    }*/
?>