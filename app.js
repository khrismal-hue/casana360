
/**
 * Villa Casana Turismo - Interactive Web Application
 * Departamento Rosario Vera Peñaloza, La Rioja, Argentina
 */

// Application Data
const APP_DATA = {
  attractions: [
    {
      id: "cerro_espeche",
      title: "Cerro Espeche",
      category: "naturaleza",
      categoryLabel: "Naturaleza & Trekking",
      tag: "Imperdible",
      localImage: "./images/cerro-espeche-nuevo.jpg",
      image: "./images/cerro-espeche-nuevo.jpg",
      gallery: [
        "./images/cerro-espeche-nuevo.jpg",
        "./images/cerro-espeche-2.jpg"
      ],
      description: "El centinela petreo que domina la geografia de Villa Casana. Ofrece un ascenso accesible para senderistas de nivel medio con una vista panoramica inigualable de 360 grados sobre los llanos riojanos.",
      difficulty: "Media (2 a 3 hs de ascenso)",
      highlight: "Vistas panoramicas, avistamiento de aves rapaces (aguilas moras y jotes), formaciones geologicas autoctonas.",
      tips: "Iniciar la caminata a primera hora de la manana para evitar las horas de mayor insolacion. Llevar calzado con suela de traccion y 2 litros de agua.",
      coords: [-31.0450, -66.5920]
    },
    {
      id: "circuito_4x4",
      title: "Circuito 4x4 Quebradas y Huellas Serranas",
      category: "aventura",
      categoryLabel: "Aventura 4x4 / Off-Road",
      tag: "Adrenalina & Monte",
      localImage: "./images/circuito-4x4.jpg",
      image: "./images/circuito-4x4.jpg",
      gallery: [
        "./images/circuito-4x4.jpg",
        "./images/cerro-espeche-panoramica.jpg"
      ],
      description: "Travesias por huellas serranas, lechos de rios secos de arena y pedregales que conectan parajes historicos, las crestas hacia Tuani y canadones agrestes del interior riojano con vadeos de arroyos cristalinos. Incluye track GPS en Wikiloc para todoterreno.",
      difficulty: "Moderada a Alta para vehiculos todo terreno",
      highlight: "Paisajes virgenes, cruces de badenes de arena, arroyos que dan vida a la zona y puestos campesinos aislados donde se crian chivos.",
      tips: "Bajar ligeramente la presion de los neumaticos en tramos de arena pesada. Consultar siempre con pobladores sobre las tranqueras y el estado de los vadeos.",
      coords: [-31.0820, -66.5710],
      wikilocUrl: "https://es.wikiloc.com/rutas-todo-terreno/casa-de-piedra-villa-casana-15673850"
    },
    {
      id: "cicloturismo",
      title: "Cicloturismo Chepes - Villa Casana",
      category: "aventura",
      categoryLabel: "Cicloturismo & MTB",
      tag: "Deporte Rural",
      localImage: "./images/bike-y-mountainbike.jpg",
      image: "./images/bike-y-mountainbike.jpg",
      gallery: [
        "./images/bike-y-mountainbike.jpg",
        "./images/mountain-bike-1.jpg",
        "./images/mountain-bike-2.jpg",
        "./images/cicloturismo.jpg"
      ],
      description: "Una ruta muy elegida por ciclistas de montana de la region: 40 km de desafio sobre camino de tierra con suaves ondulaciones y aire puro de monte.",
      difficulty: "Intermedia / Avanzada (40 km por tramo)",
      highlight: "Silencio total, cruce con majadas y fauna silvestre (liebres, perdices, zorros grises).",
      tips: "Llevar kit antipinchazos reforzado con liquido sellador debido a las espinas de espinillo y tusca en los laterales.",
      coords: [-31.1200, -66.6000]
    },
    {
      id: "cielos_astroturismo",
      title: "Mirador de Astroturismo Pampa Limpia",
      category: "astronomia",
      categoryLabel: "Astroturismo & Estrellas",
      tag: "Cielo Pristino Bortle 1",
      localImage: "./images/cielo-nocturno.jpg",
      image: "./images/cielo-nocturno.jpg",
      gallery: [
        "./images/cielo-nocturno.jpg",
        "./images/cielo-nocturno-2.jpg",
        "./images/cielo-nocturno-3.jpg"
      ],
      description: "Lejos de cualquier contaminacion luminica urbana, Villa Casana posee uno de los cielos mas puros del Cono Sur, donde la Via Lactea se proyecta con textura y sombras en el suelo.",
      difficulty: "Baja (Acceso vehicular directo)",
      highlight: "Visibilidad a simple vista de las Nubes de Magallanes, Nebulosa de Orion, Carina y cumulos globulares.",
      tips: "Utilizar siempre luz roja para no perder la adaptacion nocturna de los ojos. Abrigo termico aun en noches de verano.",
      coords: [-31.0600, -66.5750]
    },
    {
      id: "pozos_arroyos",
      title: "Cascada del Sur y Pozos de Agua de Temporal",
      category: "naturaleza",
      categoryLabel: "Naturaleza & Aguas Serranas",
      tag: "Oasis Oculto",
      localImage: "./images/pozos-arroyos.jpg",
      image: "./images/pozos-arroyos.jpg",
      description: "Rincon singular ubicado al sur de Villa Casana: un modesto y preciado salto de agua que brota entre formaciones rocosas. En una region arida como Los Llanos, este hilo de agua fresca representa un verdadero tesoro natural celebrado por los pobladores.",
      difficulty: "Caminata corta (4x4 + senderismo)",
      highlight: "Vegetacion serrana, rumor de agua entre piedras y descanso reparador en pleno monte.",
      tips: "Caminar con precaucion por el cauce rocoso. Cuidar celosamente la limpieza de las fuentes de agua.",
      coords: [-31.0500, -66.5790]
    },
    {
      id: "casa_de_piedra",
      title: "La Casa de Piedra y Aleros Olongastas",
      category: "cultura",
      categoryLabel: "Arqueologia & Pasado Olongasta",
      tag: "Sitio Sagrado Milenario",
      localImage: "./images/casa-de-piedra.jpg",
      image: "./images/casa-de-piedra.jpg",
      gallery: [
        "./images/casa-de-piedra.jpg",
        "./images/casa-de-piedra-interior.jpg",
        "./images/casa-de-piedra-3.jpg"
      ],
      description: "Impresionante formacion rocosa y cueva natural de unos 4 metros de altura por 8 metros de diametro. En su interior se conservan valiosos petroglifos, arte rupestre y morteros ceremoniales olongastas donde se realizaban rituales sagrados dedicados al sol y a la luna, ademas de servir como refugio y silo natural para resguardo de viveres.",
      difficulty: "Caminata accesible (1.5 km)",
      highlight: "Petroglifos ancestrales, morteros comunales tallados en la roca madre y cosmovision de los pueblos originarios de Los Llanos.",
      tips: "Ingresar con sumo respeto: no tocar las inscripciones rupestres ni encender fuego. Llevar linterna para observar con claridad los detalles del alero.",
      coords: [-31.0580, -66.5890],
      wikilocUrl: "https://es.wikiloc.com/rutas-todo-terreno/casa-de-piedra-villa-casana-15673850"
    },
    {
      id: "plaza_del_carmen",
      title: "Plaza Virgen del Carmen y Palmeras Historicas",
      category: "cultura",
      categoryLabel: "Casco Urbano & Encuentro",
      tag: "Corazon del Pueblo",
      localImage: "./images/plaza-nueva-1.jpg",
      image: "./images/plaza-nueva-1.jpg",
      gallery: [
        "./images/plaza-nueva-1.jpg",
        "./images/plaza-nueva-2.jpg",
        "./images/plaza-carmen.jpg",
        "./images/pueblo.jpg"
      ],
      description: "El prolijo y apacible centro neuralgico de Villa Casana. Resaltan sus caracteristicas palmeras en medio del paisaje agreste riojano, sus bancos de descanso a la sombra y el espiritu donde el tiempo transcurre sin apuro.",
      difficulty: "Facil / Para toda la familia",
      highlight: "Palmeras de la plaza, entorno cuidado por los vecinos, proximidad a la capilla y la escuela.",
      tips: "Sentarse en sus bancos al atardecer para contemplar la serenidad del pueblo y charlar con los lugarenos.",
      coords: [-31.0665, -66.5830]
    },
    {
      id: "capilla_del_carmen",
      title: "Capilla Nuestra Senora del Carmen",
      category: "cultura",
      categoryLabel: "Patrimonio Religioso & Fiestas",
      tag: "Devocion Rural",
      localImage: "./images/iglesia-capilla.jpg",
      image: "./images/iglesia-capilla.jpg",
      gallery: [
        "./images/iglesia-capilla.jpg",
        "./images/capilla-del-carmen.jpg",
        "./images/capilla-sra-del-carmen-villa-casana.webp",
        "./images/iglesia-del-carmen.jpg",
        "./images/fiesta-virgen-del-carmen.jpg"
      ],
      description: "El templo de fe de Villa Casana y epicentro de la comunidad. Custodia la imagen de Nuestra Senora del Carmen, patrona del pueblo, convocando cada ano a familias campesinas y fieles de toda la region para sus tradicionales fiestas patronales, misas y procesiones gauchas.",
      difficulty: "Facil (Frente a la plaza)",
      highlight: "Arquitectura criolla rural, campana historica de bronce y calida atmosfera comunitaria.",
      tips: "Visitar en epoca de novena patronal (julio) para presenciar el colorido desfile gaucho y degustar los platos tipicos comunitarios.",
      coords: [-31.0660, -66.5828]
    },
    {
      id: "escuela_rural",
      title: "Cuna de la Educacion Rural (Escuela de Villa Casana)",
      category: "cultura",
      categoryLabel: "Memoria & Pioneros Docentes",
      tag: "Hospitalidad Rural",
      localImage: "./images/escuela-frente.jpg",
      image: "./images/escuela-frente.jpg",
      gallery: [
        "./images/escuela-frente.jpg",
        "./images/escuela-villa-casana.jpg",
        "./images/escuela-patio.jpg",
        "./images/huerta-escolar.jpg",
        "./images/mural-escuela.jpg"
      ],
      description: "Edificio escolar que continua el noble legado de la educacion en Los Llanos. Heredera de aquella historica maestra que durante 35 anos educo a generaciones en su casa, hoy docentes y alumnos continuan recibiendo a los visitantes con una calidez inolvidable.",
      difficulty: "Paseo por el casco del pueblo",
      highlight: "Encuentro cordial con la comunidad educativa, orgullo por la ensenanza publica de frontera rural.",
      tips: "Si visitas en dia de clases, acercarse con respeto para conocer las actividades que desarrollan los chicos del pueblo.",
      coords: [-31.0664, -66.5840]
    },
    {
      id: "quebrada_vallecito",
      title: "Quebrada de Vallecito",
      category: "naturaleza",
      categoryLabel: "Naturaleza & Quebradas",
      tag: "Paisaje Serrano",
      localImage: "./images/pozos-arroyos.jpg",
      image: "./images/pozos-arroyos.jpg",
      gallery: [
        "./images/pozos-arroyos.jpg",
        "./images/quebrada-vallecito-1.jpg",
        "./images/quebrada-vallecito-2.jpg",
        "./images/quebrada-vallecito-3.jpg",
        "./images/quebrada-vallecito-4.jpg",
        "./images/quebrada-vallecito-5.jpg",
        "./images/quebrada-vallecito-6.jpg"
      ],
      description: "Un canadon serrano de singular belleza que se abre entre las sierras de Los Llanos. Sus paredes de roca ocre y rojiza encauzan el viento fresco del monte, ofreciendo un sendero de sombra y silencio rodeado de vegetacion nativa.",
      difficulty: "Caminata accesible (4x4 + sendero)",
      highlight: "Formaciones rocosas, vegetacion autoctona, flora medicinal y fauna silvestre de los canadones serranos.",
      tips: "Recorrer a primera hora de la manana para aprovechar la sombra natural del canadon. Ideal para fotografia de paisaje.",
      coords: [-31.0700, -66.5950]
    },
    {
      id: "rio_la_junta",
      title: "Rio La Junta",
      category: "naturaleza",
      categoryLabel: "Naturaleza & Rios Serranos",
      tag: "Oasis del Monte",
      localImage: "./images/rio-la-junta.jpg",
      image: "./images/rio-la-junta.jpg",
      gallery: [
        "./images/rio-la-junta.jpg",
        "./images/rio-la-junta-2.jpg",
        "./images/la-junta-1.jpg",
        "./images/la-junta-4.jpg",
        "./images/la-junta-5.jpg",
        "./images/la-junta-6.jpg",
        "./images/la-junta-7.jpg",
        "./images/la-junta-8.jpg",
        "./images/la-junta-9.jpg"
      ],
      description: "El Rio La Junta representa el pulso hidrico de la zona. Sus aguas cristalinas nacen de las sierras y alimentan el monte ribereno, creando un corredor de vida verde en medio del paisaje arido de Los Llanos riojanos.",
      difficulty: "Acceso vehicular + caminata corta",
      highlight: "Vegetacion de ribera, pozas naturales, avistamiento de aves acuaticas y el sonido del agua entre piedras.",
      tips: "En epoca estival (enero-febrero) puede tener caudal elevado. Consultar a los lugarenos el estado del cauce antes de cruzar.",
      coords: [-31.0750, -66.5800]
    },
    {
      id: "casas_viejas",
      title: "Casas Viejas  Ruinas y Patrimonio Rural",
      category: "cultura",
      categoryLabel: "Patrimonio & Historia Rural",
      tag: "Arqueologia Criolla",
      localImage: "./images/cartel-casas-viejas.jpg",
      image: "./images/cartel-casas-viejas.jpg",
      gallery: [
        "./images/cartel-casas-viejas.jpg",
        "./images/casas-viejas-1.jpg",
        "./images/casas-viejas-2.jpg",
        "./images/casas-viejas-3.jpg",
        "./images/casas-viejas-4.jpg",
        "./images/cerro-espeche-panoramica.jpg",
        "./images/circuito-4x4.jpg"
      ],
      description: "Un sitio historico que guarda la memoria de los primeros pobladores de la region. Las ruinas de adobe y piedra de antiguas viviendas criollas narran silenciosamente decadas de vida rural, trabajo en el monte y comunidad serrana.",
      difficulty: "Paseo accesible en vehiculo 4x4",
      highlight: "Arquitectura vernacula de barro y piedra, muros centenarios, objetos abandonados y el paisaje abierto de Los Llanos.",
      tips: "No remover ni llevarse objetos del sitio. Fotografiar con respeto el legado patrimonial de los primeros pobladores de la zona.",
      coords: [-31.0800, -66.5700]
    },
    {
      id: "la_batea",
      title: "La Batea  Formaciones y Pozas Serranas",
      category: "naturaleza",
      categoryLabel: "Naturaleza & Pozas de Piedra",
      tag: "Rincon Secreto",
      localImage: "./images/la-batea-1.jpg",
      image: "./images/la-batea-1.jpg",
      gallery: [
        "./images/la-batea-1.jpg",
        "./images/la-batea-2.jpg",
        "./images/la-batea-3.jpg"
      ],
      description: "Singulares piletones y piletones de roca labrados pacientemente por el agua y el tiempo en las estribaciones de las sierras. Un refugio natural de serenidad, rocas esculpidas y monte riojano en estado puro.",
      difficulty: "Caminata y huella de monte",
      highlight: "Ollas de piedra naturales, formaciones geologicas pulidas por agua y fauna serrana.",
      tips: "Llevar calzado con suela antideslizante para caminar con seguridad sobre las piedras. Respetar y mantener limpio el lugar.",
      coords: [-31.0520, -66.5850]
    }
  ],

  // Directorio de Pobladores, Guias y Productores Locales con WhatsApp Directo
  localContacts: [
    {
      id: "ventas_estefania",
      name: "Estefania Avila",
      role: "Venta de Cosas Dulces, Saladas y Productos Regionales",
      badge: "Ventas & Sabores",
      badgeColor: "bg-amber-600/90 text-white",
      description: "Elaboracion casera y venta de cosas dulces y saladas: pan casero, tortas fritas, reposteria criolla, empanadas y productos tipicos de Villa Casana.",
      phoneDisplay: "3821495845",
      whatsappNumber: "5493821495845",
      whatsappMsg: "Hola Estefania Te contacto desde la app turistica de Villa Casana para consultar por cosas dulces, saladas y productos disponibles para encargar."
    },
    {
      id: "guia_espeche",
      name: "Guia Baqueano - Cerro Espeche",
      role: "Trekking y Senderismo Guiado",
      badge: "Guia Local",
      badgeColor: "bg-emerald-600/90 text-white",
      description: "Acompanamiento seguro en senderos serranos, conocimiento de fauna, flora medicinal y puntos de vista panoramicos.",
      phoneDisplay: "+54 9 3821 40-1234",
      whatsappNumber: "5493821401234",
      whatsappMsg: "Hola! Vi su contacto en la app turistica de Villa Casana. Quisiera consultar disponibilidad y tarifas para realizar una excursion guiada al Cerro Espeche."
    },
    {
      id: "chivito_riojano",
      name: "Puesto Criollo - Chivito y Quesillos",
      role: "Carnes de Monte & Dulces Caseros",
      badge: "Sabores de los Llanos",
      badgeColor: "bg-orange-600/90 text-white",
      description: "Venta de chivito lechal de pastoreo libre en el monte, quesillos frescos de cabra y arropes tradicionales de chanar e higo.",
      phoneDisplay: "3821495845",
      whatsappNumber: "5493821495845",
      whatsappMsg: "Hola Estefania! Te contacto desde la app de Villa Casana para consultar y encargar chivito riojano, quesillos o productos de monte."
    },
    {
      id: "auxilio_4x4",
      name: "Traslados & Auxilio Rural",
      role: "Asistencia en Caminos y Huellas",
      badge: "Logistica y 4x4",
      badgeColor: "bg-blue-600/90 text-white",
      description: "Vehiculo 4x4 para traslados desde Chepes, apoyo mecanico basico para ciclistas y orientacion en huellas de tierra.",
      phoneDisplay: "+54 9 3821 47-3456",
      whatsappNumber: "5493821473456",
      whatsappMsg: "Hola! Vi su contacto en la app de Villa Casana. Necesito consultar por traslados / estado del camino desde Chepes."
    },
    {
      id: "hospedaje_rural",
      name: "Hospedaje & Acampe Rural 'Las Estrellas'",
      role: "Alojamiento Campesino y Camping",
      badge: "Hospedaje",
      badgeColor: "bg-purple-600/90 text-white",
      description: "Habitaciones sencillas y familiares, espacio para carpas con sombra de algarrobo, sanitarios y sector de fogon nocturno para astroturismo.",
      phoneDisplay: "+54 9 3821 49-7890",
      whatsappNumber: "5493821497890",
      whatsappMsg: "¡Hola! Vi su hospedaje en la app de Villa Casana. Me gustaria saber tarifas y disponibilidad para alojarme / acampar."
    }
  ],

  // Historias, Origenes y Leyendas de Villa Casana
  historyAndLegends: [
    {
      id: "pasado_olongasta",
      title: "El Pasado Olongasta y el Santuario de la Casa de Piedra",
      category: "Pueblos Originarios & Arqueologia",
      icon: "🪨",
      image: "./images/casa-de-piedra.jpg",
      summary: "La huella milenaria de los olongastas en una cueva natural de 4 metros de altura por 8 metros de diametro.",
      content: "La region de Villa Casana estuvo habitada originalmente por los olongastas, pueblo originario de Los Llanos riojanos. Su legado perdura en la 'Casa de Piedra', una imponente cueva natural donde se conservan petroglifos, arte rupestre y morteros ceremoniales. En su interior realizaban rituales sagrados dedicados al sol, la luna y sus deidades, ademas de utilizarla como refugio seguro y silo para el resguardo de viveres y frutos del monte."
    },
    {
      id: "primera_escuela",
      title: "Historia de la Educacion Rural: 35 Anos de Vocacion",
      category: "Educacion & Comunidad",
      icon: "📖",
      image: "./images/rosa-oropel.jpg",
      summary: "Los inicios de la ensenanza en casas de familia y la historica maestra Rosa Oropel de Tapia, quien educo a generaciones.",
      content: "La educacion en Villa Casana nacio del esfuerzo solidario. En sus comienzos, las clases se dictaban de manera precaria en viviendas particulares. La recordada maestra rural Rosa Oropel de Tapia consagro mas de 35 anos de su vida a la ensenanza, convirtiendo su propia casa en escuela para cerca de 60 alumnos de la comarca, quienes cursaban alli hasta el septimo grado antes de continuar sus estudios en otras localidades. Hoy la Escuela N 35 lleva con honor su nombre."
    },
    {
      id: "capilla_carmen",
      title: "Capilla Nuestra Senora del Carmen y Fiestas Patronales",
      category: "Fe, Identidad y Fiestas",
      icon: "⛪",
      image: "./images/iglesia-capilla.jpg",
      summary: "El centro de la devocion religiosa local y nucleo de encuentro de toda la comarca serrana.",
      content: "La Capilla Nuestra Senora del Carmen representa el pilar espiritual y social de Villa Casana. Es el escenario central de las fiestas patronales que cada ano reunen a familias radicadas en el pueblo y a aquellos que regresan desde distintas provincias. Las celebraciones combinan misas, procesiones por las calles del pueblo con banderines festivos, destrezas gauchas, asados criollos y musica popular."
    },
    {
      id: "vida_rural_monte",
      title: "Tradicion y Sabores de Villa Casana",
      category: "Costumbres y Oficios Criollos",
      icon: "🍞",
      image: "./images/sabores-casana.jpg",
      summary: "Dulces, arropes artesanales de chanar, higos, quesillos y el pan casero horneado a lena en horno de barro.",
      content: "Villa Casana conserva con orgullo la esencia de la vida rural riojana: 'Revalorizar nuestros sabores es preservar nuestra identidad'. Los pobladores elaboran arropes tradicionales, dulces de membrillo e higo, miel de monte, cuidan majadas caprinas y mantienen encendidos los tradicionales hornos de barro donde se hornea el pan casero y las tortas fritas criollas."
    },
    {
      id: "cronica_expedicion",
      title: "Cronica de Expedicion: Entre Sierras y Hospitalidad",
      category: "Bitacora de Viajeros (Lodelpampa)",
      icon: "🚙",
      image: "./images/circuito-4x4.jpg",
      summary: "El testimonio de aventureros 4x4 que recorrieron las huellas entre Tuani y Casana, descubriendo la cascada secreta y la amabilidad local.",
      content: "Expedicionarios 4x4 en travesias por el sur riojano documentaron la experiencia unica de ingresar a Villa Casana: un poblado prolijo y apacible custodiado por palmeras en su plaza, donde maestros y alumnos de la escuela reciben a los viajeros con genuina cordialidad, y los baqueanos guian hacia el modesto salto de agua del sur que brota milagroso entre las rocas del monte."
    },
    {
      id: "esencia_tiempo_saluda",
      title: "Donde el Tiempo Todavia Saluda por el Nombre",
      category: "Identidad & Alma de Pueblo (Orion FM)",
      icon: "🌅",
      image: "./images/bienvenidos.jpg",
      summary: "La magia de un rincon riojano donde la modernidad no borro la sencillez, la cercania y el mate compartido sin apuro.",
      content: "Como describe la cronica de Orion FM Chepes, quien llega a Villa Casana descubre mucho mas que un destino: descubre silencios que abrazan, ninos jugando libres, vecinos conversando en la vereda y amaneceres anaranjados sobre las sierras. Un pueblo nacido al calor del trabajo rural y la solidaridad donde cada saludo lleva el nombre de quien lo recibe, recordandonos que el interior del interior late vivo, autentico y con el corazon abierto."
    }
  ],

  // Video documental: Vicenta Pereyra, artesana de Villa Casana
  artesanaVideo: {
    title: "Vicenta Pereyra. Artesana de Villa Casana",
    author: "Secretaría de Culturas La Rioja",
    authorUrl: "https://www.youtube.com/@secretariadeculturaslarioj9257",
    videoUrl: "https://youtu.be/GF2daJKgbQ4",
    embedUrl: "https://www.youtube.com/embed/GF2daJKgbQ4",
    thumbnail: "./images/vicenta-pereyra.jpg",
    portrait: "./images/artesano.jpg",
    resumen: "Un registro audiovisual de la Secretaría de Culturas de La Rioja que retrata a Vicenta Pereyra, artesana de Villa Casana, y el valor de los oficios que se transmiten de mano en mano.",
    descripcion: "En el corazón de Los Llanos riojanos, Vicenta Pereyra mantiene vivo el saber artesanal de Villa Casana. La rueca, las fibras naturales y el telar criollo son parte de una memoria familiar que se aprende mirando y haciendo, y que hoy sigue dando forma a mantas, ponchos y piezas únicas. Este video invita a conocer su taller, su historia y el orgullo de un oficio que sostiene la identidad del pueblo."
  },

  // Gastronomía típica de Los Llanos Riojanos
  gastronomia: [
    {
      id: "cabrito-asado",
      nombre: "Cabrito Asado a la Estaca / a la Parrilla",
      categoria: "Plato principal",
      ubicacion: "Chepes - Villa Casana",
      imagen: "./images/cabrito-asado.jpg",
      galeria: [
        "./images/cabrito-asado.jpg",
        "./images/cabrito-2.jpg",
        "./images/cabrito-1.jpg"
      ],
      descripcion: "El plato insignia de la región de Los Llanos Riojanos: carne tierna de cabrito lechón alimentado con pasturas naturales y cocinado lentamente a las brasas o a la estaca."
    },
    {
      id: "empanadas-riojanas",
      nombre: "Empanadas Riojanas",
      categoria: "Entrada",
      ubicacion: "Chepes - Villa Casana",
      imagen: "./images/empanadas-riojanas.jpg",
      descripcion: "Clásicas empanadas jugosas de carne cortada a cuchillo, sazonadas con comino, ají molido, huevo duro, cebolla de verdeo y aceitunas de la región."
    },
    {
      id: "locro-criollo",
      nombre: "Locro Criollo",
      categoria: "Guiso",
      ubicacion: "Chepes - Villa Casana",
      imagen: "./images/locro-criollo.jpg",
      descripcion: "Guiso tradicional a base de maíz blanco, porotos, zapallo anco, falda y embutidos, ideal para celebraciones y jornadas de campo."
    },
    {
      id: "humita-en-chala",
      nombre: "Humita en Chala / en Olla",
      categoria: "Plato regional",
      ubicacion: "Chepes - Villa Casana",
      imagen: "./images/humita-en-chala.jpg",
      descripcion: "Preparación a base de choclo fresco rallado, zapallo, queso cremoso y un refrito de cebolla y pimentón, servida tradicionalmente en la propia chala del choclo."
    },
    {
      id: "pan-casero-chicharrones",
      nombre: "Pan Casero con Chicharrones y Tortas Fritas",
      categoria: "Panadería y merienda",
      ubicacion: "Chepes - Villa Casana",
      imagen: "./images/pan-casero.jpg",
      descripcion: "Elaboración artesanal en horno de barro, ideal para acompañar el mate a la tarde."
    },
    {
      id: "quesillo-arrope",
      nombre: "Dulces Artesanales (Higo, Zapallo, Quesillo con Arrope)",
      categoria: "Postre",
      ubicacion: "Chepes - Villa Casana",
      imagen: "./images/dulces-artesanales.jpg",
      descripcion: "Postres tradicionales riojanos a base de frutas regionales en almíbar, acompañados de quesillo de cabra y arrope de chañar o tuna."
    }
  ],

  stars: [
    { name: "Cruz del Sur (Crux)", type: "Constelacion Guia", desc: "La brujula natural del hemisferio sur. Senala directamente hacia el Polo Sur Celeste.", brightness: "Magnitud 0.7 - Muy brillante" },
    { name: "Alfa Centauri (Rigil Kentaurus)", type: "Estrella Puntera", desc: "La estrella mas cercana a nuestro sistema solar (4.3 anos luz). Es uno de los 'Punteros de la Cruz'.", brightness: "Magnitud -0.27" },
    { name: "Beta Centauri (Hadar)", type: "Estrella Puntera", desc: "La segunda estrella puntera, gigante azul distante que corona la constelacion del Centauro.", brightness: "Magnitud 0.61" },
    { name: "Gran Nube de Magallanes", type: "Galaxia Satelite", desc: "Galaxia enana satelite de la Via Lactea, claramente visible a simple vista como una nube lechosa flotante.", brightness: "Objeto de cielo profundo" },
    { name: "Cinturon de Orion (Tres Marias)", type: "Asterismo", desc: "Alnitak, Alnilam y Mintaka, visibles en las noches de primavera y verano en el cenit riojano.", brightness: "Magnitud 1.7" },
    { name: "Nebulosa Carina (NGC 3372)", type: "Nebulosa de Emision", desc: "Cuatro veces mas grande que la Nebulosa de Orion, un espectaculo fascinante con binoculares.", brightness: "Magnitud 1.0" }
  ],

  checklistItems: [
    { id: "agua", label: "Minimo 3 litros de agua potable por persona por dia", category: "Supervivencia", defaultChecked: true },
    { id: "auxilio", label: "Rueda de auxilio revisada, llave de cruz y compresor 12V", category: "Vehiculo", defaultChecked: true },
    { id: "efectivo", label: "Dinero en efectivo (no hay cajeros ni cobro con tarjeta en la zona)", category: "Logistica", defaultChecked: false },
    { id: "calzado", label: "Calzado de trekking con buen agarre para espinas y piedras", category: "Vestimenta", defaultChecked: false },
    { id: "solar", label: "Protector solar FPS 50+, sombrero de ala ancha y anteojos UV", category: "Salud", defaultChecked: false },
    { id: "linterna", label: "Linterna frontal con modo de luz roja para la noche", category: "Astro", defaultChecked: false },
    { id: "abrigo", label: "Abrigo termico / rompeviento (la temperatura desciende de noche)", category: "Vestimenta", defaultChecked: false },
    { id: "bolsa_residuos", label: "Bolsa de residuos para traer de regreso toda la basura", category: "Eco", defaultChecked: true }
  ],

  // Rutometro y Waypoints para Navegacion Offline (Chepes a Villa Casana)
  routeWaypoints: [
    {
      km: "0.0",
      title: "Chepes - Salida Norte / Repostaje",
      coords: [-31.3508, -66.5947],
      elevation: "650 msnm",
      type: "Punto de Partida",
      badge: "Ultimo Combustible",
      badgeColor: "bg-blue-600/90 text-white",
      instruction: "Llenar tanque en estaciones YPF de Chepes, verificar rueda de auxilio, bidones de agua y retirar efectivo. Tomar salida norte hacia zona rural.",
      warning: "Ultimo punto con senal celular 4G, farmacias, gomero y cajeros automaticos.",
      icon: "⛽"
    },
    {
      km: "4.5",
      title: "Fin del Asfalto / Ingreso a Camino Rural",
      coords: [-31.3120, -66.5935],
      elevation: "645 msnm",
      type: "Transicion de Calzada",
      badge: "Fin de Pavimento",
      badgeColor: "bg-amber-600/90 text-white",
      instruction: "Finaliza el pavimento. Comienza camino vecinal de tierra y ripio consolidado. Reducir velocidad a 40-50 km/h y encender luces bajas.",
      warning: "Comienza la perdida paulatina de senal celular. Activar modo offline de la app.",
      icon: "🛣️"
    },
    {
      km: "11.2",
      title: "Baden Rio Seco La Aguadita",
      coords: [-31.2580, -66.5910],
      elevation: "640 msnm",
      type: "Paso de Agua de Temporal",
      badge: "Baden de Arena",
      badgeColor: "bg-amber-700/90 text-white",
      instruction: "Cruce de lecho de rio seco con arena y grava suelta. Mantener velocidad pareja en 2da marcha sin maniobras bruscas de frenado.",
      warning: "En temporada de tormentas estivales (verano), verificar que no baje creciente antes de cruzar.",
      icon: "🌊"
    },
    {
      km: "19.8",
      title: "Puesto Campesino Los Algodones",
      coords: [-31.1890, -66.5885],
      elevation: "635 msnm",
      type: "Bifurcacion Rural",
      badge: "Rumbo Norte Directo",
      badgeColor: "bg-emerald-600/90 text-white",
      instruction: "Puesto campesino a la vera de la traza. Mantener siempre la huella principal consolidada que va derecho al Norte. Desestimar desvios hacia el Este.",
      warning: "Pobladores hospitalarios disponibles en caso de requerir auxilio mecanico o consultas.",
      icon: "🏡"
    },
    {
      km: "27.4",
      title: "Canada del Espinillo - Tramo Pedregoso",
      coords: [-31.1320, -66.5865],
      elevation: "630 msnm",
      type: "Paso Rocoso",
      badge: "Precaucion Piedras",
      badgeColor: "bg-yellow-600/90 text-white",
      instruction: "Calzada con ondulaciones y piedras lajas sueltas. Conducir a velocidad moderada para cuidar cubiertas y suspension.",
      warning: "Atencion a animales sueltos (chivos, terneros, burros) pastando en las banquinas de monte.",
      icon: "🪨"
    },
    {
      km: "34.0",
      title: "Vista Panoramica del Cerro Espeche",
      coords: [-31.0890, -66.5845],
      elevation: "638 msnm",
      type: "Mirador Natural",
      badge: "Hito Visual",
      badgeColor: "bg-purple-600/90 text-white",
      instruction: "A la izquierda y al frente se alza imponente la silueta de piedra del Cerro Espeche. El valle comienza a encajonarse entre sierras bajas.",
      warning: "Tramo de curvas ciegas sucesivas. Mantener la derecha de la huella.",
      icon: "⛰️"
    },
    {
      km: "38.5",
      title: "Desvio a Cascada del Sur (Afluente)",
      coords: [-31.0550, -66.5810],
      elevation: "645 msnm",
      type: "Desvio Turistico",
      badge: "Salto de Agua",
      badgeColor: "bg-cyan-600/90 text-white",
      instruction: "A la derecha se abre la huella secundaria hacia el salto de agua (1.8 km). Apta para vehiculos altos/4x4 o senderismo a pie. La ruta principal sigue al Norte.",
      warning: "Suelo de lecho pedregoso. No ingresar con automoviles de chasis muy bajo.",
      icon: "💧"
    },
    {
      km: "40.0",
      title: "Villa Casana - Plaza Virgen del Carmen & Capilla",
      coords: [-31.0667, -66.5833],
      elevation: "650 msnm",
      type: "Casco Urbano",
      badge: "Llegada al Pueblo",
      badgeColor: "bg-emerald-600/90 text-white",
      instruction: "Llegada al corazon del pueblo. Plaza con palmeras historicas, Capilla Ntra. Sra. del Carmen y Escuela Rural. Area comunitaria con sombra.",
      warning: "Velocidad maxima 20 km/h. Respetar la tranquilidad y saludar con cordialidad a los vecinos.",
      icon: "🌴"
    },
    {
      km: "41.5",
      title: "La Casa de Piedra - Alero Rupestre Olongasta",
      coords: [-31.0580, -66.5890],
      elevation: "670 msnm",
      type: "Sitio Arqueologico",
      badge: "Petroglifos Sagrados",
      badgeColor: "bg-amber-600/90 text-white",
      instruction: "Tomar calle oeste desde la plaza por 1.5 km. Estacionar y caminar 200 m hasta el alero rocoso con morteros y petroglifos milenarios.",
      warning: "Patrimonio arqueologico protegido: estrictamente prohibido tocar dibujos rupestres o encender fuego.",
      icon: "🏛️"
    },
    {
      km: "44.0",
      title: "Base de Ascenso al Cerro Espeche",
      coords: [-31.0450, -66.5920],
      elevation: "710 msnm",
      type: "Senda de Trekking",
      badge: "Cumbre Panoramica",
      badgeColor: "bg-rose-600/90 text-white",
      instruction: "Punto de inicio de la senda hacia la cima del cerro. Sendero senalizado con pircas de piedra hacia el mirador panoramico 360 de Los Llanos.",
      warning: "Llevar minimo 2 litros de agua por persona, calzado de suela con dibujo y avisar en el pueblo antes de subir.",
      icon: "🧗"
    },
    {
      km: "54.0",
      title: "Travesia Serrana hacia Tuani (Exclusivo 4x4)",
      coords: [-30.9850, -66.6120],
      elevation: "820 msnm",
      type: "Aventura 4x4 Off-Road",
      badge: "Solo Doble Traccion",
      badgeColor: "bg-red-700/90 text-white",
      instruction: "Continuacion por huella agreste hacia el paraje serrano de Tuani, remontando quebradas rocosas y cuestas con piedras.",
      warning: "Solo para vehiculos 4x4 con caja reductora y conductores experimentados. No transitar de noche.",
      icon: "🚙"
    }
  ]
};

