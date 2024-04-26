<?php 
/*	$nombre = $_POST['name'];
	$apellido = $_POST['apellido'];
	$codigo = $_POST['codigo'];
	$email = $_POST['email'];
	$affair = $_POST['asunto'];
	$mensaje = "Nombre: ".$nombre."\nApellido: ".$apellido."\nCodigo Postal: ".$codigo."\nEmail: ".$email."\nMensaje:\n\n".$_POST['mensaje'];
	
	*/
	
		ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $_POST['name']." ".$_POST['apellido'];
    $to = "contacto@lmrcomercioexterior.com.ar";
    $subject =$_POST['asunto'];
    $message = "Nombre: ".$_POST['name']."\nApellido: ".$_POST['apellido']."\nCodigo Postal: ".$_POST['codigo']."\nEmail: ".$_POST['email']."\nMensaje:\n\n".$_POST['mensaje'];
    $headers = "From:" . $from;


	if(mail($to,$subject,$message, $headers)){
		echo  '<script language="javascript"> alert ("Su consulta fue enviada. Responderemos en breve."); window.location.href="../#contact" </script>';
	} else {
        echo '<script language="javascript"> alert ("Ocurrio un error inesperado, intente de nuevo mas tarde"); window.location.href="../#contact" </script>';
}
 ?>



