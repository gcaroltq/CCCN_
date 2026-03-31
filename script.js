const examenesData = [
    {
        id: 1,
        categoria: 'toeic',
        titulo: 'TOEIC Listening & Reading',
        descripcion: 'Evalúa tus habilidades de comprensión auditiva y lectura en inglés en el entorno laboral de manera rápida y precisa.'
    },
    {
        id: 2,
        categoria: 'toefl',
        titulo: 'TOEFL iBT',
        descripcion: 'Prueba de dominio del inglés de nivel superior, ampliamente aceptada por universidades e instituciones académicas.'
    },
    {
        id: 3,
        categoria: 'toefl',
        titulo: 'TOEFL ITP',
        descripcion: 'Examen en papel que evalúa el dominio del inglés en un contexto académico a nivel de educación superior.'
    },
    {
        id: 4,
        categoria: 'michigan',
        titulo: 'Michigan Test (MET)',
        descripcion: 'Examen de inglés general altamente validado, enfocado en contextos educativos y profesionales.'
    },
    {
        id: 5,
        categoria: 'toeic',
        titulo: 'TOEIC Speaking & Writing',
        descripcion: 'Complementa tu certificación evaluando tus habilidades activas de expresión oral y escrita.'
    }
];

const contenedorGrid = document.getElementById('examGrid');
const botonesFiltro = document.querySelectorAll('.filter-btn');
const enlacesScroll = document.querySelectorAll('[data-scroll-target]');
const tarjetasEnlace = document.querySelectorAll('[data-card-link]');

function renderizarExamenes(filtro = 'todos') {
    contenedorGrid.innerHTML = '';

    const examenesFiltrados = filtro === 'todos'
        ? examenesData
        : examenesData.filter((examen) => examen.categoria === filtro);

    examenesFiltrados.forEach((examen) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'exam-card';
        tarjeta.innerHTML = `
            <div>
                <span class="exam-tag">${examen.categoria.toUpperCase()}</span>
                <h3 class="exam-title">${examen.titulo}</h3>
                <p class="exam-desc">${examen.descripcion}</p>
            </div>
            <button class="exam-btn">Seleccionar Examen</button>
        `;
        contenedorGrid.appendChild(tarjeta);
    });
}

botonesFiltro.forEach((boton) => {
    boton.addEventListener('click', () => {
        botonesFiltro.forEach((b) => b.classList.remove('active'));
        boton.classList.add('active');
        renderizarExamenes(boton.dataset.filter);
    });
});

enlacesScroll.forEach((enlace) => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = enlace.dataset.scrollTarget;
        const destino = document.getElementById(targetId);
        const navbar = document.querySelector('.navbar');

        if (!destino) return;

        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const top = destino.getBoundingClientRect().top + window.scrollY - navbarHeight - 8;

        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    });
});

tarjetasEnlace.forEach((tarjeta) => {
    const destino = tarjeta.dataset.cardLink;

    if (!destino) return;

    tarjeta.addEventListener('click', (event) => {
        if (event.target.closest('a, button')) return;
        window.location.href = destino;
    });

    tarjeta.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        window.location.href = destino;
    });
});

window.addEventListener('load', () => {
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
});

renderizarExamenes();
