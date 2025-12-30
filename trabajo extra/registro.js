const tipo = document.getElementById("tipo");
const form = document.getElementById("formRegistro");

const asistente = document.getElementById("camposAsistente");
const ponente = document.getElementById("camposPonente");

asistente.style.display = "none";
ponente.style.display = "none";

tipo.addEventListener("change", () => {
    asistente.style.display = tipo.value === "Asistente" ? "block" : "none";
    ponente.style.display = tipo.value === "Ponente" ? "block" : "none";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const participante = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        tipo: tipo.value,
        evento: document.getElementById("evento").value,

        experiencia: document.getElementById("experiencia")?.value || "",
        intereses: document.getElementById("intereses")?.value || "",
        certificado: document.getElementById("certificado")?.checked || false,

        titulo: document.getElementById("titulo")?.value || "",
        duracion: document.getElementById("duracion")?.value || "",
        requerimientos: document.getElementById("requerimientos")?.value || "",
        biografia: document.getElementById("biografia")?.value || "",
        redes: document.getElementById("redes")?.value || ""
    };

    let participantes = JSON.parse(localStorage.getItem("participantes")) || [];
    participantes.push(participante);
    localStorage.setItem("participantes", JSON.stringify(participantes));

    alert("Registro exitoso");
    form.reset();
    asistente.style.display = "none";
    ponente.style.display = "none";
});

document.getElementById("cancelar").addEventListener("click", () => {
    form.reset();
    asistente.style.display = "none";
    ponente.style.display = "none";
});
