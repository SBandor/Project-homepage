document.addEventListener('DOMContentLoaded', function() {
    actualizarReloj();
    //obtenerNoticias();
    obtenerClima();
});

function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    setInterval(() => {
        const ahora = new Date();
        reloj.textContent = ahora.toLocaleTimeString();
    }, 1000);
}

function obtenerNoticias() {
    const contenedorNoticias = document.getElementById('contenedor-noticias');
    // Aquí podrías hacer una petición a una API de noticias
    const noticias = [
        {titulo: 'Noticia 1', descripcion: 'Descripción de la noticia 1'},
        {titulo: 'Noticia 2', descripcion: 'Descripción de la noticia 2'},
        {titulo: 'Noticia 3', descripcion: 'Descripción de la noticia 3'},
    ];

    noticias.forEach(noticia => {
        const noticiaElemento = document.createElement('div');
        noticiaElemento.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.descripcion}</p>`;
        contenedorNoticias.appendChild(noticiaElemento);
    });
}

function obtenerClima() {
    const clima = document.getElementById('clima');
    // Aquí podrías hacer una petición a una API de clima
    clima.textContent = 'Clima actual: Soleado, 25°C';
}