// Global App State
const state = {
  currentTab: 'explorar',
  filter: 'todos',
  astroRedMode: false,
  mapInitialized: false,
  mapInstance: null,
  mapMode: 'leaflet', // 'leaflet' | 'vector'
  gpsWatching: false,
  gpsWatchId: null,
  userPos: null,
  userHeading: null,
  gpsOrientationHandler: null,
  gpsMarker: null,
  checklist: []
};

// Fallback helper for local images
function handleImageError(imgElement, fallbackUrl) {
  imgElement.onerror = null;
  imgElement.src = fallbackUrl;
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadChecklistState();
  initTabs();
  renderAttractions();
  renderLocalContacts();
  renderHistoryAndLegends();
  renderArtesanaVideo();
  renderGastronomia();
  loadGastronomiaData();
  renderStars();
  renderChecklist();
  renderRutometro();
  initMapModeSwitcher();
  initVectorCroquis();
  initOfflineGpsTracker();
  initHeroSky();
  initPlanetariumCanvas();
  initAstroRedModeToggle();
  initPwaInstall();
  updateMoonPhaseWidget();
});

// Tab Navigation
function initTabs() {
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  state.currentTab = tabId;

  // Update tab buttons UI
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    const isCurrent = btn.getAttribute('data-tab') === tabId;
    btn.classList.toggle('text-amber-500', isCurrent);
    btn.classList.toggle('border-amber-500', isCurrent);
    btn.classList.toggle('text-slate-400', !isCurrent);
    btn.classList.toggle('border-transparent', !isCurrent);
  });

  // Mobile Bottom Bar active indicator
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    const isCurrent = btn.getAttribute('data-tab') === tabId;
    btn.classList.toggle('text-amber-400', isCurrent);
    btn.classList.toggle('text-slate-400', !isCurrent);
  });

  // Show/Hide Tab Panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('hidden', panel.id !== `tab-${tabId}`);
  });

  // If opening map tab, resize leaflet properly
  if (tabId === 'mapa') {
    setTimeout(() => {
      initMap();
      if (state.mapInstance) {
        state.mapInstance.invalidateSize();
      }
    }, 150);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Attractions with Local Image priority & fallback
function renderAttractions() {
  const container = document.getElementById('attractions-grid');
  if (!container) return;

  const filtered = state.filter === 'todos' 
    ? APP_DATA.attractions 
    : APP_DATA.attractions.filter(item => item.category === state.filter);

  container.innerHTML = filtered.map(item => `
    <article class="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer" onclick="openAttractionModal('${item.id}')">
      <div class="relative h-56 overflow-hidden bg-slate-900">
        <img 
          src="${item.localImage || item.image}" 
          onerror="handleImageError(this, '${item.image}')"
          alt="${item.title}" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
        <span class="absolute top-3 left-3 bg-amber-600/90 backdrop-blur-md text-amber-50 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          ${item.tag}
        </span>
        <span class="absolute bottom-3 left-3 text-xs font-medium text-amber-300 bg-slate-900/80 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
          ${item.categoryLabel}
        </span>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
            ${item.title}
          </h3>
          <p class="text-slate-300 text-sm mt-2 line-clamp-2 leading-relaxed">
            ${item.description}
          </p>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            ${item.difficulty.split('(')[0]}
          </span>
          <span class="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Ver detalle &rarr;
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

// Render Local Contacts & Baqueanos with WhatsApp buttons
function renderLocalContacts() {
  const container = document.getElementById('contacts-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.localContacts.map(c => `
    <div class="glass-card p-5 rounded-2xl flex flex-col justify-between space-y-4 border border-slate-800/80 hover:border-amber-500/30 transition-all">
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-2">
          <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${c.badgeColor}">
            ${c.badge}
          </span>
          <span class="text-xs text-slate-400 font-mono flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            ${c.phoneDisplay}
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-100">${c.name}</h4>
        <p class="text-xs text-amber-400 font-medium">${c.role}</p>
        <p class="text-xs text-slate-300 leading-relaxed">${c.description}</p>
      </div>

      <div class="pt-3 border-t border-slate-800/80 flex items-center gap-2">
        <a 
          href="https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(c.whatsappMsg)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-700/20"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          Enviar WhatsApp
        </a>
        <a 
          href="tel:${c.phoneDisplay.replace(/[^0-9]/g, '')}" 
          class="bg-slate-800 hover:bg-slate-700 text-slate-200 p-2 rounded-xl transition-all"
          title="Llamar directamente"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </a>
      </div>
    </div>
  `).join('');
}

// Render History, Heritage and Legends
function renderHistoryAndLegends() {
  const container = document.getElementById('history-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.historyAndLegends.map(h => `
    <div class="glass-card rounded-2xl overflow-hidden border-l-4 border-amber-500 flex flex-col group">
      ${h.image ? `
        <div class="h-44 sm:h-52 w-full overflow-hidden bg-slate-900 relative">
          <img 
            src="${h.image}" 
            alt="${h.title}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            loading="lazy" 
          />
        </div>
      ` : ''}
      <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-2xl">${h.icon}</span>
            <span class="text-[11px] font-mono uppercase bg-slate-900/80 text-amber-400 px-2.5 py-0.5 rounded border border-slate-800">
              ${h.category}
            </span>
          </div>
          <h3 class="text-lg font-bold text-slate-100">${h.title}</h3>
          <p class="text-xs text-amber-300/90 font-medium mt-1">${h.summary}</p>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/60">${h.content}</p>
      </div>
    </div>
  `).join('');
}

// Render the artisan documentary section (Vicenta Pereyra)
function renderArtesanaVideo() {
  const container = document.getElementById('artesana-video-section');
  if (!container) return;
  const v = APP_DATA.artesanaVideo;
  if (!v) return;

  container.innerHTML = `
    <div class="glass-panel rounded-3xl overflow-hidden border border-amber-500/20">
      <div class="grid grid-cols-1 lg:grid-cols-5">
        <a href="${v.videoUrl}" target="_blank" rel="noopener noreferrer" class="relative block lg:col-span-3 group bg-slate-950 min-h-[260px] lg:min-h-[360px]" title="Ver el video en YouTube">
          <img
            src="${v.thumbnail}"
            alt="Miniatura del video ${v.title}"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/10"></div>
          <span class="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Ver video
          </span>
          <span class="absolute inset-0 flex items-center justify-center">
            <span class="w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl ring-4 ring-white/20 transition-transform group-hover:scale-110">
              <svg class="w-8 h-8 ml-1 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </span>
          </span>
          <span class="absolute bottom-4 left-4 right-4 text-white">
            <span class="block text-[10px] font-bold uppercase tracking-wider text-amber-300">Documental &middot; Secretaría de Culturas</span>
            <span class="block text-lg sm:text-xl font-bold leading-tight mt-0.5">${v.title}</span>
          </span>
        </a>

        <div class="lg:col-span-2 p-6 sm:p-8 space-y-4 flex flex-col">
          <div class="flex items-center gap-3">
            <img src="${v.portrait}" alt="Vicenta Pereyra, artesana de Villa Casana" class="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/50" loading="lazy" />
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Oficios que perduran</span>
              <h3 class="text-xl font-black text-slate-100 leading-tight">Vicenta Pereyra</h3>
              <span class="text-xs text-slate-400">Artesana de Villa Casana</span>
            </div>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">${v.resumen}</p>
          <p class="text-xs text-slate-400 leading-relaxed">${v.descripcion}</p>
          <div class="mt-auto pt-3 flex flex-wrap gap-2">
            <a href="${v.videoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-red-700/20">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Ver en YouTube
            </a>
            <a href="${v.authorUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs px-4 py-2 rounded-xl transition-all">
              Secretaría de Culturas La Rioja &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Carga la ficha gastronómica desde el archivo de datos compartido.
// Si el navegador abre la app con file:// el fetch falla y se conserva
// el contenido embebido en APP_DATA (funcionamiento 100% offline).
function loadGastronomiaData() {
  fetch('./data/gastronomia.json', { cache: 'no-cache' })
    .then(response => (response.ok ? response.json() : null))
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        APP_DATA.gastronomia = data;
        renderGastronomia();
      }
    })
    .catch(() => { /* Sin conexión: se usa el contenido embebido */ });
}

