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
        nombre: nombre.value,
        email: email.value,
        tipo: tipo.value,
        evento: evento.value,
        experiencia: experiencia?.value || "",
        intereses: intereses?.value || "",
        certificado: certificado?.checked || false,
        titulo: titulo?.value || "",
        duracion: duracion?.value || "",
        requerimientos: requerimientos?.value || "",
        biografia: biografia?.value || "",
        redes: redes?.value || ""
    };

    let lista = JSON.parse(localStorage.getItem("participantes")) || [];
    lista.push(participante);
    localStorage.setItem("participantes", JSON.stringify(lista));

    alert("Registro exitoso");
    form.reset();
    asistente.style.display = "none";
    ponente.style.display = "none";
});

cancelar.addEventListener("click", () => {
    form.reset();
    asistente.style.display = "none";
    ponente.style.display = "none";
});

/* Selección automática del evento */
const params = new URLSearchParams(window.location.search);
const eventoURL = params.get("evento");
if (eventoURL) evento.value = eventoURL;
