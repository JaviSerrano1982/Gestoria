<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Incluye los archivos de PHPMailer
require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP de Gmail
        $mail->isSMTP();
        $mail->Host = '';
        $mail->SMTPAuth = true;
        $mail->Username = ''; // Tu dirección de correo de Gmail
        $mail->Password = ''; // Tu contraseña de Gmail o contraseña de aplicación
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configuración del correo
        $mail->setFrom($email, $nombre);
        $mail->addAddress(''); // Dirección donde recibirás el mensaje
        $mail->isHTML(true);
        $mail->Subject = 'Consulta desde el formulario';
        $mail->Body    = "Nombre: $nombre<br>Teléfono: $telefono<br>Correo: $email<br>Mensaje: $mensaje";

        $mail->send();
        echo 'El mensaje se envió correctamente.';
    } catch (Exception $e) {
        echo "Hubo un error al enviar el mensaje. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