// Render Gastronomia
function renderGastronomia() {
  const container = document.getElementById('gastronomia-grid');
  if (!container || !APP_DATA || !APP_DATA.gastronomia) return;

  container.innerHTML = APP_DATA.gastronomia.map(plato => {
    const galeria = Array.isArray(plato.galeria) ? plato.galeria : [];
    const galeriaHtml = galeria.length > 1 ? `
          <div class="mt-4 grid grid-cols-3 gap-1.5">
            ${galeria.map((src, i) => `
              <button type="button" onclick="document.getElementById('gastro-img-${plato.id}').src='${src}'" class="relative h-16 rounded-lg overflow-hidden border-2 ${i === 0 ? 'border-amber-500' : 'border-slate-700'} hover:border-amber-400 transition-colors" title="Ver foto ${i + 1} de ${plato.nombre}">
                <img src="${src}" alt="${plato.nombre} - foto ${i + 1}" class="w-full h-full object-cover" loading="lazy" />
              </button>
            `).join('')}
          </div>` : '';

    return `
    <div class="glass-card rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-lg flex flex-col hover:border-amber-500/40 transition-all">
      <img 
        src="${plato.imagen}" 
        id="gastro-img-${plato.id}"
        alt="${plato.nombre}" 
        class="w-full h-48 object-cover" 
        onerror="this.src='./images/sabores-casana.jpg'" 
      />
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-bold text-amber-500 uppercase tracking-wider block mb-1">${plato.categoria || 'Gastronomía'} · ${plato.ubicacion || 'Chepes - Villa Casana'}</span>
          <h4 class="text-lg font-bold text-slate-100 mb-2">${plato.nombre}</h4>
          <p class="text-xs text-slate-300 leading-relaxed">${plato.descripcion}</p>
        </div>
        ${galeriaHtml}
      </div>
    </div>
  `;
  }).join('');
}

