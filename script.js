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

function renderizarExamenes(filtro = 'todos') {
    contenedorGrid.innerHTML = '';
    
    const examenesFiltrados = filtro === 'todos' 
        ? examenesData 
        : examenesData.filter(examen => examen.categoria === filtro);
    
    examenesFiltrados.forEach(examen => {
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

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesFiltro.forEach(b => b.classList.remove('active'));
        boton.classList.add('active');
        renderizarExamenes(boton.dataset.filter);
    });
});

renderizarExamenes();