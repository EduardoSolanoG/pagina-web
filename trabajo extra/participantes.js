const tablaAsistentes = document.getElementById("tabla-asistentes");
const tablaPonentes = document.getElementById("tabla-ponentes");
const totalAsistentes = document.getElementById("totalAsistentes");
const totalPonentes = document.getElementById("totalPonentes");

let participantes = JSON.parse(localStorage.getItem("participantes")) || [];

let countAsistentes = 0;
let countPonentes = 0;

participantes.forEach(p => {
    const fila = document.createElement("tr");

    if (p.tipo === "Asistente") {
        fila.innerHTML = `
            <td>${p.nombre}</td>
            <td>${p.email}</td>
            <td>${p.empresa}</td>
            <td>${p.experiencia}</td>
        `;
        tablaAsistentes.appendChild(fila);
        countAsistentes++;
    } else {
        fila.innerHTML = `
            <td>${p.nombre}</td>
            <td>Ponencia pendiente</td>
            <td>30 min</td>
            <td>${p.empresa}</td>
        `;
        tablaPonentes.appendChild(fila);
        countPonentes++;
    }
});

totalAsistentes.textContent = countAsistentes;
totalPonentes.textContent = countPonentes;