// Filter attractions
function setFilter(cat) {
  state.filter = cat;
  document.querySelectorAll('.filter-pill').forEach(pill => {
    const isSelected = pill.getAttribute('data-cat') === cat;
    pill.classList.toggle('bg-amber-600', isSelected);
    pill.classList.toggle('text-white', isSelected);
    pill.classList.toggle('bg-slate-800', !isSelected);
    pill.classList.toggle('text-slate-300', !isSelected);
  });
  renderAttractions();
}

// Attraction Modal Detail
function openAttractionModal(id) {
  const item = APP_DATA.attractions.find(a => a.id === id);
  if (!item) return;

  const modalContainer = document.getElementById('item-modal');
  const modalContent = document.getElementById('item-modal-content');

  modalContent.innerHTML = `
    <div class="relative bg-slate-900">
      <img 
        src="${item.localImage || item.image}" 
        onerror="handleImageError(this, '${item.image}')"
        alt="${item.title}" 
        class="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
        id="modal-main-img"
      />
      <button onclick="closeAttractionModal()" class="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-slate-200 p-2 rounded-full backdrop-blur-md transition-all">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span class="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          ${item.tag}
        </span>
        <span class="bg-slate-900/90 text-amber-300 text-xs px-3 py-1 rounded-full backdrop-blur-md">
          ${item.categoryLabel}
        </span>
      </div>
    </div>
    ${item.gallery && item.gallery.length > 1 ? `
    <div class="px-4 pt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
      ${item.gallery.map((src, i) => `
        <img 
          src="${src}" 
          alt="${item.title} - foto ${i+1}"
          class="h-16 w-24 object-cover rounded-lg cursor-pointer opacity-70 hover:opacity-100 transition-opacity shrink-0 border-2 ${i===0 ? 'border-amber-500' : 'border-transparent'}"
          onclick="document.getElementById('modal-main-img').src='${src}'; this.parentElement.querySelectorAll('img').forEach(el=>el.classList.remove('opacity-100','border-amber-500')); this.classList.add('opacity-100','border-amber-500');"
          loading="lazy"
        />
      `).join('')}
    </div>
    ` : ''}
    <div class="p-6 sm:p-8 space-y-5">
      <div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-100">${item.title}</h2>
        <p class="text-amber-500 font-semibold text-sm mt-1">Dificultad: ${item.difficulty}</p>
      </div>
      <p class="text-slate-300 text-base leading-relaxed">${item.description}</p>
      
      <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-2">
        <h4 class="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          Lo mas destacado
        </h4>
        <p class="text-slate-300 text-sm">${item.highlight}</p>
      </div>

      <div class="bg-amber-950/30 border border-amber-800/40 rounded-xl p-4 space-y-2">
        <h4 class="text-xs uppercase tracking-wider font-bold text-amber-300 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Consejo baqueano para tu visita
        </h4>
        <p class="text-amber-100 text-sm">${item.tips}</p>
      </div>

      ${item.wikilocUrl ? `
        <div class="pt-1">
          <a href="${item.wikilocUrl}" target="_blank" rel="noopener noreferrer" class="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/30">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
            Ver Ruta 4x4 en Wikiloc (Track GPS)
          </a>
        </div>
      ` : ''}

      <div class="flex flex-col sm:flex-row gap-3 pt-2">
        <button onclick="goToOnMap([${item.coords.join(',')}], '${item.title}'); closeAttractionModal();" class="flex-1 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold py-3 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Ver en el Mapa
        </button>
        <button onclick="closeAttractionModal()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 px-6 rounded-xl transition-all">
          Cerrar
        </button>
      </div>
    </div>
  `;

  modalContainer.classList.remove('hidden');
}

