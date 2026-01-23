console.log("proyectos.js cargado");

const proyectos = {
  videojuego: {
    titulo: "Leyendas en Combate: México Ancestral",
    descripcion:
      "Videojuego de lucha 2D (1 vs 1) desarrollado en Unity, inspirado en la mitología y leyendas mexicanas. Cada personaje cuenta con habilidades únicas basadas en elementos culturales y místicos.",

    detalles: [
      "Combate 2D con vista lateral",
      "Personajes basados en deidades y leyendas mexicanas",
      "Sistema de vida y barra de poder",
      "Ataques especiales únicos por personaje"
    ],

    modos: [
      "Versus 1v1 (Jugador vs IA)",
      "Versus Online (Jugador vs Jugador)",
      "Modo Torneo / Misión",
      "Modo Arcade"
    ],

    tecnologias: "Unity, C#, Programación orientada a objetos",
    plataformas: "Android, iOS, Windows, Mac"
  },

  web: {
    titulo: "Página Web Personal",
    descripcion:
      "Página web personal desarrollada con enfoque mobile-first, aplicando diseño responsivo y buenas prácticas de maquetación para adaptarse a distintos dispositivos.",

    detalles: [
      "Diseño responsive (móvil, tablet y escritorio)",
      "Menú de navegación adaptable",
      "Uso de media queries y tipografía fluida",
      "Estructura semántica en HTML"
    ],

    tecnologias: "HTML, CSS",
    plataformas: "Navegadores web modernos"
  },

  eventos: {
    titulo: "Sistema de Eventos",
    descripcion:
      "Sistema web académico que permite visualizar eventos, registrar ponentes y asistentes mediante formularios con validaciones y consultar listas organizadas.",

    detalles: [
      "Registro de ponentes",
      "Registro de asistentes",
      "Validaciones de formularios",
      "Visualización de listas de participantes"
    ],

    tecnologias: "HTML, CSS, JavaScript",
    plataformas: "Navegadores web"
  }
};

function abrirModal(id) {
  const proyecto = proyectos[id];
  if (!proyecto) return;

  document.getElementById("modal-titulo").textContent = proyecto.titulo;
  document.getElementById("modal-descripcion").textContent = proyecto.descripcion;
  document.getElementById("modal-tecnologias").textContent = proyecto.tecnologias;

  const lista = document.getElementById("modal-funciones");
  lista.innerHTML = "";

  if (proyecto.detalles) {
    proyecto.detalles.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    });
  }

  // Información extra (opcional)
  const extra = document.getElementById("modal-extra");
  if (extra) {
    extra.innerHTML = "";

    if (proyecto.modos) {
      const h3 = document.createElement("h3");
      h3.textContent = "Modos de juego";
      extra.appendChild(h3);

      const ul = document.createElement("ul");
      proyecto.modos.forEach(modo => {
        const li = document.createElement("li");
        li.textContent = modo;
        ul.appendChild(li);
      });
      extra.appendChild(ul);
    }

    if (proyecto.plataformas) {
      const p = document.createElement("p");
      p.innerHTML = `<strong>Plataformas:</strong> ${proyecto.plataformas}`;
      extra.appendChild(p);
    }
  }

  document.getElementById("modal").classList.add("activo");
}

function cerrarModal() {
  document.getElementById("modal").classList.remove("activo");
}
