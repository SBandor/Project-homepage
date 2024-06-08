document.addEventListener('DOMContentLoaded', function() {
    actualizarReloj();
    actualizarFecha();
    //obtenerNoticias();
    ambienteParticulas();
    obtenerClima();
});
setInterval(actualizarFecha,1000);

function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    setInterval(() => {
        const ahora = new Date();
        reloj.textContent = ahora.toLocaleTimeString();
    }, 1000);
}
function actualizarFecha() {
    const dateContainer = document.getElementById('fecha');
    const now = new Date();
    
    // Formatear la fecha
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    
    // Actualizar el contenido del contenedor de la fecha
    dateContainer.textContent = formattedDate;
}

function obtenerClima() {
    const clima = document.getElementById('clima');
    // Aquí podrías hacer una petición a una API de clima
    // URL que contiene los datos meteorológicos en formato JSON
    const url = 'https://www.el-tiempo.net/api/json/v2/provincias/08'; // Reemplaza [CODPROV] con el código de tu provincia

    // Realizar la solicitud GET usando Fetch API
    fetch(url)
    .then(response => {
        // Verificar si la solicitud fue exitosa (código de estado HTTP 200)
        if (!response.ok) {
            throw new Error('No se pudo obtener la información meteorológica');
        }
        // Convertir la respuesta a JSON
        return response.json();
    })
    .then(data => {
        // Manipular los datos obtenidos aquí
        console.log(data); // Mostrar los datos en la consola por ahora
        // Luego, puedes procesar los datos y mostrarlos en tu página web
        clima.textContent =  JSON.stringify(data.today.p); ;
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });   
}

function ambienteParticulas(){
    
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