function closeAttractionModal() {
  const modalContainer = document.getElementById('item-modal');
  if (modalContainer) modalContainer.classList.add('hidden');
}

// Leaflet Map Implementation
function initMap() {
  if (state.mapInitialized) return;

  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  const villaCasanaPos = [-31.0667, -66.5833];
  const chepesPos = [-31.3508, -66.5947];

  try {
    const map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: true
    }).setView([-31.18, -66.59], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors | Villa Casana',
      maxZoom: 18
    }).addTo(map);

    const createCustomIcon = (bgColor, iconChar) => {
      return L.divIcon({
        className: 'custom-leaflet-icon',
        html: `<div style="background-color: ${bgColor}; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border: 2px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">${iconChar}</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18]
      });
    };

    L.marker(villaCasanaPos, { icon: createCustomIcon('#d97706', 'VC') })
      .addTo(map)
      .bindPopup(`
        <div class="text-sm">
          <h4 class="font-bold text-amber-400 text-base">Villa Casana</h4>
          <p class="text-slate-300">Pueblo Historico y Rural de Los Llanos Riojanos.</p>
          <p class="text-xs text-slate-400 mt-1">40 km al norte de Chepes.</p>
        </div>
      `);

    L.marker(chepesPos, { icon: createCustomIcon('#2563eb', 'CH') })
      .addTo(map)
      .bindPopup(`
        <div class="text-sm">
          <h4 class="font-bold text-blue-400 text-base">Ciudad de Chepes</h4>
          <p class="text-slate-300">Cabecera del departamento. Ultimo punto para repostar combustible, compras y servicios bancarios.</p>
        </div>
      `);

    APP_DATA.attractions.forEach(attr => {
      let iconColor = '#059669';
      let sym = '📍';
      if (attr.id === 'casa_de_piedra') { iconColor = '#b45309'; sym = '🪨'; }
      else if (attr.id === 'capilla_del_carmen') { iconColor = '#0284c7'; sym = '⛪'; }
      else if (attr.id === 'plaza_del_carmen') { iconColor = '#16a34a'; sym = '🌴'; }
      else if (attr.id === 'escuela_rural') { iconColor = '#4f46e5'; sym = '📖'; }
      else if (attr.id === 'cerro_espeche') { iconColor = '#059669'; sym = '⛰️'; }
      else if (attr.category === 'aventura') { iconColor = '#ea580c'; sym = '🚙'; }
      else if (attr.category === 'astronomia') { iconColor = '#7c3aed'; sym = '⭐'; }
      else if (attr.category === 'naturaleza') { iconColor = '#10b981'; sym = '⛰️'; }
      else if (attr.category === 'cultura') { iconColor = '#e11d48'; sym = '🍞'; }

      L.marker(attr.coords, { icon: createCustomIcon(iconColor, sym) })
        .addTo(map)
        .bindPopup(`
          <div class="text-sm">
            <h4 class="font-bold text-amber-400">${attr.title}</h4>
            <p class="text-xs text-amber-200">${attr.categoryLabel}</p>
            <p class="text-xs text-slate-300 mt-1">${attr.description.slice(0, 100)}...</p>
          </div>
        `);
    });

    const routeCoords = [
      chepesPos,
      [-31.2800, -66.5920],
      [-31.2100, -66.5890],
      [-31.1400, -66.5860],
      villaCasanaPos
    ];

    L.polyline(routeCoords, {
      color: '#f59e0b',
      weight: 4,
      dashArray: '8, 8',
      opacity: 0.85
    }).addTo(map).bindPopup('Camino vecinal consolidado Chepes - Villa Casana (40 km)');

    state.mapInstance = map;
    state.mapInitialized = true;

    // Si ya hay una posición GPS activa, la dibujamos al inicializar el mapa
    if (state.userPos) {
      updateGpsMarker(state.userPos, state.userAccuracy);
    }
  } catch (err) {
    console.error('Error al inicializar Leaflet:', err);
  }
}

function goToOnMap(coords, title) {
  switchTab('mapa');
  setTimeout(() => {
    if (state.mapInstance) {
      state.mapInstance.flyTo(coords, 14, { duration: 1.5 });
    }
  }, 250);
}

// Astrotourism Celestial Map & Simulator
function renderStars() {
  const container = document.getElementById('stars-list');
  if (!container) return;

  container.innerHTML = APP_DATA.stars.map(star => `
    <div class="glass-card p-4 rounded-xl flex items-start gap-4">
      <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
        <svg class="w-5 h-5 star-twinkle" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
      </div>
      <div>
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-slate-100 text-sm">${star.name}</h4>
          <span class="text-[11px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono">${star.type}</span>
        </div>
        <p class="text-xs text-slate-300 mt-1 leading-relaxed">${star.desc}</p>
        <span class="text-[11px] text-slate-400 font-mono mt-1 block">${star.brightness}</span>
      </div>
    </div>
  `).join('');
}

// Background Star Sky in Hero
function initHeroSky() {
  const canvas = document.getElementById('sky-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = canvas.parentElement.clientHeight || 500;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || 500;
  });

  const stars = [];
  const starCount = Math.min(180, Math.floor(width / 7));

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0) {
        star.speed = -star.speed;
      }
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
      ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
      ctx.shadowColor = '#fbbf24';
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// Planetarium Canvas
function initPlanetariumCanvas() {
  const canvas = document.getElementById('planetarium-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    // setTransform (no scale) evita acumular la escala en cada resize
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  // El panel puede empezar oculto: recalculamos el tamaño al mostrarse
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(resize).observe(canvas);
  }

  const southernCross = [
    { name: "Acrux (Alpha Crucis)", x: 0.50, y: 0.70, r: 4.2 },
    { name: "Gacrux (Gamma Crucis)", x: 0.50, y: 0.32, r: 3.8 },
    { name: "Mimosa (Beta Crucis)", x: 0.38, y: 0.48, r: 3.9 },
    { name: "Delta Crucis", x: 0.60, y: 0.51, r: 3.2 },
    { name: "Ginan (Epsilon)", x: 0.54, y: 0.58, r: 2.2 }
  ];

  const pointers = [
    { name: "Alfa Centauri", x: 0.22, y: 0.42, r: 4.5 },
    { name: "Beta Centauri (Hadar)", x: 0.28, y: 0.55, r: 4.0 }
  ];

  let rotation = 0;

  function drawDome() {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    const grad = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, Math.max(w, h));
    grad.addColorStop(0, '#0c1630');
    grad.addColorStop(0.7, '#070b16');
    grad.addColorStop(1, '#03050a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(0.4 + rotation * 0.05);
    const mwGrad = ctx.createLinearGradient(-w, 0, w, 0);
    mwGrad.addColorStop(0, 'rgba(255,255,255,0)');
    mwGrad.addColorStop(0.4, 'rgba(180,200,255,0.06)');
    mwGrad.addColorStop(0.5, 'rgba(255,220,180,0.12)');
    mwGrad.addColorStop(0.6, 'rgba(180,200,255,0.06)');
    mwGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = mwGrad;
    ctx.fillRect(-w, -h, w * 2, h * 2);
    ctx.restore();

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    for (let i = 0; i < 90; i++) {
      const sx = ((i * 137.5) % w);
      const sy = ((i * 223.7) % h);
      ctx.fillRect(sx, sy, 1.2, 1.2);
    }

    ctx.strokeStyle = 'rgba(217, 119, 6, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    ctx.beginPath();
    ctx.moveTo(w * southernCross[0].x, h * southernCross[0].y);
    ctx.lineTo(w * southernCross[1].x, h * southernCross[1].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w * southernCross[2].x, h * southernCross[2].y);
    ctx.lineTo(w * southernCross[3].x, h * southernCross[3].y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w * pointers[0].x, h * pointers[0].y);
    ctx.lineTo(w * pointers[1].x, h * pointers[1].y);
    ctx.stroke();

    ctx.setLineDash([]);

    [...southernCross, ...pointers].forEach(star => {
      const sx = w * star.x;
      const sy = h * star.y;

      ctx.beginPath();
      ctx.arc(sx, sy, star.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(251, 191, 36, 0.2)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(sx, sy, star.r, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#fef08a';
      ctx.font = '11px Plus Jakarta Sans, sans-serif';
      ctx.fillText(star.name, sx + 8, sy - 4);
    });

    rotation += 0.002;
    requestAnimationFrame(drawDome);
  }

  // Interacción táctil / mouse: desplazar el domo celeste
  let dragging = false;
  let lastPointerX = 0;

  canvas.addEventListener('pointerdown', (event) => {
    dragging = true;
    lastPointerX = event.clientX;
    if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    rotation += (event.clientX - lastPointerX) * 0.01;
    lastPointerX = event.clientX;
  });

  const stopDragging = () => { dragging = false; };
  canvas.addEventListener('pointerup', stopDragging);
  canvas.addEventListener('pointercancel', stopDragging);
  canvas.addEventListener('pointerleave', stopDragging);

  drawDome();
}

// ============================================================
// Selector de visor cartográfico: Leaflet <-> Croquis vectorial
// ============================================================
function initMapModeSwitcher() {
  const btnLeaflet = document.getElementById('btn-mode-leaflet');
  const btnVector = document.getElementById('btn-mode-vector');
  if (!btnLeaflet || !btnVector) return;

  btnLeaflet.addEventListener('click', () => setMapMode('leaflet'));
  btnVector.addEventListener('click', () => setMapMode('vector'));
  setMapMode(state.mapMode);
}

function setMapMode(mode) {
  state.mapMode = mode;

  const btnLeaflet = document.getElementById('btn-mode-leaflet');
  const btnVector = document.getElementById('btn-mode-vector');
  const leafletWrapper = document.getElementById('leaflet-map-wrapper');
  const vectorWrapper = document.getElementById('vector-croquis-wrapper');
  if (!btnLeaflet || !btnVector || !leafletWrapper || !vectorWrapper) return;

  const activeClasses = ['bg-amber-600', 'text-white', 'shadow-lg', 'font-bold'];
  const idleClasses = ['bg-slate-800', 'text-slate-300', 'border', 'border-slate-700', 'font-semibold'];

  const isVector = mode === 'vector';

  leafletWrapper.classList.toggle('hidden', isVector);
  vectorWrapper.classList.toggle('hidden', !isVector);

  const [activeBtn, idleBtn] = isVector ? [btnVector, btnLeaflet] : [btnLeaflet, btnVector];
  activeBtn.classList.add(...activeClasses);
  activeBtn.classList.remove(...idleClasses);
  idleBtn.classList.remove(...activeClasses);
  idleBtn.classList.add(...idleClasses);

  if (isVector) {
    initVectorCroquis();
    return;
  }

  // Solo inicializamos el mapa si el panel está visible para evitar tamaño 0
  if (state.currentTab === 'mapa') {
    initMap();
    setTimeout(() => {
      if (state.mapInstance) state.mapInstance.invalidateSize();
    }, 150);
  }
}

// ============================================================
// Croquis topográfico vectorial 100% offline (SVG)
// ============================================================
function initVectorCroquis() {
  const container = document.getElementById('vector-croquis-canvas-container');
  if (!container || container.dataset.rendered === 'true') return;

  const waypoints = APP_DATA.routeWaypoints || [];
  if (!waypoints.length) return;

  const W = 1000;
  const H = 640;
  const pad = 80;

  const lats = waypoints.map(w => w.coords[0]);
  const lngs = waypoints.map(w => w.coords[1]);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  // Proyección local en km para mantener proporciones reales
  const kmPerLat = 110.574;
  const kmPerLng = 111.320 * Math.cos(((minLat + maxLat) / 2) * Math.PI / 180);

  const rawPoints = waypoints.map(w => ({
    x: (w.coords[1] - minLng) * kmPerLng,
    y: (maxLat - w.coords[0]) * kmPerLat
  }));

  const maxX = Math.max(...rawPoints.map(p => p.x)) || 1;
  const maxY = Math.max(...rawPoints.map(p => p.y)) || 1;
  const scale = Math.min((W - pad * 2) / maxX, (H - pad * 2) / maxY);
  const offsetX = (W - maxX * scale) / 2;
  const offsetY = (H - maxY * scale) / 2;

  const points = rawPoints.map(p => ({
    x: offsetX + p.x * scale,
    y: offsetY + p.y * scale
  }));

  const routePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ');

  // Curvas de nivel decorativas (topografía serrana)
  const contours = [];
  for (let i = 0; i < 8; i++) {
    const cx = 90 + ((i * 149) % 820);
    const cy = 70 + ((i * 197) % 500);
    const rx = 70 + ((i * 61) % 130);
    const ry = 40 + ((i * 43) % 85);
    contours.push(
      `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="#166534" stroke-width="1" opacity="0.45" transform="rotate(${(i * 29) % 50 - 25} ${cx} ${cy})" />`
    );
  }

  // Grilla de referencia
  const grid = [];
  for (let x = 100; x < W; x += 100) {
    grid.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#1e293b" stroke-width="1" opacity="0.45" />`);
  }
  for (let y = 80; y < H; y += 100) {
    grid.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#1e293b" stroke-width="1" opacity="0.45" />`);
  }

  // Escala gráfica: elegimos una longitud legible entre 60 y 170 px
  const niceLengths = [1, 2, 5, 10, 20, 50];
  let scaleKm = 10;
  for (const km of niceLengths) {
    const px = km * scale;
    if (px >= 60 && px <= 170) { scaleKm = km; break; }
    if (px < 60) scaleKm = km;
  }
  const scaleBarPx = Math.round(scaleKm * scale);

  const escapeXml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  const markers = waypoints.map((wp, i) => {
    const { x, y } = points[i];
    const isRight = i % 2 === 0;
    const labelX = isRight ? x + 16 : x - 16;
    const anchor = isRight ? 'start' : 'end';
    const label = `Km ${wp.km}`;
    const shortTitle = wp.title.length > 30 ? wp.title.slice(0, 30) + '…' : wp.title;
    return `
      <g class="cursor-pointer">
        <title>${escapeXml(wp.title)} — Km ${escapeXml(wp.km)} · ${escapeXml(wp.elevation)}</title>
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="11" fill="#f59e0b" stroke="#0f172a" stroke-width="3" opacity="0.25" />
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6.5" fill="#fbbf24" stroke="#0f172a" stroke-width="2.5" />
        <text x="${labelX.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${anchor}" font-family="ui-monospace, monospace" font-size="14" font-weight="700" fill="#fef3c7" stroke="#0a0f1d" stroke-width="4" paint-order="stroke">${escapeXml(label)}</text>
        <text x="${labelX.toFixed(1)}" y="${(y + 19).toFixed(1)}" text-anchor="${anchor}" font-family="ui-monospace, monospace" font-size="10.5" fill="#cbd5e1" stroke="#0a0f1d" stroke-width="3.5" paint-order="stroke">${escapeXml(shortTitle)}</text>
      </g>
    `;
  }).join('');

  container.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" class="w-full h-auto block" role="img" aria-label="Croquis vectorial de la ruta Chepes - Villa Casana">
      <defs>
        <linearGradient id="croquis-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0b1220" />
          <stop offset="55%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#1a1208" />
        </linearGradient>
        <radialGradient id="croquis-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.16" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="${W}" height="${H}" fill="url(#croquis-bg)" />
      <rect width="${W}" height="${H}" fill="url(#croquis-glow)" />
      ${grid.join('')}
      ${contours.join('')}

      <path d="${routePath}" fill="none" stroke="#78350f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />
      <path d="${routePath}" fill="none" stroke="#f59e0b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="14 9" />
      ${markers}

      <!-- Rosa de los vientos -->
      <g transform="translate(${W - 84} 84)">
        <circle r="42" fill="#0f172a" stroke="#334155" stroke-width="1.5" opacity="0.9" />
        <polygon points="0,-32 7,0 0,-8 -7,0" fill="#ef4444" />
        <polygon points="0,32 7,0 0,8 -7,0" fill="#94a3b8" />
        <text x="0" y="-36" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" font-weight="700" fill="#f87171">N</text>
      </g>

      <!-- Leyenda y escala -->
      <g transform="translate(34 ${H - 58})">
        <rect x="-14" y="-26" width="360" height="62" rx="12" fill="#0b1220" stroke="#1e293b" opacity="0.92" />
        <line x1="0" y1="0" x2="${scaleBarPx}" y2="0" stroke="#fbbf24" stroke-width="4" stroke-linecap="round" />
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#fbbf24" stroke-width="3" />
        <line x1="${scaleBarPx}" y1="-6" x2="${scaleBarPx}" y2="6" stroke="#fbbf24" stroke-width="3" />
        <text x="${scaleBarPx + 10}" y="4" font-family="ui-monospace, monospace" font-size="12" fill="#fcd34d">${scaleKm} km aprox.</text>
        <text x="0" y="26" font-family="ui-monospace, monospace" font-size="11.5" fill="#94a3b8">Trazado referencial · 11 hitos · Chepes a Villa Casana</text>
      </g>
    </svg>
  `;

  container.dataset.rendered = 'true';
}

// ============================================================
// Rutómetro Km a Km
// ============================================================
function renderRutometro() {
  const container = document.getElementById('rutometro-cards');
  if (!container) return;

  container.innerHTML = APP_DATA.routeWaypoints.map((wp, index) => `
    <div class="glass-card rounded-2xl p-5 border border-slate-800/80 flex flex-col sm:flex-row gap-4">
      <div class="flex sm:flex-col items-center sm:items-start gap-3 shrink-0 sm:w-28">
        <span class="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-xl shadow-inner">${wp.icon}</span>
        <div class="text-center sm:text-left">
          <span class="block text-lg font-black text-amber-400 font-mono leading-tight">Km ${wp.km}</span>
          <span class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">${wp.elevation}</span>
          <span class="block text-[10px] text-slate-500 mt-0.5">Hito ${index + 1} de ${APP_DATA.routeWaypoints.length}</span>
        </div>
      </div>

      <div class="flex-1 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          <h4 class="font-bold text-slate-100">${wp.title}</h4>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${wp.badgeColor}">${wp.badge}</span>
          <span class="text-[10px] text-slate-400 bg-slate-900/80 border border-slate-800 rounded px-2 py-0.5">${wp.type}</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${wp.instruction}</p>
        <p class="text-[11px] text-amber-200/90 bg-amber-950/20 border border-amber-800/30 rounded-lg px-3 py-2 leading-relaxed">⚠️ ${wp.warning}</p>
      </div>
    </div>
  `).join('');
}

// ============================================================
// Checklist de expedición con persistencia local
// ============================================================
const CHECKLIST_STORAGE_KEY = 'villacasana_checklist_v1';

function loadChecklistState() {
  let stored = null;
  try {
    stored = localStorage.getItem(CHECKLIST_STORAGE_KEY);
  } catch (err) {
    stored = null;
  }

  if (stored === null) {
    state.checklist = APP_DATA.checklistItems
      .filter(item => item.defaultChecked)
      .map(item => item.id);
    return;
  }

  try {
    const parsed = JSON.parse(stored);
    const validIds = new Set(APP_DATA.checklistItems.map(item => item.id));
    state.checklist = Array.isArray(parsed)
      ? parsed.filter(id => validIds.has(id))
      : [];
  } catch (err) {
    state.checklist = [];
  }
}

function saveChecklistState() {
  try {
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(state.checklist));
  } catch (err) {
    console.warn('No se pudo guardar el checklist:', err);
  }
}

function renderChecklist() {
  const container = document.getElementById('checklist-container');
  if (!container) return;

  container.innerHTML = APP_DATA.checklistItems.map(item => {
    const checked = state.checklist.includes(item.id);
    return `
      <label class="flex items-start gap-3 bg-slate-900/70 hover:bg-slate-900 border border-slate-800 rounded-xl p-3.5 cursor-pointer transition-colors">
        <input
          type="checkbox"
          data-check-item="${item.id}"
          ${checked ? 'checked' : ''}
          onchange="toggleChecklist('${item.id}', this.checked)"
          class="mt-0.5 w-5 h-5 rounded border-slate-600 bg-slate-800 accent-amber-500 cursor-pointer shrink-0"
        />
        <span class="flex-1">
          <span data-check-label="${item.id}" class="block text-xs font-semibold leading-relaxed ${checked ? 'text-slate-500 line-through' : 'text-slate-200'}">${item.label}</span>
          <span class="text-[10px] uppercase tracking-wider text-amber-500/80 font-bold">${item.category}</span>
        </span>
      </label>
    `;
  }).join('');

  updateChecklistProgress();
}

function toggleChecklist(id, checked) {
  const current = new Set(state.checklist);
  if (checked) current.add(id);
  else current.delete(id);
  state.checklist = [...current];
  saveChecklistState();

  const label = document.querySelector(`[data-check-label="${id}"]`);
  if (label) {
    label.classList.toggle('text-slate-500', checked);
    label.classList.toggle('line-through', checked);
    label.classList.toggle('text-slate-200', !checked);
  }

  updateChecklistProgress();
}

function updateChecklistProgress() {
  const total = APP_DATA.checklistItems.length;
  const done = state.checklist.length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  const text = document.getElementById('checklist-progress-text');
  const bar = document.getElementById('checklist-progress-bar');

  if (text) text.textContent = `${done} de ${total} listos (${percent}%)`;
  if (bar) bar.style.width = `${percent}%`;
}

// ============================================================
// Fase lunar estimada
// ============================================================
function updateMoonPhaseWidget() {
  const status = document.getElementById('moon-phase-status');
  const tip = document.getElementById('moon-phase-tip');
  if (!status || !tip) return;

  const SYNODIC_MONTH = 29.530588853;
  const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);
  const daysSince = (Date.now() - KNOWN_NEW_MOON) / 86400000;
  const age = ((daysSince % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const fraction = age / SYNODIC_MONTH;

  const phases = [
    { limit: 0.0625, emoji: '🌑', name: 'Luna Nueva' },
    { limit: 0.1875, emoji: '🌒', name: 'Luna Creciente' },
    { limit: 0.3125, emoji: '🌓', name: 'Cuarto Creciente' },
    { limit: 0.4375, emoji: '🌔', name: 'Gibosa Creciente' },
    { limit: 0.5625, emoji: '🌕', name: 'Luna Llena' },
    { limit: 0.6875, emoji: '🌖', name: 'Gibosa Menguante' },
    { limit: 0.8125, emoji: '🌗', name: 'Cuarto Menguante' },
    { limit: 0.9375, emoji: '🌘', name: 'Luna Menguante' },
    { limit: 1.0001, emoji: '🌑', name: 'Luna Nueva' }
  ];

  const phase = phases.find(p => fraction < p.limit) || phases[0];
  const illumination = Math.round(((1 - Math.cos(2 * Math.PI * fraction)) / 2) * 100);

  let quality;
  if (illumination < 25) quality = 'Excelente para astroturismo';
  else if (illumination < 60) quality = 'Aceptable: la Vía Láctea se aprecia parcialmente';
  else quality = 'Poco favorable: el brillo lunar reduce la visibilidad';

  status.textContent = phase.emoji;
  tip.textContent = `${phase.name} · ${illumination}% iluminada · ${quality}`;
}

// ============================================================
// Modo de visión nocturna roja (adaptación visual astronómica)
// ============================================================
function initAstroRedModeToggle() {
  const button = document.getElementById('toggle-red-mode');
  if (!button) return;

  let storedMode = false;
  try {
    storedMode = localStorage.getItem('villacasana_red_mode') === 'true';
  } catch (err) {
    storedMode = false;
  }

  applyAstroRedMode(storedMode);

  button.addEventListener('click', () => {
    applyAstroRedMode(!state.astroRedMode);
  });
}

function applyAstroRedMode(enabled) {
  state.astroRedMode = enabled;
  document.body.classList.toggle('astro-red-mode', enabled);

  const button = document.getElementById('toggle-red-mode');
  if (button) {
    button.setAttribute('aria-pressed', String(enabled));
    button.classList.toggle('border-rose-500/80', enabled);
    button.classList.toggle('text-rose-400', enabled);
    button.classList.toggle('bg-rose-950/40', enabled);
    const label = button.querySelector('span:last-child');
    if (label) label.textContent = enabled ? 'Modo Nocturno Activo' : 'Modo Nocturno';
  }

  try {
    localStorage.setItem('villacasana_red_mode', String(enabled));
  } catch (err) {
    // almacenamiento no disponible (modo privado / file://)
  }
}

// ============================================================
// PWA: registro del service worker e instalación
// ============================================================
let deferredInstallPrompt = null;

function initPwaInstall() {
  const installButton = document.getElementById('pwa-install-btn');

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (installButton) installButton.classList.remove('hidden');
  });

  if (installButton) {
    installButton.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      try {
        const choice = await deferredInstallPrompt.userChoice;
        if (choice && choice.outcome === 'accepted' && installButton) {
          installButton.classList.add('hidden');
        }
      } catch (err) {
        console.warn('Instalación PWA cancelada:', err);
      }
      deferredInstallPrompt = null;
    });
  }

  window.addEventListener('appinstalled', () => {
    if (installButton) installButton.classList.add('hidden');
  });

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./service-worker.js')
        .catch(err => console.warn('Service Worker no registrado:', err));
    });
  }
}

// ============================================================
// GPS satelital offline, brújula y telemetría
// ============================================================
const VILLA_CASANA_COORDS = [-31.0667, -66.5833];

function initOfflineGpsTracker() {
  const toggleButton = document.getElementById('gps-toggle-btn');
  if (!toggleButton) return;

  toggleButton.addEventListener('click', () => {
    if (state.gpsWatching) stopGpsTracking();
    else startGpsTracking();
  });

  setGpsButtonState(false);
  setGpsStatus(false, 'Activa el rastreador para calcular distancia, azimut y orientación en tiempo real hacia Villa Casana.');
}

function startGpsTracking() {
  if (!('geolocation' in navigator)) {
    setGpsStatus(false, 'Tu navegador no soporta geolocalización satelital.');
    return;
  }

  state.gpsWatching = true;
  setGpsButtonState(true);
  setGpsStatus(true, 'Buscando señal satelital... Mantente a cielo abierto para una mejor precisión.');

  state.gpsWatchId = navigator.geolocation.watchPosition(
    handleGpsPosition,
    handleGpsError,
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 }
  );

  // Orientación del dispositivo (brújula digital), si está disponible
  const orientationHandler = (event) => {
    if (event.webkitCompassHeading != null) {
      state.userHeading = event.webkitCompassHeading;
    } else if (event.alpha != null) {
      state.userHeading = (360 - event.alpha) % 360;
    }
    if (state.userPos) {
      const bearing = bearingBetween(
        state.userPos[0], state.userPos[1],
        VILLA_CASANA_COORDS[0], VILLA_CASANA_COORDS[1]
      );
      updateCompass(bearing, state.userHeading);
    }
  };

  state.gpsOrientationHandler = orientationHandler;

  const attachOrientation = () => {
    window.addEventListener('deviceorientationabsolute', orientationHandler, true);
    window.addEventListener('deviceorientation', orientationHandler, true);
  };

  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(permission => { if (permission === 'granted') attachOrientation(); })
      .catch(() => { /* sin permiso de brújula: seguimos con el rumbo calculado */ });
  } else {
    attachOrientation();
  }
}

function stopGpsTracking() {
  if (state.gpsWatchId != null && 'geolocation' in navigator) {
    navigator.geolocation.clearWatch(state.gpsWatchId);
  }
  state.gpsWatchId = null;
  state.gpsWatching = false;

  if (state.gpsOrientationHandler) {
    window.removeEventListener('deviceorientationabsolute', state.gpsOrientationHandler, true);
    window.removeEventListener('deviceorientation', state.gpsOrientationHandler, true);
    state.gpsOrientationHandler = null;
  }

  if (state.gpsMarker && state.mapInstance) {
    state.mapInstance.removeLayer(state.gpsMarker);
  }
  state.gpsMarker = null;

  if (state.gpsAccuracyCircle && state.mapInstance) {
    state.mapInstance.removeLayer(state.gpsAccuracyCircle);
  }
  state.gpsAccuracyCircle = null;

  state.userPos = null;
  state.userHeading = null;

  setGpsButtonState(false);
  setGpsStatus(false, 'Rastreo detenido. Puedes reactivarlo cuando lo necesites.');
  setText('gps-coords-display', 'Esperando GPS...');
  setText('gps-distance-display', '-- km');
  setText('gps-speed-display', '0 km/h');
}

function handleGpsPosition(position) {
  const { latitude, longitude, accuracy, altitude, speed } = position.coords;
  state.userPos = [latitude, longitude];
  state.userAccuracy = accuracy;

  const distance = haversineKm(latitude, longitude, VILLA_CASANA_COORDS[0], VILLA_CASANA_COORDS[1]);
  const bearing = bearingBetween(latitude, longitude, VILLA_CASANA_COORDS[0], VILLA_CASANA_COORDS[1]);

  setText('gps-coords-display', `${latitude.toFixed(5)}°, ${longitude.toFixed(5)}°`);
  setText('gps-distance-display', formatDistance(distance));
  setText('gps-speed-display', `${Math.round((speed || 0) * 3.6)} km/h`);
  setText('gps-altitude-display', altitude != null ? `${Math.round(altitude)} m` : '-- m');
  setGpsStatus(true, `Señal activa · precisión ±${Math.round(accuracy || 0)} m`);

  updateCompass(bearing, state.userHeading);
  updateNextWaypoint(latitude, longitude);
  updateGpsMarker(state.userPos, accuracy);
}

function handleGpsError(error) {
  let message = 'No se pudo obtener la posición GPS.';
  if (error.code === error.PERMISSION_DENIED) {
    message = 'Permiso de ubicación denegado. Habilítalo en tu navegador para navegar.';
  } else if (error.code === error.POSITION_UNAVAILABLE) {
    message = 'Señal GPS no disponible. Sal a cielo abierto e inténtalo de nuevo.';
  } else if (error.code === error.TIMEOUT) {
    message = 'Tiempo de espera agotado buscando satélites. Reintentando...';
  }
  setGpsStatus(false, message);
}

function updateCompass(bearing, heading) {
  const needle = document.getElementById('gps-compass-needle');
  const dial = document.getElementById('gps-compass-dial');
  const label = document.getElementById('gps-bearing-display');
  const deviceHeading = heading == null ? 0 : heading;

  if (needle) needle.style.transform = `rotate(${((bearing - deviceHeading) % 360 + 360) % 360}deg)`;
  if (dial) dial.style.transform = `rotate(${-deviceHeading}deg)`;
  if (label) label.textContent = `${Math.round(bearing)}° (${compassLabel(bearing)})`;
}

function updateNextWaypoint(latitude, longitude) {
  let nearest = null;
  let nearestDistance = Infinity;

  APP_DATA.routeWaypoints.forEach(waypoint => {
    const distance = haversineKm(latitude, longitude, waypoint.coords[0], waypoint.coords[1]);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = waypoint;
    }
  });

  const display = document.getElementById('gps-next-waypoint-display');
  if (display && nearest) {
    display.innerHTML = `<span class="font-bold text-amber-400">${nearest.icon} ${nearest.title} (Km ${nearest.km})</span> · a ${formatDistance(nearestDistance)}`;
  }
}

function updateGpsMarker(position, accuracy) {
  if (!state.mapInstance || typeof L === 'undefined') return;

  const icon = L.divIcon({
    className: 'gps-live-marker',
    html: `
      <div style="position: relative; width: 24px; height: 24px;">
        <span class="radar-ping" style="position: absolute; inset: 0; border-radius: 50%; background: rgba(16, 185, 129, 0.55); display: block;"></span>
        <span style="position: absolute; inset: 5px; border-radius: 50%; background: #10b981; border: 2px solid #ffffff; box-shadow: 0 0 10px rgba(16,185,129,0.9); display: block;"></span>
      </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  if (!state.gpsMarker) {
    state.gpsMarker = L.marker(position, { icon, zIndexOffset: 1000 })
      .addTo(state.mapInstance)
      .bindPopup('<strong>Tu posición GPS</strong><br>Actualizada en tiempo real.');
  } else {
    state.gpsMarker.setLatLng(position);
  }

  if (accuracy && accuracy > 0) {
    if (!state.gpsAccuracyCircle) {
      state.gpsAccuracyCircle = L.circle(position, {
        radius: accuracy,
        color: '#10b981',
        weight: 1,
        fillColor: '#10b981',
        fillOpacity: 0.08
      }).addTo(state.mapInstance);
    } else {
      state.gpsAccuracyCircle.setLatLng(position);
      state.gpsAccuracyCircle.setRadius(accuracy);
    }
  }
}

