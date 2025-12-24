// Referencias al formulario y campos
const form = document.getElementById("formRegistro");
const tipo = document.getElementById("tipo");

const camposAsistente = document.getElementById("camposAsistente");
const camposPonente = document.getElementById("camposPonente");

const cancelar = document.getElementById("cancelar");

// Mostrar / ocultar campos según tipo
tipo.addEventListener("change", () => {
    camposAsistente.style.display = "none";
    camposPonente.style.display = "none";

    if (tipo.value === "Asistente") {
        camposAsistente.style.display = "block";
    } 
    else if (tipo.value === "Ponente") {
        camposPonente.style.display = "block";
    }
});

// Enviar formulario
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const participante = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        tipo: tipo.value,

        // Campos asistente
        experiencia: document.getElementById("experiencia")?.value || "",
        intereses: document.getElementById("intereses")?.value || "",
        certificado: document.getElementById("certificado")?.checked || false,

        // Campos ponente
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
    camposAsistente.style.display = "none";
    camposPonente.style.display = "none";
});

// Botón cancelar
cancelar.addEventListener("click", () => {
    form.reset();
    camposAsistente.style.display = "none";
    camposPonente.style.display = "none";
});

