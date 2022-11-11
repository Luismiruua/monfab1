<?php
    $host = '127.0.0.1'; 
    $user = 'root';
    $password = '';
    $port = '3306';
    $dbname = 'monfab';
    $dsnErr = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];


        try{
            $dsn = "mysql:name=$host;port=3306;dbname=$dbname;";			
            $pdo = new PDO($dsn,$user,$password, $dsnErr);
            echo 'Conexion exitosa';
        } catch (PDOException $e){
            echo "ERROR: ". $e->getMessage();
        }
    
    
?>