function setGpsButtonState(active) {
  const button = document.getElementById('gps-toggle-btn');
  if (!button) return;

  button.className = active
    ? 'px-5 py-2.5 rounded-xl text-xs font-bold bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 transition-all flex items-center gap-2 self-start sm:self-center shadow-lg'
    : 'px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 transition-all flex items-center gap-2 self-start sm:self-center shadow-lg';

  const icon = active
    ? '<svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10h6v4H9z"/></svg>'
    : '<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';

  button.innerHTML = `${icon} ${active ? 'Detener Navegación GPS' : 'Iniciar Navegación Satelital GPS'}`;
}

function setGpsStatus(active, text) {
  const badge = document.getElementById('gps-status-badge');
  const statusText = document.getElementById('gps-status-text');

  if (badge) {
    badge.className = active
      ? 'inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/40'
      : 'inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700';
    badge.innerHTML = `<span class="w-2 h-2 rounded-full ${active ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'} inline-block"></span> ${active ? 'GPS Activo' : 'GPS en Pausa'}`;
  }

  if (statusText && text) statusText.textContent = text;
}

function setText(elementId, value) {
  const element = document.getElementById(elementId);
  if (element) element.textContent = value;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = deg => (deg * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function bearingBetween(lat1, lon1, lat2, lon2) {
  const toRad = deg => (deg * Math.PI) / 180;
  const toDeg = rad => (rad * 180) / Math.PI;
  const dLon = toRad(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(toRad(lat2));
  const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function compassLabel(bearing) {
  const labels = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'];
  return labels[Math.round(bearing / 22.5) % 16];
}

function formatDistance(km) {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

// ============================================================
// Exportación de la ruta offline (GPX / KML)
// ============================================================
function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

function downloadGpxRoute() {
  const waypoints = APP_DATA.routeWaypoints;
  const wptXml = waypoints.map(wp => `
  <wpt lat="${wp.coords[0]}" lon="${wp.coords[1]}">
    <name>${xmlEscape('Km ' + wp.km + ' - ' + wp.title)}</name>
    <desc>${xmlEscape(wp.instruction)}</desc>
    <sym>${xmlEscape(wp.type)}</sym>
  </wpt>`).join('');

  const trkpts = waypoints.map(wp => `
      <trkpt lat="${wp.coords[0]}" lon="${wp.coords[1]}">
        <ele>${parseInt(wp.elevation, 10) || 650}</ele>
        <name>${xmlEscape(wp.title)}</name>
      </trkpt>`).join('');

  const gpx = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Villa Casana Turismo PWA" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>Ruta Chepes - Villa Casana (Los Llanos, La Rioja)</name>
    <desc>Rutometro de 11 hitos entre Chepes y Villa Casana. Uso offline en OsmAnd, Organic Maps, Garmin o Gaia GPS.</desc>
  </metadata>${wptXml}
  <trk>
    <name>Chepes - Villa Casana</name>
    <trkseg>${trkpts}
    </trkseg>
  </trk>
</gpx>`;

  downloadFile('villa-casana-ruta-chepes.gpx', gpx, 'application/gpx+xml');
}

function downloadKmlRoute() {
  const waypoints = APP_DATA.routeWaypoints;
  const placemarks = waypoints.map(wp => `
    <Placemark>
      <name>${xmlEscape('Km ' + wp.km + ' - ' + wp.title)}</name>
      <description>${xmlEscape(wp.instruction + ' | ' + wp.warning)}</description>
      <Point><coordinates>${wp.coords[1]},${wp.coords[0]},0</coordinates></Point>
    </Placemark>`).join('');

  const lineCoords = waypoints.map(wp => `${wp.coords[1]},${wp.coords[0]},0`).join(' ');

  const kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Ruta Chepes - Villa Casana</name>
    <description>Rutometro turistico de Villa Casana, Dpto. Rosario Vera Penaloza, La Rioja, Argentina.</description>${placemarks}
    <Placemark>
      <name>Trazado Chepes - Villa Casana</name>
      <LineString>
        <tessellate>1</tessellate>
        <coordinates>${lineCoords}</coordinates>
      </LineString>
    </Placemark>
  </Document>
</kml>`;

  downloadFile('villa-casana-ruta-chepes.kml', kml, 'application/vnd.google-earth.kml+xml');
}