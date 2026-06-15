<?php
// Enviar cabecera 404 al navegador
http_response_code(404);
?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/err404.css">
        <title>PAGINA NO ENCONTRADA</title>
    </head>
    <body>
      <section class="error">
        <img src="./img/404error.png" alt="404error">
        <h1>404</h1>
        <p>Lo siento! La pagina que buscas no se ha encontrado..</p>
        <a href="./index.php">Volver al inicio</a>
      </section>
    </body>
</html>