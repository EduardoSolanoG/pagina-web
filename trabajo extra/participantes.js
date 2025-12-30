const asistentes = document.getElementById("tablaAsistentes");
const ponentes = document.getElementById("tablaPonentes");

const datos = JSON.parse(localStorage.getItem("participantes")) || [];

datos.forEach(p => {
    const fila = document.createElement("tr");

    if (p.tipo === "Asistente") {
        fila.innerHTML = `
            <td>${p.nombre || ""}</td>
            <td>${p.email || ""}</td>
            <td>${p.evento || "No asignado"}</td>
            <td>${p.experiencia || ""}</td>
        `;
        asistentes.appendChild(fila);
    }

    if (p.tipo === "Ponente") {
        fila.innerHTML = `
            <td>${p.nombre || ""}</td>
            <td>${p.evento || "No asignado"}</td>
            <td>${p.titulo || "Sin título"}</td>
            <td>${p.duracion || "-"}</td>
        `;
        ponentes.appendChild(fila);
    }
});
