let contador=1;

function cambiarImagen() {
    contador++;
    const imagen = document.getElementById("banner");
    imagen.style.opacity=0;

    setTimeout(() => {
        imagen.src= `https://picsum.photos/800/400?random=${contador}`;
        imagen.style.opacity=1;
    }, 300);
}