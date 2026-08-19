export interface Proyecto {
  id: number
  slug: string
  title: string
  location: string
  category: string
  sector: string
  imageSrc: string
  date: string
  client: string
  descripcion: string[]
  detallesTecnicos: { label: string; value: string }[]
  desafios: string[]
  soluciones: string[]
  resultados: string[]
  testimonio: { texto: string; autor: string; cargo: string }
}

export const proyectos: Proyecto[] = [
  {
    id: 1,
    slug: "cerramiento-estructural-finca-mango",
    title: "Cerramiento Estructural Finca Exportadora de Mango",
    location: "Andalucia, Valle del Cauca",
    category: "Cerramiento Industrial",
    sector: "Agroindustria",
    imageSrc: "/PuertaAlmacenFinca2.jpg",
    date: "Marzo 2024",
    client: "Finca productora y exportadora de mango",
    descripcion: [
      "Este proyecto consistio en la instalacion de un cerramiento estructural para una finca productora y exportadora de mango en Andalucia, Valle del Cauca, disenado para proteger la maquinaria agricola e industrial almacenada en las instalaciones.",
      "El objetivo principal fue brindar un nivel optimo de seguridad para equipos de alto valor, evitando el acceso no autorizado y protegiendo la inversion del cliente en maquinaria de produccion y exportacion.",
      "El proyecto incluyo la fabricacion e instalacion de puertas de acceso vehicular y peatonal.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Cerramiento Estructural" },
      { label: "Altura", value: "2.5 metros" },
      { label: "Material", value: "Malla eslabonada galvanizada calibre 10.5" },
      { label: "Uso", value: "Proteccion de maquinaria agroindustrial" },
      { label: "Ubicacion", value: "Zona de almacenamiento de maquinaria" },
    ],
    desafios: [
      "Necesidad de garantizar cobertura total del area de almacenamiento sin interrumpir las labores diarias de la finca.",
      "Condiciones de terreno rural que requirieron adaptar la instalacion a la topografia del lugar.",
      "Condiciones climaticas adversas durante parte del periodo de instalacion.",
    ],
    soluciones: [
      "Planificacion de la instalacion en coordinacion con el cronograma de labores agricolas del cliente.",
      "Ajuste de la estructura del cerramiento a las particularidades del terreno para garantizar estabilidad y cobertura completa.",
      "Adaptacion del cronograma de trabajo para avanzar incluso en condiciones de lluvia moderada.",
    ],
    resultados: [
      "El cerramiento industrial fue completado exitosamente dentro del plazo establecido, cumpliendo con todos los requerimientos tecnicos y de seguridad.",
      "El cerramiento fue instalado exitosamente, brindando la seguridad necesaria para proteger la maquinaria de la finca.",
      "El cliente quedo tan satisfecho con el resultado que volvio a contactar a Fabrimallas para instalar un cerramiento similar en otra de sus ubicaciones, lo cual confirma la confianza generada por el trabajo realizado.",
    ],
    testimonio: {
      texto: "Quedamos tan satisfechos con el primer cerramiento que decidimos confiarle a Fabrimallas la proteccion de otra de nuestras ubicaciones.",
      autor: "Cliente satisfecho",
      cargo: "Finca productora y exportadora de mango",
    },
  },
  {
    id: 2,
    slug: "gaviones-control-erosion-popayan",
    title: "Gaviones para Control de Erosion",
    location: "Popayan, Cauca",
    category: "Gaviones",
    sector: "Construccion",
    imageSrc: "/Gaviones3.jpg",
    date: "Junio 2023",
    client: "Constructora regional",
    descripcion: [
      "Instalacion de estructuras de gaviones para el control de erosion en una ladera con riesgo de deslizamiento, utilizando malla de triple torsion rellena de piedra.",
      "El proyecto busco estabilizar el terreno y prevenir el arrastre de sedimentos hacia zonas cercanas, combinando funcionalidad tecnica con integracion paisajistica.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Gaviones tipo caja" },
      { label: "Material", value: "Malla de triple torsion galvanizada" },
      { label: "Calibre", value: "12" },
      { label: "Relleno", value: "Piedra de canto rodado" },
    ],
    desafios: [
      "Acceso limitado para maquinaria pesada por la topografia del terreno.",
      "Riesgo de deslizamiento activo durante la temporada de lluvias.",
    ],
    soluciones: [
      "Ensamblaje manual de gaviones por etapas siguiendo la pendiente natural del terreno.",
      "Coordinacion de la obra fuera de los periodos de mayor precipitacion.",
    ],
    resultados: [
      "La ladera quedo estabilizada de forma efectiva, controlando la erosion y reduciendo el riesgo de deslizamiento.",
      "La estructura se ha mantenido en optimas condiciones desde su instalacion.",
    ],
    testimonio: {
      texto: "La solucion de gaviones resolvio un problema de erosion que nos preocupaba desde hace tiempo.",
      autor: "Cliente satisfecho",
      cargo: "Constructora regional",
    },
  },
  {
    id: 3,
    slug: "cerramiento-residencial-condominio",
    title: "Cerramiento Residencial Condominio",
    location: "Jamundi, Valle del Cauca",
    category: "Cerramiento Residencial",
    sector: "Residencial",
    imageSrc: "/RejaCasa.jpg",
    date: "Agosto 2023",
    client: "Conjunto residencial privado",
    descripcion: [
      "Diseno e instalacion de un cerramiento perimetral para un condominio residencial, combinando seguridad con un acabado esteticamente integrado a la arquitectura del conjunto.",
      "Se utilizaron mallas eslabonadas y electrosoldadas segun el sector del perimetro, adaptando la solucion a las necesidades especificas de cada area.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Cerramiento Residencial" },
      { label: "Material", value: "Malla eslabonada y electrosoldada" },
      { label: "Altura", value: "2.2 metros" },
      { label: "Acabado", value: "Pintura electrostatica" },
    ],
    desafios: [
      "Necesidad de mantener la estetica arquitectonica del condominio.",
      "Coordinacion con multiples propietarios para la aprobacion del diseno.",
    ],
    soluciones: [
      "Propuesta de diseno personalizado presentada y aprobada por la junta del condominio.",
      "Instalacion por tramos para minimizar molestias a los residentes.",
    ],
    resultados: [
      "El condominio cuenta ahora con un cerramiento seguro y esteticamente integrado a su arquitectura.",
      "Los residentes han expresado satisfaccion con el resultado final del proyecto.",
    ],
    testimonio: {
      texto: "Fabrimallas logro un diseno que combina seguridad y estetica, superando nuestras expectativas.",
      autor: "Administracion del conjunto",
      cargo: "Condominio residencial",
    },
  },
  {
    id: 4,
    slug: "malla-triple-torsion-talud",
    title: "Malla Eslabonada para Talud",
    location: "Buenaventura, Valle del Cauca",
    category: "Malla Eslabonada",
    sector: "Construccion",
    imageSrc: "/Malla7.jpg",
    date: "Octubre 2023",
    client: "Proyecto de infraestructura vial",
    descripcion: [
      "Instalacion de malla eslabonada de proteccion en un talud junto a una via, disenada para contener material suelto y prevenir caida de rocas hacia la carretera.",
      "El proyecto formo parte de un plan de mitigacion de riesgos en un tramo vial de alta importancia regional.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Malla Eslabonada de Proteccion" },
      { label: "Material", value: "Acero galvanizado" },
      { label: "Calibre", value: "10" },
      { label: "Anclaje", value: "Sistema de cables y postes reforzados" },
    ],
    desafios: [
      "Terreno de dificil acceso en zona de alta pendiente.",
      "Necesidad de trabajar sin interrumpir el trafico vehicular de la via.",
    ],
    soluciones: [
      "Uso de tecnicas de trabajo en altura para el anclaje de la malla en el talud.",
      "Programacion de labores en horarios de menor flujo vehicular.",
    ],
    resultados: [
      "El talud quedo protegido de forma efectiva, reduciendo el riesgo de caida de material hacia la via.",
      "La solucion ha funcionado correctamente durante las temporadas de lluvia posteriores a la instalacion.",
    ],
    testimonio: {
      texto: "La instalacion de la malla de proteccion nos dio tranquilidad frente al riesgo de deslizamientos en la via.",
      autor: "Ingeniero de obra",
      cargo: "Proyecto de infraestructura vial",
    },
  },
  {
    id: 5,
    slug: "cerramiento-agroindustrial",
    title: "Cerramiento Agroindustrial",
    location: "Palmira, Valle del Cauca",
    category: "Cerramiento Industrial",
    sector: "Industria",
    imageSrc: "/MallaGalpon.jpg",
    date: "Enero 2024",
    client: "Empresa agroindustrial",
    descripcion: [
      "Cerramiento perimetral para instalaciones agroindustriales, disenado para proteger galpones y areas de almacenamiento, combinando resistencia con ventilacion adecuada.",
      "El proyecto incluyo la instalacion de mallas en zonas de galpones y cerramiento perimetral en las areas de acceso restringido.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Cerramiento Agroindustrial" },
      { label: "Material", value: "Malla eslabonada galvanizada" },
      { label: "Altura", value: "3 metros" },
      { label: "Estructura", value: "Postes metalicos con refuerzo anticorrosivo" },
    ],
    desafios: [
      "Ambiente con alta exposicion a humedad y sustancias organicas.",
      "Necesidad de mantener ventilacion adecuada en las zonas de galpones.",
    ],
    soluciones: [
      "Uso de materiales con tratamiento anticorrosivo reforzado.",
      "Diseno de malla que permite flujo de aire sin comprometer la seguridad.",
    ],
    resultados: [
      "El cerramiento ha resistido adecuadamente las condiciones del entorno agroindustrial.",
      "Las instalaciones cuentan ahora con un perimetro de proteccion efectivo y duradero.",
    ],
    testimonio: {
      texto: "El cerramiento se adapto perfectamente a las necesidades especificas de nuestras instalaciones agroindustriales.",
      autor: "Gerente de planta",
      cargo: "Empresa agroindustrial",
    },
  },
  {
    id: 6,
    slug: "gaviones-decorativos-centro-comercial",
    title: "Gaviones Decorativos Centro Comercial",
    location: "Cali, Valle del Cauca",
    category: "Gaviones",
    sector: "Comercial",
    imageSrc: "/Gaviones4.jpg",
    date: "Abril 2024",
    client: "Centro comercial",
    descripcion: [
      "Diseno e instalacion de gaviones decorativos como elemento arquitectonico y paisajistico en las zonas exteriores de un centro comercial.",
      "El proyecto combino la funcionalidad estructural de los gaviones con un diseno esteticamente atractivo para espacios de alto flujo de visitantes.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Gaviones Decorativos" },
      { label: "Material", value: "Malla de triple torsion" },
      { label: "Relleno", value: "Piedra decorativa seleccionada" },
      { label: "Acabado", value: "Diseno paisajistico integrado" },
    ],
    desafios: [
      "Necesidad de mantener un acabado esteticamente atractivo para un espacio comercial.",
      "Coordinacion de la instalacion sin afectar la operacion del centro comercial.",
    ],
    soluciones: [
      "Seleccion cuidadosa de piedra decorativa para lograr el efecto visual deseado.",
      "Instalacion en horarios de baja afluencia de publico.",
    ],
    resultados: [
      "Los gaviones decorativos se convirtieron en un elemento distintivo del diseno exterior del centro comercial.",
      "El cliente ha recibido comentarios positivos de visitantes sobre el nuevo diseno paisajistico.",
    ],
    testimonio: {
      texto: "Los gaviones decorativos le dieron una identidad visual unica a nuestros espacios exteriores.",
      autor: "Administracion del centro comercial",
      cargo: "Centro comercial",
    },
  },
  {
    id: 7,
    slug: "cerramiento-cancha-deportiva",
    title: "Cerramiento Cancha Deportiva",
    location: "Tulua, Valle del Cauca",
    category: "Cerramiento Deportivo",
    sector: "Institucional",
    imageSrc: "/CanchasFutbol.jpg",
    date: "Julio 2024",
    client: "Institucion educativa",
    descripcion: [
      "Instalacion de cerramiento perimetral para una cancha deportiva, disenado para contener balones y garantizar la seguridad de los usuarios durante la practica deportiva.",
      "El proyecto incluyo malla electrosoldada de alta resistencia con postes reforzados en las zonas de mayor impacto.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Cerramiento Deportivo" },
      { label: "Material", value: "Malla electrosoldada" },
      { label: "Altura", value: "4 metros en zonas de porteria" },
      { label: "Estructura", value: "Postes metalicos reforzados" },
    ],
    desafios: [
      "Necesidad de mayor altura en zonas de porteria para contener balones.",
      "Cronograma ajustado para entregar antes del inicio del periodo escolar.",
    ],
    soluciones: [
      "Diseno de altura variable segun la zona de la cancha.",
      "Planificacion de la obra para cumplir con la fecha limite establecida.",
    ],
    resultados: [
      "La cancha deportiva cuenta ahora con un cerramiento seguro y funcional para la practica deportiva.",
      "El proyecto fue entregado a tiempo para el inicio de las actividades escolares.",
    ],
    testimonio: {
      texto: "El cerramiento de la cancha deportiva quedo exactamente como lo necesitabamos, a tiempo y con excelente calidad.",
      autor: "Coordinador de infraestructura",
      cargo: "Institucion educativa",
    },
  },
  {
    id: 8,
    slug: "malla-eslabonada-colegio",
    title: "Malla Eslabonada Colegio",
    location: "Buga, Valle del Cauca",
    category: "Malla Eslabonada",
    sector: "Institucional",
    imageSrc: "/Malla5.jpg",
    date: "Septiembre 2024",
    client: "Colegio privado",
    descripcion: [
      "Cerramiento perimetral para una institucion educativa, disenado para garantizar la seguridad de los estudiantes durante el horario escolar.",
      "El proyecto abarco el perimetro completo del colegio, incluyendo areas recreativas y zonas de acceso controlado.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Malla Eslabonada Institucional" },
      { label: "Material", value: "Malla eslabonada galvanizada" },
      { label: "Altura", value: "2.5 metros" },
      { label: "Estructura", value: "Postes metalicos con acabado anticorrosivo" },
    ],
    desafios: [
      "Necesidad de completar la obra durante el periodo de vacaciones escolares.",
      "Garantizar la seguridad de los estudiantes sin afectar la visibilidad de las areas comunes.",
    ],
    soluciones: [
      "Planificacion de la obra para ejecutarse integramente durante el receso escolar.",
      "Diseno de malla que mantiene buena visibilidad para la supervision de las areas.",
    ],
    resultados: [
      "El colegio cuenta ahora con un perimetro de seguridad completo para sus estudiantes.",
      "La obra fue entregada antes del regreso a clases, cumpliendo con el cronograma establecido.",
    ],
    testimonio: {
      texto: "La seguridad de nuestros estudiantes mejoro significativamente con el nuevo cerramiento perimetral.",
      autor: "Rectoria",
      cargo: "Colegio privado",
    },
  },
  {
    id: 9,
    slug: "cerramiento-conjunto-residencial",
    title: "Cerramiento Conjunto Residencial",
    location: "Cali, Valle del Cauca",
    category: "Cerramiento Residencial",
    sector: "Residencial",
    imageSrc: "/Fachada3.jpg",
    date: "Noviembre 2024",
    client: "Conjunto residencial",
    descripcion: [
      "Cerramiento perimetral para un conjunto residencial, combinando seguridad con un diseno que se integra armoniosamente a la fachada del conjunto.",
      "El proyecto incluyo la renovacion completa del cerramiento existente, mejorando tanto la seguridad como la apariencia del conjunto.",
    ],
    detallesTecnicos: [
      { label: "Producto", value: "Cerramiento Residencial" },
      { label: "Material", value: "Malla electrosoldada" },
      { label: "Altura", value: "2.2 metros" },
      { label: "Acabado", value: "Pintura electrostatica color negro" },
    ],
    desafios: [
      "Remocion del cerramiento anterior sin dejar el conjunto desprotegido durante la obra.",
      "Coordinacion con la administracion y residentes del conjunto.",
    ],
    soluciones: [
      "Ejecucion de la obra por tramos, manteniendo siempre una parte del perimetro protegido.",
      "Comunicacion constante con la administracion durante todo el proceso.",
    ],
    resultados: [
      "El conjunto residencial renovo completamente su cerramiento, mejorando tanto la seguridad como la estetica.",
      "Los residentes han expresado satisfaccion con el nuevo aspecto del conjunto.",
    ],
    testimonio: {
      texto: "La renovacion del cerramiento le dio una nueva imagen a nuestro conjunto, ademas de mayor seguridad.",
      autor: "Administracion del conjunto",
      cargo: "Conjunto residencial",
    },
  },
]
