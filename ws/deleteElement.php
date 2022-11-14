<?php
    include_once 'conexion.php';
    
    
    $id = $_GET["id"];
    $success = true;
    $message = "Elementos borrados correctamente"; 


    $query = "DELETE FROM elementos WHERE id = '$id';";    

    $sentencia = $pdo->prepare($query);
    $sentencia->execute();
    $respuesta = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    $patata = ["success" => $success, "message" => $message, 
    "data" => $respuesta];

    if($sentencia->execute()){

                
        echo json_encode(var_dump($patata)) . "\n";


    }else{
        $success = false;
        $message = "Los elementos no se han poddido obtener de manera correcta";   
        echo json_encode($patata) . "\n";
        
    }
    //print_r($respuesta);
?>

?>