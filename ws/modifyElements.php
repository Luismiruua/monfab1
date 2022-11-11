<?php
//https://www.youtube.com/watch?v=i695ACnQwck&ab_channel=DavidReyes

if(
	!isset($_POST["nombre"]) || 
	!isset($_POST["descripcion"]) || 
	!isset($_POST["serie"]) ||
    !isset($_POST["estado"]) ||
    !isset($_POST["prioridad"]) ||      
) exit();

include_once "conexion.php";
$id = $_POST["nombre"];
$id = $_POST["descripcion"];
$id = $_POST["serie"];
$id = $_POST["estado"];
$id = $_POST["prioridad"];

$sentencia = $conect->prepare("UPDATE personas SET nombre = ?, descripcion = ?,serie = ?, estado = ?, prioridad = ?,WHERE id = ?;");
$result = $sentencia->execute([$nombre, $descripcion, , $numSerie, $estado, $prioridad, $id]);
if($result === TRUE){
	echo "Los cambios se guardaron correctamente";
}else{
	echo "Algo está mal, mira bien si está creada la tabla y el id del usuario";
} 
?>