const datos = [
  {
    icono: "🔒",
    titulo: "Ciberseguridad",
    texto: "Protegemos sistemas, redes y datos contra ataques informáticos y hackeos.",
    detalle: "Desarrolla algoritmos de programacion, para resguardar la surdad de la informacion.",
    link: "ofertaEducativa.html",
  },
  {
    icono: "📊",
    titulo: "Contabilidad",
    texto: "Conoce los registros contables y la administración de recursos financieros.",
    detalle: "Registra, analiza e interpreta informacion financiera para controlar recursos empresariales."
  },
  {
    icono: "🤖",
    titulo: "Inteligencia Artificial",
    texto: "Desarrollamos sistemas y algoritmos que simulan el aprendizaje y razonamiento.",
    detalle: "Desarrolla, entrena y aaplica sistemas inteligentes que automatizan procesos mediante el aprendizaje automatico"
  },
  {
    icono: "🚚",
    titulo: "Logística",
    texto: "Administración de almacenes y cadena de suministro.",
    detalle: "Aprenderás a controlar inventarios y distribución."
  },
  {
    icono: "⚙️",
    titulo: "Mecanica Industrial",
    texto: "Aprende sobre maquinaria, procesos industriales y mantenimiento.",
    detalle: "Fabrica, mantiene y repara maquinaria industrial aplicando procesos de manofactura, soladura y control automatico."
  },
  {
    icono: "🍽️",
    titulo: "Preparacion de Alimentos y Bebidas",
    texto: "Desarrolla habilidades culinarias y conoce los procesos de preparación.",
    detalle: "Prepara, presenta y sirve alimentos y bebidas aplicando higiene, técnicas culinarias y servicio."
  },
  {
    icono: "💻",
    titulo: "Programación",
    texto: "Desarrollo de software y aplicaciones web.",
    detalle: "Aprenderás Java, Python, HTML, CSS, JS y bases de datos."
  },
  {
    icono: "🏨",
    titulo: "Servivios de Hospedaje",
    texto: "Aprende sobre atención al huésped y servicios de alojamiento.",
    detalle: "Gestiona atención, recepción y servicios al huésped garantizando calidad, confort y hospitalidad profesional."
  },
];



let i = 0;
const card = document.getElementById("card");

function render() {
  const d = datos[i];
  card.innerHTML = `
    <div style="font-size:50px">${d.icono}</div>
    <h2>${d.titulo}</h2>
    <p>${d.texto}</p>
    <p><b>${d.detalle}</b></p>
    <button type="button" class="btn" onclick="window.location.href='ofertaEducativa.html'" >Ver especialidades</button>
  `;
}



document.getElementById("prev").onclick = () => {
  i = (i - 1 + datos.length) % datos.length;
  render();
};

document.getElementById("next").onclick = () => {
  i = (i + 1) % datos.length;
  render();
};

setInterval(() => {
    i = (i + 1)% datos.length;
    render();
}, 5000);

render();



