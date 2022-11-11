<?php
    include_once 'conexion.php';
    
    if(!isset($_GET["id"])) exit();
    $id = $_GET["id"];
    $query = "DELETE FROM elementos WHERE id = '$id';";
    $sentencia = $pdo->prepare($query);
    $sentencia->execute();
    $respuesta = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    print_r($respuesta);

    /*if($resultado === TRUE){
        echo "Eliminado correctamente";
    }
    else{echo "Algo salió mal";} */
?>

?>