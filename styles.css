(() => {
  const root = document.querySelector("#dasc-diseno-interactivo");
  if (!root) return;

  const semesters = [
    {
      label: "Primer semestre",
      title: "Fundamentos creativos y tecnológicos",
      subjects: [
        "Introducción al diseño interactivo",
        "Dibujo I",
        "Diseño de algoritmos",
        "Ingeniería para la creatividad",
        "Teoría del diseño",
        "Metodología de la investigación",
        "Taller de lectura y redacción"
      ]
    },
    {
      label: "Segundo semestre",
      title: "Narrativa, programación y animación inicial",
      subjects: [
        "Administración de proyectos",
        "Dibujo II",
        "Programación para el diseño",
        "Guionismo",
        "Historia del arte",
        "Fundamentos de la animación",
        "Inglés I"
      ]
    },
    {
      label: "Tercer semestre",
      title: "Proyectos interactivos y representación digital",
      subjects: [
        "Proyecto interactivo I",
        "Técnicas de representación digital",
        "Programación de interactivos",
        "Escultura",
        "Fotografía artística",
        "Tipografía",
        "Inglés II"
      ]
    },
    {
      label: "Cuarto semestre",
      title: "Modelado, fotografía y diseño sonoro",
      subjects: [
        "Proyecto interactivo II",
        "Modelado 3D I",
        "Arte y sociedad",
        "Fotografía digital",
        "Animación 2D",
        "Diseño sonoro",
        "Inglés III",
        "Mercadotecnia"
      ]
    },
    {
      label: "Quinto semestre",
      title: "Producción audiovisual y eventos interactivos",
      subjects: [
        "Escultura digital",
        "Programación orientada a eventos",
        "Producción de video digital",
        "Animación 3D I",
        "Ética profesional",
        "Inglés IV",
        "Doblaje y locución"
      ]
    },
    {
      label: "Sexto semestre",
      title: "Videojuegos, efectos y visualización avanzada",
      subjects: [
        "Proyecto interactivo III",
        "Investigación de mercados",
        "Desarrollo de videojuegos",
        "Efectos especiales",
        "Animación 3D II",
        "Modelado 3D II",
        "Diseño de información visual",
        "Expresión verbal en el ámbito profesional"
      ]
    },
    {
      label: "Séptimo semestre",
      title: "Interfaces, móviles y ambientes virtuales",
      subjects: [
        "Seminario de tesis",
        "Ambientes virtuales",
        "Desarrollo de aplicaciones móviles",
        "Captura de movimiento",
        "Iluminación y render",
        "Desarrollo de interfaces",
        "Diseño de experiencia y usabilidad"
      ]
    },
    {
      label: "Octavo semestre",
      title: "Proyecto final, web, marca y estrategia digital",
      subjects: [
        "Proyecto interactivo IV",
        "Sostenibilidad y competitividad",
        "Arquitectura y diseño para la web",
        "Derecho para el diseño",
        "Comportamiento organizacional",
        "Interacción cognitiva",
        "Marketing digital",
        "Diseño de marca e imagen"
      ]
    }
  ];

  const list = root.querySelector(".dasc-di-subjects");
  const title = root.querySelector(".dasc-di-semester-title");
  const label = root.querySelector(".dasc-di-semester-label");
  const tabs = root.querySelectorAll(".dasc-di-tab");

  function renderSemester(index) {
    const semester = semesters[index];
    if (!semester || !list || !title || !label) return;

    label.textContent = semester.label;
    title.textContent = semester.title;

    list.innerHTML = semester.subjects
      .map((subject) => `<li>${subject}</li>`)
      .join("");

    tabs.forEach((tab, tabIndex) => {
      const active = tabIndex === index;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      renderSemester(Number(tab.dataset.semester));
    });
  });

  renderSemester(0);

  const waLinks = root.querySelectorAll(".dasc-di-wa-link");

  waLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "click_whatsapp", {
          programa: "diseno_interactivo",
          origen: link.dataset.waOrigin || "landing_diseno_interactivo"
        });
      }
    });
  });

  const form = root.querySelector(".dasc-di-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);

      const message = encodeURIComponent(
        `Hola, quiero informes de Diseño Interactivo 🌐🎯.\n\nNombre: ${data.get("nombre")}\nCorreo: ${data.get("email")}\nCelular: ${data.get("telefono")}\nMensaje: ${data.get("mensaje")}`
      );

      if (typeof window.gtag === "function") {
        window.gtag("event", "click_whatsapp", {
          programa: "diseno_interactivo",
          origen: "formulario_landing_diseno_interactivo"
        });
      }

      window.open(
        `https://wa.me/5212223606438?text=${message}`,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }
})();
