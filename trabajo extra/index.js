const eventos = document.querySelectorAll(".evento");
const participantes = JSON.parse(localStorage.getItem("participantes")) || [];

eventos.forEach(evento => {
    const nombreEvento = evento.dataset.evento;

    let asistentes = 0;
    let ponentes = 0;

    participantes.forEach(p => {
        if (p.evento === nombreEvento) {
            if (p.tipo === "Asistente") asistentes++;
            if (p.tipo === "Ponente") ponentes++;
        }
    });

    evento.querySelector(".contador-asistentes").textContent = asistentes;
    evento.querySelector(".contador-ponentes").textContent = ponentes;
});
