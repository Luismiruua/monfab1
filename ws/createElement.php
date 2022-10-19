<?php
    include "./models/element.php";

    if(isset($_POST["enviar"])){
    
        $nombre = $_POST["nombre"];        

        $descripcion = $_POST["descripcion"];

        $numSerie = $_POST["serie"];


        $estado = $_POST["estados"];

        $prioridad = $_POST["prioridad"];

    } 
    

    
    $elemento = new Element($nombre, $descripcion, $numSerie, $estado, $prioridad);
    $elemento -> toJson($elemento);
    $archivo = 'formulario.txt';
    $esc = fopen($archivo, 'a');
    $texto = fwrite($esc, '');
        fwrite($esc, $nombre);
        fwrite($esc,$descripcion);
        fwrite($esc, $numSerie);
        fwrite($esc, $estado);
        fwrite($esc, $prioridad);
        echo '<br>';
    $texto = nl2br($texto);
    fclose($esc);
    
    


?>