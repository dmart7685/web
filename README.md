<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Banner con botón</title>
  <style>
    body {
      text-align: center;
      background-color: #111;
      color: white;
      font-family: Arial, sans-serif;
    }

    img {
      width: 600px;
      height: 350px;
      border-radius: 10px;
      object-fit: cover;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
      transition: opacity 0.5s ease;
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 6px;
      background-color: #00aaff;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0088cc;
    }
  </style>
</head>
<body>

  <h1>Mi Banner Interactivo</h1>

  <img id="banner" src="https://picsum.photos/800/400?random=1" alt="Imagen del banner">

  <br>
  <button onclick="cambiarImagen()">Cambiar imagen</button>

  <script>
    let contador = 1;

    function cambiarImagen() {
      contador++;
      const imagen = document.getElementById("banner");
      imagen.style.opacity = 0; // efecto de desvanecimiento

      setTimeout(() => {
        imagen.src = `https://picsum.photos/800/400?random=${contador}`;
        imagen.style.opacity = 1;
      }, 300); // tiempo de transición
    }
  </script>

</body>
</html>
