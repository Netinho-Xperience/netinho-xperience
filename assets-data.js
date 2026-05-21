const activosNX = [
  {
    id: "vw-golf-2017",
    tipo: "vehiculo",
    etiqueta: "Vehículo evaluable",
    titulo: "Volkswagen Golf 2017",
    subtitulo: "Uso particular · 66,500 km · Equipamiento superior",
    precio: "US$ 14,900",
    estado: "Disponible",
    nivel: "Evaluación recomendada antes de negociar",
    descripcion:
      "Activo vehicular con buena presentación, uso particular y condiciones atractivas para un comprador que busca orden, respaldo y mejor criterio antes de decidir.",
    criterio:
      "Validar mantenimiento, caja, neumáticos, pintura, desgaste interior, documentación y coherencia entre kilometraje, estado y precio publicado.",
    imagenClase: "img-car",
    cta: "Solicitar evaluación del vehículo",
    whatsapp:
      "https://wa.me/51973669004?text=Hola,%20quiero%20evaluar%20el%20Volkswagen%20Golf%202017%20con%20criterio%20NX"
  },
  {
    id: "inmueble-evaluacion",
    tipo: "inmueble",
    etiqueta: "Activo patrimonial",
    titulo: "Inmueble en evaluación",
    subtitulo: "Ubicación, metraje y condiciones por validar",
    precio: "Consultar",
    estado: "En revisión",
    nivel: "Revisión recomendada antes de separar",
    descripcion:
      "Activo inmobiliario que requiere ordenar información clave antes de publicar, negociar o tomar una decisión de compra o inversión.",
    criterio:
      "Revisar ubicación, metraje real, distribución, mantenimiento, acabados, iluminación, ventilación, ruido, documentación y costo total de ocupación.",
    imagenClase: "img-house",
    cta: "Solicitar evaluación del inmueble",
    whatsapp:
      "https://wa.me/51973669004?text=Hola,%20quiero%20evaluar%20un%20inmueble%20con%20criterio%20NX"
  },
  {
    id: "decision-nx",
    tipo: "criterio",
    etiqueta: "Criterio NX",
    titulo: "Comparar antes de decidir",
    subtitulo: "Menos improvisación. Más claridad para avanzar.",
    precio: "Evaluación estratégica",
    estado: "Disponible",
    nivel: "Prevención de decisiones costosas",
    descripcion:
      "Antes de comprar, vender o invertir, ordenamos la información relevante para ayudarte a ver riesgos, oportunidades y puntos de negociación.",
    criterio:
      "El objetivo no es presionarte a cerrar rápido. El objetivo es darte claridad para avanzar, negociar o descartar con mayor seguridad.",
    imagenClase: "img-decision",
    cta: "Quiero decidir con criterio NX",
    whatsapp:
      "https://wa.me/51973669004?text=Hola,%20quiero%20decidir%20mejor%20antes%20de%20comprar,%20vender%20o%20invertir"
  }
];

function renderActivosNX() {
  const container = document.getElementById("activos-grid");

  if (!container) return;

  container.innerHTML = "";

  activosNX.forEach((activo) => {
    const card = document.createElement("article");
    card.className = "card nx-asset-card";

    card.innerHTML = `
      <div class="card-img ${activo.imagenClase}"></div>

      <div class="card-body">
        <span class="badge">${activo.etiqueta}</span>

        <h3>${activo.titulo}</h3>

        <p class="asset-subtitle">${activo.subtitulo}</p>

        <p>${activo.descripcion}</p>

        <div class="nx-evaluation-box">
          <div class="nx-label">Criterio NX</div>
          <p>${activo.criterio}</p>
        </div>

        <div class="nx-asset-meta">
          <div>
            <span>Estado</span>
            <strong>${activo.estado}</strong>
          </div>

          <div>
            <span>Nivel NX</span>
            <strong>${activo.nivel}</strong>
          </div>
        </div>

        <div class="nx-price-row">
          <span>Referencia</span>
          <strong>${activo.precio}</strong>
        </div>

        <a
          class="btn btn-gold"
          href="${activo.whatsapp}"
          target="_blank"
          rel="noopener"
        >
          ${activo.cta}
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderActivosNX);
