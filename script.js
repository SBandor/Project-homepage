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



document.addEventListener('DOMContentLoaded', () => {
    const numParticles = 50;
    const particles = [];

    // Crear las partículas y asignarles una posición inicial visible
    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() ;
        const y = Math.random() ;
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        document.body.appendChild(particle);
        particles.push(particle);
    }

    // Mover las partículas
    function moveParticles() {
        particles.forEach(particle => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const duration = Math.random() * 5 + 2; // Duración entre 2 y 7 segundos
            const delay = Math.random() * 3; // Retardo entre 0 y 3 segundos

            particle.style.transition = `transform ${duration}s linear ${delay}s, opacity ${duration}s linear ${delay}s`;
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = 1;
        });

        // Reiniciar movimiento después de que todas las partículas hayan terminado su animación
        setTimeout(moveParticles, 7000); // 7000 milisegundos (7 segundos)
    }

    // Iniciar movimiento de las partículas
    moveParticles();
});