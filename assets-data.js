const activosNX = [
  {
    id: "vw-golf-2017",
    tipo: "vehiculo",
    etiqueta: "Vehículo seleccionado",
    titulo: "Volkswagen Golf 2017",
    subtitulo: "Uso particular · 66,500 km · Equipamiento superior",
    precio: "US$ 14,900",
    estado: "Disponible",
    nivel: "Oportunidad con evaluación recomendada",
    descripcion:
      "Vehículo con buena presentación, documentación ordenada y potencial de negociación según resultado técnico y estado general.",
    criterio:
      "Conviene validar mantenimiento, neumáticos, caja, pintura, interior y coherencia entre kilometraje y desgaste.",
    imagenClase: "img-car",
    whatsapp:
      "https://wa.me/51973669004?text=Hola,%20quiero%20información%20sobre%20el%20Volkswagen%20Golf%202017"
  },

  {
    id: "inmueble-prime",
    tipo: "inmueble",
    etiqueta: "Activo patrimonial",
    titulo: "Inmueble en evaluación",
    subtitulo: "Ubicación estratégica · Información en revisión",
    precio: "Consultar",
    estado: "En evaluación",
    nivel: "Revisión recomendada",
    descripcion:
      "Activo inmobiliario con variables importantes por validar antes de negociar o separar.",
    criterio:
      "Conviene revisar ubicación, iluminación, ventilación, mantenimiento, ruido, documentación y estado general.",
    imagenClase: "img-house",
    whatsapp:
      "https://wa.me/51973669004?text=Hola,%20quiero%20evaluar%20un%20inmueble"
  },

  {
    id: "decision-nx",
    tipo: "criterio",
    etiqueta: "Decisión NX",
    titulo: "Comparar antes de decidir",
    subtitulo: "Información clara antes de avanzar",
    precio: "Criterio estratégico",
    estado: "Disponible",
    nivel: "Prevención de riesgo",
    descripcion:
      "Evaluamos señales que normalmente se pasan por alto antes de comprar, vender o invertir.",
    criterio:
      "El objetivo no es vender rápido. El objetivo es ayudarte a decidir mejor.",
    imagenClase: "img-decision",
    whatsapp:
      "https://wa.me/51973669004?text=Hola,%20quiero%20más%20información%20sobre%20Netinho%20Xperience"
  }
];

function renderActivosNX() {

  const container = document.getElementById("activos-grid");

  if (!container) return;

  container.innerHTML = "";

  activosNX.forEach((activo) => {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <div class="card-img ${activo.imagenClase}"></div>

      <div class="card-body">

        <span class="badge">${activo.etiqueta}</span>

        <h3>${activo.titulo}</h3>

        <p style="margin-bottom:10px;opacity:.85;">
          ${activo.subtitulo}
        </p>

        <p>
          ${activo.descripcion}
        </p>

        <div style="
          margin-top:18px;
          padding:14px;
          border:1px solid rgba(255,255,255,.08);
          border-radius:14px;
          background:rgba(255,255,255,.02);
          font-size:14px;
          line-height:1.6;
          color:#d7e2f0;
        ">
          <strong style="color:#e7bf63;">Criterio NX:</strong><br>
          ${activo.criterio}
        </div>

        <div style="
          margin-top:18px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:12px;
          flex-wrap:wrap;
        ">

          <div>
            <div style="
              font-size:12px;
              color:#8ea3bc;
              margin-bottom:4px;
            ">
              Estado
            </div>

            <div style="
              font-weight:700;
              color:#ffffff;
            ">
              ${activo.estado}
            </div>
          </div>

          <div style="text-align:right;">

            <div style="
              font-size:12px;
              color:#8ea3bc;
              margin-bottom:4px;
            ">
              Referencia
            </div>

            <div style="
              font-weight:800;
              color:#e7bf63;
              font-size:18px;
            ">
              ${activo.precio}
            </div>

          </div>

        </div>

        <a
          class="btn btn-gold"
          href="${activo.whatsapp}"
          target="_blank"
          rel="noopener"
          style="margin-top:22px;"
        >
          Solicitar información
        </a>

      </div>
    `;

    container.appendChild(card);

  });

}

document.addEventListener("DOMContentLoaded", renderActivosNX);
