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
      localImage: "./images/cerro_espeche.jpg",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      description: "El centinela pétreo que domina la geografía de Villa Casana. Ofrece un ascenso accesible para senderistas de nivel medio con una vista panorámica inigualable de 360 grados sobre los llanos riojanos.",
      difficulty: "Media (2 a 3 hs de ascenso)",
      highlight: "Vistas panorámicas, avistamiento de aves rapaces (águilas moras y jotes), formaciones geológicas autóctonas.",
      tips: "Iniciar la caminata a primera hora de la mañana para evitar las horas de mayor insolación. Llevar calzado con suela de tracción y 2 litros de agua.",
      coords: [-31.0450, -66.5920]
    },
    {
      id: "circuito_4x4",
      title: "Circuito 4x4 Quebradas y Huellas Serranas",
      category: "aventura",
      categoryLabel: "Aventura 4x4 / Off-Road",
      tag: "Adrenalina & Monte",
      localImage: "./images/circuito_4x4.jpg",
      image: "https://www.blog.lodelpampa.com.ar/wp-content/uploads/2023/09/DSCN3922.jpg",
      description: "Travesías por huellas serranas, lechos de ríos secos de arena y pedregales que conectan parajes históricos, las crestas hacia Tuani y cañadones agrestes del interior riojano con vadeos de arroyos cristalinos.",
      difficulty: "Moderada a Alta para vehículos todo terreno",
      highlight: "Paisajes vírgenes, cruces de badenes de arena, arroyos que dan vida a la zona y puestos campesinos aislados donde se crían chivos.",
      tips: "Bajar ligeramente la presión de los neumáticos en tramos de arena pesada. Consultar siempre con pobladores sobre las tranqueras y el estado de los vadeos.",
      coords: [-31.0820, -66.5710]
    },
    {
      id: "cicloturismo",
      title: "Cicloturismo Chepes - Villa Casana",
      category: "aventura",
      categoryLabel: "Cicloturismo & MTB",
      tag: "Deporte Rural",
      localImage: "./images/cicloturismo.jpg",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      description: "Una ruta muy elegida por ciclistas de montaña de la región: 40 km de desafío sobre camino de tierra con suaves ondulaciones y aire puro de monte.",
      difficulty: "Intermedia / Avanzada (40 km por tramo)",
      highlight: "Silencio total, cruce con majadas y fauna silvestre (liebres, perdices, zorros grises).",
      tips: "Llevar kit antipinchazos reforzado con líquido sellador debido a las espinas de espinillo y tusca en los laterales.",
      coords: [-31.1200, -66.6000]
    },
    {
      id: "cielos_astroturismo",
      title: "Mirador de Astroturismo Pampa Limpia",
      category: "astronomia",
      categoryLabel: "Astroturismo & Estrellas",
      tag: "Cielo Prístino Bortle 1",
      localImage: "./images/cielo_nocturno.jpg",
      image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
      description: "Lejos de cualquier contaminación lumínica urbana, Villa Casana posee uno de los cielos más puros del Cono Sur, donde la Vía Láctea se proyecta con textura y sombras en el suelo.",
      difficulty: "Baja (Acceso vehicular directo)",
      highlight: "Visibilidad a simple vista de las Nubes de Magallanes, Nebulosa de Orión, Carina y cúmulos globulares.",
      tips: "Utilizar siempre luz roja para no perder la adaptación nocturna de los ojos. Abrigo térmico aún en noches de verano.",
      coords: [-31.0600, -66.5750]
    },
    {
      id: "tradicion_gastronomia",
      title: "Sabores Campestres y Hornos de Barro",
      category: "cultura",
      categoryLabel: "Cultura & Gastronomía",
      tag: "Auténtico Criollo",
      localImage: "./images/pan_casero.jpg",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      description: "El corazón de Villa Casana está en la hospitalidad de su gente: el aroma inconfundible a pan casero recién horneado a leña, tortas fritas, quesillos de cabra y chivito riojano al asador.",
      difficulty: "Para toda la familia",
      highlight: "Encuentro directo con artesanos y familias productoras de arropes de chañar y dulces regionales.",
      tips: "Preguntar a los vecinos del pueblo quién hornea pan el día de tu visita para conseguirlo tibio y crujiente.",
      coords: [-31.0667, -66.5833]
    },
    {
      id: "pozos_arroyos",
      title: "Cascada del Sur y Pozos de Agua de Temporal",
      category: "naturaleza",
      categoryLabel: "Naturaleza & Aguas Serranas",
      tag: "Oasis Oculto",
      localImage: "./images/pozos_arroyos.jpg",
      image: "https://www.blog.lodelpampa.com.ar/wp-content/uploads/2023/09/DSCN4001.jpg",
      description: "Rincón singular ubicado al sur de Villa Casana: un modesto y preciado salto de agua que brota entre formaciones rocosas. En una región árida como Los Llanos, este hilo de agua fresca representa un verdadero tesoro natural celebrado por los pobladores.",
      difficulty: "Caminata corta (4x4 + senderismo)",
      highlight: "Vegetación serrana, rumor de agua entre piedras y descanso reparador en pleno monte.",
      tips: "Caminar con precaución por el cauce rocoso. Cuidar celosamente la limpieza de las fuentes de agua.",
      coords: [-31.0500, -66.5790]
    },
    {
      id: "casa_de_piedra",
      title: "La Casa de Piedra y Aleros Olongastas",
      category: "cultura",
      categoryLabel: "Arqueología & Pasado Olongasta",
      tag: "Sitio Sagrado Milenario",
      localImage: "./images/casa_de_piedra.jpg",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      description: "Impresionante formación rocosa y cueva natural de unos 4 metros de altura por 8 metros de diámetro. En su interior se conservan valiosos petroglifos, arte rupestre y morteros ceremoniales olongastas donde se realizaban rituales sagrados dedicados al sol y a la luna, además de servir como refugio y silo natural para resguardo de víveres.",
      difficulty: "Caminata accesible (1.5 km)",
      highlight: "Petroglifos ancestrales, morteros comunales tallados en la roca madre y cosmovisión de los pueblos originarios de Los Llanos.",
      tips: "Ingresar con sumo respeto: no tocar las inscripciones rupestres ni encender fuego. Llevar linterna para observar con claridad los detalles del alero.",
      coords: [-31.0580, -66.5890]
    },
    {
      id: "plaza_del_carmen",
      title: "Plaza Virgen del Carmen y Palmeras Históricas",
      category: "cultura",
      categoryLabel: "Casco Urbano & Encuentro",
      tag: "Corazón del Pueblo",
      localImage: "./images/plaza_carmen.jpg",
      image: "https://www.blog.lodelpampa.com.ar/wp-content/uploads/2023/09/DSCN3992.jpg",
      description: "El prolijo y apacible centro neurálgico de Villa Casana. Resaltan sus características palmeras en medio del paisaje agreste riojano, sus bancos de descanso a la sombra y el espíritu donde el tiempo transcurre sin apuro.",
      difficulty: "Fácil / Para toda la familia",
      highlight: "Palmeras de la plaza, entorno cuidado por los vecinos, proximidad a la capilla y la escuela.",
      tips: "Sentarse en sus bancos al atardecer para contemplar la serenidad del pueblo y charlar con los lugareños.",
      coords: [-31.0665, -66.5830]
    },
    {
      id: "capilla_del_carmen",
      title: "Capilla Nuestra Señora del Carmen",
      category: "cultura",
      categoryLabel: "Patrimonio Religioso & Fiestas",
      tag: "Devoción Rural",
      localImage: "./images/capilla_del_carmen.jpg",
      image: "https://images.unsplash.com/photo-1548625361-195fe57876a4?auto=format&fit=crop&w=800&q=80",
      description: "El templo de fe de Villa Casana y epicentro de la comunidad. Custodia la imagen de Nuestra Señora del Carmen, patrona del pueblo, convocando cada año a familias campesinas y fieles de toda la región para sus tradicionales fiestas patronales, misas y procesiones gauchas.",
      difficulty: "Fácil (Frente a la plaza)",
      highlight: "Arquitectura criolla rural, campana histórica de bronce y cálida atmósfera comunitaria.",
      tips: "Visitar en época de novena patronal (julio) para presenciar el colorido desfile gaucho y degustar los platos típicos comunitarios.",
      coords: [-31.0660, -66.5828]
    },
    {
      id: "escuela_rural",
      title: "Cuna de la Educación Rural (Escuela de Villa Casana)",
      category: "cultura",
      categoryLabel: "Memoria & Pioneros Docentes",
      tag: "Hospitalidad Rural",
      localImage: "./images/escuela_rural.jpg",
      image: "https://www.blog.lodelpampa.com.ar/wp-content/uploads/2023/09/DSCN3987.jpg",
      description: "Edificio escolar que continúa el noble legado de la educación en Los Llanos. Heredera de aquella histórica maestra que durante 35 años educó a generaciones en su casa, hoy docentes y alumnos continúan recibiendo a los visitantes con una calidez inolvidable.",
      difficulty: "Paseo por el casco del pueblo",
      highlight: "Encuentro cordial con la comunidad educativa, orgullo por la enseñanza pública de frontera rural.",
      tips: "Si visitas en día de clases, acercarse con respeto para conocer las actividades que desarrollan los chicos del pueblo.",
      coords: [-31.0664, -66.5840]
    }
  ],

  // Directorio de Pobladores, Guías y Productores Locales con WhatsApp Directo
  localContacts: [
    {
      id: "guia_espeche",
      name: "Guía Baqueano - Cerro Espeche",
      role: "Trekking y Senderismo Guiado",
      badge: "Guía Local",
      badgeColor: "bg-emerald-600/90 text-white",
      description: "Acompañamiento seguro en senderos serranos, conocimiento de fauna, flora medicinal y puntos de vista panorámicos.",
      phoneDisplay: "+54 9 3821 40-1234",
      whatsappNumber: "5493821401234",
      whatsappMsg: "¡Hola! Vi su contacto en la app turística de Villa Casana. Quisiera consultar disponibilidad y tarifas para realizar una excursión guiada al Cerro Espeche."
    },
    {
      id: "pan_horno",
      name: "Horno de Barro Tradicional",
      role: "Pan Casero & Tortas Fritas Criollas",
      badge: "Gastronomía",
      badgeColor: "bg-amber-600/90 text-white",
      description: "Elaboración diaria con leña de jarilla y monte. Pan amasado a mano con grasa criolla, tortillas y empanadas por encargo.",
      phoneDisplay: "+54 9 3821 45-5678",
      whatsappNumber: "5493821455678",
      whatsappMsg: "¡Hola! Encontré su contacto en la app de Villa Casana. Me gustaría saber qué días hornean pan casero o si es posible encargar empanadas para nuestra visita."
    },
    {
      id: "chivito_riojano",
      name: "Puesto Criollo - Chivito y Quesillos",
      role: "Carnes de Monte & Dulces Caseros",
      badge: "Sabores de los Llanos",
      badgeColor: "bg-orange-600/90 text-white",
      description: "Venta de chivito lechal de pastoreo libre en el monte, quesillos frescos de cabra y arropes tradicionales de chañar e higo.",
      phoneDisplay: "+54 9 3821 42-9012",
      whatsappNumber: "5493821429012",
      whatsappMsg: "¡Hola! Vi su número en la app de Villa Casana. Quisiera consultar por chivito riojano o quesillos artesanales para encargar."
    },
    {
      id: "auxilio_4x4",
      name: "Traslados & Auxilio Rural",
      role: "Asistencia en Caminos y Huellas",
      badge: "Logística y 4x4",
      badgeColor: "bg-blue-600/90 text-white",
      description: "Vehículo 4x4 para traslados desde Chepes, apoyo mecánico básico para ciclistas y orientación en huellas de tierra.",
      phoneDisplay: "+54 9 3821 47-3456",
      whatsappNumber: "5493821473456",
      whatsappMsg: "¡Hola! Vi su contacto en la app de Villa Casana. Necesito consultar por traslados / estado del camino desde Chepes."
    },
    {
      id: "hospedaje_rural",
      name: "Hospedaje & Acampe Rural 'Las Estrellas'",
      role: "Alojamiento Campesino y Camping",
      badge: "Hospedaje",
      badgeColor: "bg-purple-600/90 text-white",
      description: "Habitaciones sencillas y familiares, espacio para carpas con sombra de algarrobo, sanitarios y sector de fogón nocturno para astroturismo.",
      phoneDisplay: "+54 9 3821 49-7890",
      whatsappNumber: "5493821497890",
      whatsappMsg: "¡Hola! Vi su hospedaje en la app de Villa Casana. Me gustaría saber tarifas y disponibilidad para alojarme / acampar."
    }
  ],

  // Historias, Orígenes y Leyendas de Villa Casana
  historyAndLegends: [
    {
      id: "pasado_olongasta",
      title: "El Pasado Olongasta y el Santuario de la Casa de Piedra",
      category: "Pueblos Originarios & Arqueología",
      icon: "🪨",
      summary: "La huella milenaria de los olongastas en una cueva natural de 4 metros de altura por 8 metros de diámetro.",
      content: "La región de Villa Casana estuvo habitada originalmente por los olongastas, pueblo originario de Los Llanos riojanos. Su legado perdura en la 'Casa de Piedra', una imponente cueva natural donde se conservan petroglifos, arte rupestre y morteros ceremoniales. En su interior realizaban rituales sagrados dedicados al sol, la luna y sus deidades, además de utilizarla como refugio seguro y silo para el resguardo de víveres y frutos del monte."
    },
    {
      id: "primera_escuela",
      title: "Historia de la Educación Rural: 35 Años de Vocación",
      category: "Educación & Comunidad",
      icon: "📖",
      summary: "Los inicios de la enseñanza en casas de familia y la histórica maestra que educó a 60 alumnos en su propio hogar.",
      content: "La educación en Villa Casana nació del esfuerzo solidario. En sus comienzos, las clases se dictaban de manera precaria en viviendas particulares. Una emblemática maestra rural consagró más de 35 años de su vida a la enseñanza, convirtiendo su propia casa en escuela para cerca de 60 alumnos de la comarca, quienes cursaban allí hasta el séptimo grado antes de continuar sus estudios en otras localidades."
    },
    {
      id: "capilla_carmen",
      title: "Capilla Nuestra Señora del Carmen y Fiestas Patronales",
      category: "Fe, Identidad y Fiestas",
      icon: "⛪",
      summary: "El centro de la devoción religiosa local y núcleo de encuentro de toda la comarca serrana.",
      content: "La Capilla Nuestra Señora del Carmen representa el pilar espiritual y social de Villa Casana. Es el escenario central de las fiestas patronales que cada año reúnen a familias radicadas en el pueblo y a aquellos que regresan desde distintas provincias. Las celebraciones combinan misas, procesiones por las calles del pueblo, destrezas gauchas, asados criollos y música popular."
    },
    {
      id: "vida_rural_monte",
      title: "Tradición y Vida en el Monte Nativo",
      category: "Costumbres y Oficios Criollos",
      icon: "🍞",
      summary: "Huertas familiares, cría de animales y el aroma del pan casero horneado a leña de generación en generación.",
      content: "Villa Casana conserva con orgullo la esencia de la vida rural riojana. Los pobladores sostienen huertas familiares al pie de las sierras, cuidan animales en pastoreo libre y mantienen encendidos los tradicionales hornos de barro donde se amasa y hornea el pan casero y las tortas fritas, transmitiendo recetas y saberes de padres a hijos."
    },
    {
      id: "cronica_expedicion",
      title: "Crónica de Expedición: Entre Sierras y Hospitalidad",
      category: "Bitácora de Viajeros (Lodelpampa)",
      icon: "🚙",
      summary: "El testimonio de aventureros 4x4 que recorrieron las huellas entre Tuani y Casana, descubriendo la cascada secreta y la amabilidad local.",
      content: "Expedicionarios 4x4 en travesías por el sur riojano documentaron la experiencia única de ingresar a Villa Casana: un poblado prolijo y apacible custodiado por palmeras en su plaza, donde maestros y alumnos de la escuela reciben a los viajeros con genuina cordialidad, y los baqueanos guían hacia el modesto salto de agua del sur que brota milagroso entre las rocas del monte."
    },
    {
      id: "esencia_tiempo_saluda",
      title: "Donde el Tiempo Todavía Saluda por el Nombre",
      category: "Identidad & Alma de Pueblo (Orion FM)",
      icon: "🌅",
      summary: "La magia de un rincón riojano donde la modernidad no borró la sencillez, la cercanía y el mate compartido sin apuro.",
      content: "Como describe la crónica de Orion FM Chepes, quien llega a Villa Casana descubre mucho más que un destino: descubre silencios que abrazan, niños jugando libres, vecinos conversando en la vereda y amaneceres anaranjados sobre las sierras. Un pueblo nacido al calor del trabajo rural y la solidaridad donde cada saludo lleva el nombre de quien lo recibe, recordándonos que el interior del interior late vivo, auténtico y con el corazón abierto."
    }
  ],

  stars: [
    { name: "Cruz del Sur (Crux)", type: "Constelación Guía", desc: "La brújula natural del hemisferio sur. Señala directamente hacia el Polo Sur Celeste.", brightness: "Magnitud 0.7 - Muy brillante" },
    { name: "Alfa Centauri (Rigil Kentaurus)", type: "Estrella Puntera", desc: "La estrella más cercana a nuestro sistema solar (4.3 años luz). Es uno de los 'Punteros de la Cruz'.", brightness: "Magnitud -0.27" },
    { name: "Beta Centauri (Hadar)", type: "Estrella Puntera", desc: "La segunda estrella puntera, gigante azul distante que corona la constelación del Centauro.", brightness: "Magnitud 0.61" },
    { name: "Gran Nube de Magallanes", type: "Galaxia Satélite", desc: "Galaxia enana satélite de la Vía Láctea, claramente visible a simple vista como una nube lechosa flotante.", brightness: "Objeto de cielo profundo" },
    { name: "Cinturón de Orión (Tres Marías)", type: "Asterismo", desc: "Alnitak, Alnilam y Mintaka, visibles en las noches de primavera y verano en el cenit riojano.", brightness: "Magnitud 1.7" },
    { name: "Nebulosa Carina (NGC 3372)", type: "Nebulosa de Emisión", desc: "Cuatro veces más grande que la Nebulosa de Orión, un espectáculo fascinante con binoculares.", brightness: "Magnitud 1.0" }
  ],

  checklistItems: [
    { id: "agua", label: "Mínimo 3 litros de agua potable por persona por día", category: "Supervivencia", defaultChecked: true },
    { id: "auxilio", label: "Rueda de auxilio revisada, llave de cruz y compresor 12V", category: "Vehículo", defaultChecked: true },
    { id: "efectivo", label: "Dinero en efectivo (no hay cajeros ni cobro con tarjeta en la zona)", category: "Logística", defaultChecked: false },
    { id: "calzado", label: "Calzado de trekking con buen agarre para espinas y piedras", category: "Vestimenta", defaultChecked: false },
    { id: "solar", label: "Protector solar FPS 50+, sombrero de ala ancha y anteojos UV", category: "Salud", defaultChecked: false },
    { id: "linterna", label: "Linterna frontal con modo de luz roja para la noche", category: "Astro", defaultChecked: false },
    { id: "abrigo", label: "Abrigo térmico / rompeviento (la temperatura desciende de noche)", category: "Vestimenta", defaultChecked: false },
    { id: "bolsa_residuos", label: "Bolsa de residuos para traer de regreso toda la basura", category: "Eco", defaultChecked: true }
  ],

  // Rutómetro y Waypoints para Navegación Offline (Chepes a Villa Casana)
  routeWaypoints: [
    {
      km: "0.0",
      title: "Chepes - Salida Norte / Repostaje",
      coords: [-31.3508, -66.5947],
      elevation: "650 msnm",
      type: "Punto de Partida",
      badge: "Último Combustible",
      badgeColor: "bg-blue-600/90 text-white",
      instruction: "Llenar tanque en estaciones YPF de Chepes, verificar rueda de auxilio, bidones de agua y retirar efectivo. Tomar salida norte hacia zona rural.",
      warning: "Último punto con señal celular 4G, farmacias, gomero y cajeros automáticos.",
      icon: "⛽"
    },
    {
      km: "4.5",
      title: "Fin del Asfalto / Ingreso a Camino Rural",
      coords: [-31.3120, -66.5935],
      elevation: "645 msnm",
      type: "Transición de Calzada",
      badge: "Fin de Pavimento",
      badgeColor: "bg-amber-600/90 text-white",
      instruction: "Finaliza el pavimento. Comienza camino vecinal de tierra y ripio consolidado. Reducir velocidad a 40-50 km/h y encender luces bajas.",
      warning: "Comienza la pérdida paulatina de señal celular. Activar modo offline de la app.",
      icon: "🛣️"
    },
    {
      km: "11.2",
      title: "Badén Río Seco La Aguadita",
      coords: [-31.2580, -66.5910],
      elevation: "640 msnm",
      type: "Paso de Agua de Temporal",
      badge: "Badén de Arena",
      badgeColor: "bg-amber-700/90 text-white",
      instruction: "Cruce de lecho de río seco con arena y grava suelta. Mantener velocidad pareja en 2da marcha sin maniobras bruscas de frenado.",
      warning: "En temporada de tormentas estivales (verano), verificar que no baje creciente antes de cruzar.",
      icon: "🌊"
    },
    {
      km: "19.8",
      title: "Puesto Campesino Los Algodones",
      coords: [-31.1890, -66.5885],
      elevation: "635 msnm",
      type: "Bifurcación Rural",
      badge: "Rumbo Norte Directo",
      badgeColor: "bg-emerald-600/90 text-white",
      instruction: "Puesto campesino a la vera de la traza. Mantener siempre la huella principal consolidada que va derecho al Norte. Desestimar desvíos hacia el Este.",
      warning: "Pobladores hospitalarios disponibles en caso de requerir auxilio mecánico o consultas.",
      icon: "🏡"
    },
    {
      km: "27.4",
      title: "Cañada del Espinillo - Tramo Pedregoso",
      coords: [-31.1320, -66.5865],
      elevation: "630 msnm",
      type: "Paso Rocoso",
      badge: "Precaución Piedras",
      badgeColor: "bg-yellow-600/90 text-white",
      instruction: "Calzada con ondulaciones y piedras lajas sueltas. Conducir a velocidad moderada para cuidar cubiertas y suspensión.",
      warning: "Atención a animales sueltos (chivos, terneros, burros) pastando en las banquinas de monte.",
      icon: "🪨"
    },
    {
      km: "34.0",
      title: "Vista Panorámica del Cerro Espeche",
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
      title: "Desvío a Cascada del Sur (Afluente)",
      coords: [-31.0550, -66.5810],
      elevation: "645 msnm",
      type: "Desvío Turístico",
      badge: "Salto de Agua",
      badgeColor: "bg-cyan-600/90 text-white",
      instruction: "A la derecha se abre la huella secundaria hacia el salto de agua (1.8 km). Apta para vehículos altos/4x4 o senderismo a pie. La ruta principal sigue al Norte.",
      warning: "Suelo de lecho pedregoso. No ingresar con automóviles de chasis muy bajo.",
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
      instruction: "Llegada al corazón del pueblo. Plaza con palmeras históricas, Capilla Ntra. Sra. del Carmen y Escuela Rural. Área comunitaria con sombra.",
      warning: "Velocidad máxima 20 km/h. Respetar la tranquilidad y saludar con cordialidad a los vecinos.",
      icon: "🌴"
    },
    {
      km: "41.5",
      title: "La Casa de Piedra - Alero Rupestre Olongasta",
      coords: [-31.0580, -66.5890],
      elevation: "670 msnm",
      type: "Sitio Arqueológico",
      badge: "Petroglifos Sagrados",
      badgeColor: "bg-amber-600/90 text-white",
      instruction: "Tomar calle oeste desde la plaza por 1.5 km. Estacionar y caminar 200 m hasta el alero rocoso con morteros y petroglifos milenarios.",
      warning: "Patrimonio arqueológico protegido: estrictamente prohibido tocar dibujos rupestres o encender fuego.",
      icon: "🏛️"
    },
    {
      km: "44.0",
      title: "Base de Ascenso al Cerro Espeche",
      coords: [-31.0450, -66.5920],
      elevation: "710 msnm",
      type: "Senda de Trekking",
      badge: "Cumbre Panorámica",
      badgeColor: "bg-rose-600/90 text-white",
      instruction: "Punto de inicio de la senda hacia la cima del cerro. Sendero señalizado con pircas de piedra hacia el mirador panorámico 360° de Los Llanos.",
      warning: "Llevar mínimo 2 litros de agua por persona, calzado de suela con dibujo y avisar en el pueblo antes de subir.",
      icon: "🧗"
    },
    {
      km: "54.0",
      title: "Travesía Serrana hacia Tuani (Exclusivo 4x4)",
      coords: [-30.9850, -66.6120],
      elevation: "820 msnm",
      type: "Aventura 4x4 Off-Road",
      badge: "Solo Doble Tracción",
      badgeColor: "bg-red-700/90 text-white",
      instruction: "Continuación por huella agreste hacia el paraje serrano de Tuani, remontando quebradas rocosas y cuestas con piedras.",
      warning: "Solo para vehículos 4x4 con caja reductora y conductores experimentados. No transitar de noche.",
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
          href="tel:${c.phoneDisplay.replace(/[^0-9+]/g, '')}" 
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
    <div class="glass-card p-6 rounded-2xl space-y-3 border-l-4 border-amber-500">
      <div class="flex items-center justify-between">
        <span class="text-2xl">${h.icon}</span>
        <span class="text-[11px] font-mono uppercase bg-slate-900/80 text-amber-400 px-2.5 py-0.5 rounded border border-slate-800">
          ${h.category}
        </span>
      </div>
      <h3 class="text-lg font-bold text-slate-100">${h.title}</h3>
      <p class="text-xs text-amber-300/90 font-medium">${h.summary}</p>
      <p class="text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800/60">${h.content}</p>
    </div>
  `).join('');
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
    <div class="p-6 sm:p-8 space-y-5">
      <div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-100">${item.title}</h2>
        <p class="text-amber-500 font-semibold text-sm mt-1">Dificultad: ${item.difficulty}</p>
      </div>
      <p class="text-slate-300 text-base leading-relaxed">${item.description}</p>
      
      <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-2">
        <h4 class="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          Lo más destacado
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

  // Villa Casana coordinates: -31.0667, -66.5833
  const villaCasanaPos = [-31.0667, -66.5833];
  const chepesPos = [-31.3508, -66.5947];

  try {
    const map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: true
    }).setView([-31.18, -66.59], 10);

    // OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Villa Casana',
      maxZoom: 18
    }).addTo(map);

    // Custom Icon Maker
    const createCustomIcon = (bgColor, iconChar) => {
      return L.divIcon({
        className: 'custom-leaflet-icon',
        html: `<div style="background-color: ${bgColor}; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border: 2px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">${iconChar}</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18]
      });
    };

    // Main Markers
    L.marker(villaCasanaPos, { icon: createCustomIcon('#d97706', 'VC') })
      .addTo(map)
      .bindPopup(`
        <div class="text-sm">
          <h4 class="font-bold text-amber-400 text-base">Villa Casana</h4>
          <p class="text-slate-300">Pueblo Histórico y Rural de Los Llanos Riojanos.</p>
          <p class="text-xs text-slate-400 mt-1">40 km al norte de Chepes.</p>
        </div>
      `);

    L.marker(chepesPos, { icon: createCustomIcon('#2563eb', 'CH') })
      .addTo(map)
      .bindPopup(`
        <div class="text-sm">
          <h4 class="font-bold text-blue-400 text-base">Ciudad de Chepes</h4>
          <p class="text-slate-300">Cabecera del departamento. Último punto para repostar combustible, compras y servicios bancarios.</p>
        </div>
      `);

    // Add attractions markers
    APP_DATA.attractions.forEach(attr => {
      let iconColor = '#059669'; // Green default
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

    // Adventure Route Polyline Chepes -> Villa Casana
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

// Planetarium Canvas (Interactive Constellation Dome)
function initPlanetariumCanvas() {
  const canvas = document.getElementById('planetarium-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  resize();
  window.addEventListener('resize', resize);

  // Constellation data relative points
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

    // Deep Sky Gradient
    const grad = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, Math.max(w, h));
    grad.addColorStop(0, '#0c1630');
    grad.addColorStop(0.7, '#070b16');
    grad.addColorStop(1, '#03050a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Milky Way Band representation
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

    // Random background stars
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    for (let i = 0; i < 90; i++) {
      const sx = ((i * 137.5) % w);
      const sy = ((i * 223.7) % h);
      ctx.fillRect(sx, sy, 1.2, 1.2);
    }

    // Draw Cross connection lines
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    // Vertical beam (Acrux - Gacrux)
    ctx.beginPath();
    ctx.moveTo(w * southernCross[0].x, h * southernCross[0].y);
    ctx.lineTo(w * southernCross[1].x, h * southernCross[1].y);
    ctx.stroke();

    // Horizontal beam (Mimosa - Delta)
    ctx.beginPath();
    ctx.moveTo(w * southernCross[2].x, h * southernCross[2].y);
    ctx.lineTo(w * southernCross[3].x, h * southernCross[3].y);
    ctx.stroke();

    // Pointer line (Alpha - Beta Centauri)
    ctx.beginPath();
    ctx.moveTo(w * pointers[0].x, h * pointers[0].y);
    ctx.lineTo(w * pointers[1].x, h * pointers[1].y);
    ctx.stroke();

    ctx.setLineDash([]);

    // Draw Stars
    [...southernCross, ...pointers].forEach(star => {
      const sx = w * star.x;
      const sy = h * star.y;

      // Glow
      ctx.beginPath();
      ctx.arc(sx, sy, star.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(251, 191, 36, 0.2)';
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(sx, sy, star.r, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Label
      ctx.fillStyle = '#fef08a';
      ctx.font = '11px Plus Jakarta Sans, sans-serif';
      ctx.fillText(star.name, sx + 8, sy - 4);
    });

    rotation += 0.002;
    requestAnimationFrame(drawDome);
  }

  drawDome();
}

// Red Astro Vision Mode Toggle
function initAstroRedModeToggle() {
  const toggleBtn = document.getElementById('toggle-red-mode');
  const indicator = document.getElementById('red-mode-indicator');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    state.astroRedMode = !state.astroRedMode;
    document.body.classList.toggle('astro-red-mode', state.astroRedMode);

    if (indicator) {
      indicator.textContent = state.astroRedMode ? "Visión Roja Activa (Cielo Nocturno)" : "Modo Normal";
      indicator.classList.toggle('text-rose-400', state.astroRedMode);
      indicator.classList.toggle('text-slate-400', !state.astroRedMode);
    }
  });
}

// Checklist System
function loadChecklistState() {
  const saved = localStorage.getItem('villa_casana_checklist');
  if (saved) {
    try {
      state.checklist = JSON.parse(saved);
    } catch(e) {
      state.checklist = APP_DATA.checklistItems;
    }
  } else {
    state.checklist = APP_DATA.checklistItems;
  }
}

function saveChecklistState() {
  localStorage.setItem('villa_casana_checklist', JSON.stringify(state.checklist));
}

function toggleChecklistItem(id) {
  const item = state.checklist.find(i => i.id === id);
  if (item) {
    item.defaultChecked = !item.defaultChecked;
    saveChecklistState();
    renderChecklist();
  }
}

function renderChecklist() {
  const container = document.getElementById('checklist-container');
  const progressText = document.getElementById('checklist-progress-text');
  const progressBar = document.getElementById('checklist-progress-bar');
  if (!container) return;

  const total = state.checklist.length;
  const checked = state.checklist.filter(i => i.defaultChecked).length;
  const pct = Math.round((checked / total) * 100);

  if (progressText) progressText.textContent = `${checked} de ${total} listos (${pct}%)`;
  if (progressBar) progressBar.style.width = `${pct}%`;

  container.innerHTML = state.checklist.map(item => `
    <label class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all">
      <input 
        type="checkbox" 
        ${item.defaultChecked ? 'checked' : ''} 
        onchange="toggleChecklistItem('${item.id}')"
        class="w-5 h-5 rounded border-slate-700 text-amber-500 focus:ring-amber-500 bg-slate-800"
      />
      <div class="flex-1">
        <span class="text-sm ${item.defaultChecked ? 'line-through text-slate-500' : 'text-slate-200'}">
          ${item.label}
        </span>
      </div>
      <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
        ${item.category}
      </span>
    </label>
  `).join('');
}

// Lunar Phase Approximation Widget
function updateMoonPhaseWidget() {
  const moonText = document.getElementById('moon-phase-status');
  const moonTip = document.getElementById('moon-phase-tip');
  if (!moonText) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  let c = 0, e = 0, jd = 0, b = 0;
  if (month < 3) {
    c = year - 1;
    e = month + 12;
  } else {
    c = year;
  }
  jd = (2 - Math.floor(c / 100) + Math.floor(Math.floor(c / 100) / 4)) + Math.floor(365.25 * (c + 4716)) + Math.floor(30.6001 * (e + 1)) + day - 1524.5;
  b = (jd - 2451549.5) / 29.53058867;
  const phase = (b - Math.floor(b));

  let phaseName = "Luna Nueva";
  let astroQuality = "Excelente para Astroturismo (Cielo Negro)";
  let icon = "🌑";

  if (phase > 0.03 && phase <= 0.22) {
    phaseName = "Luna Creciente";
    astroQuality = "Muy buena (El cielo se oscurece tras la puesta lunar)";
    icon = "🌒";
  } else if (phase > 0.22 && phase <= 0.28) {
    phaseName = "Cuarto Creciente";
    astroQuality = "Buena para observar cráteres lunares";
    icon = "🌓";
  } else if (phase > 0.28 && phase <= 0.47) {
    phaseName = "Gibosa Creciente";
    astroQuality = "Brillo moderado";
    icon = "🌔";
  } else if (phase > 0.47 && phase <= 0.53) {
    phaseName = "Luna Llena";
    astroQuality = "Noche luminosa ideal para caminata nocturna rural";
    icon = "🌕";
  } else if (phase > 0.53 && phase <= 0.72) {
    phaseName = "Gibosa Menguante";
    astroQuality = "Buena en primera mitad de la noche";
    icon = "🌖";
  } else if (phase > 0.72 && phase <= 0.78) {
    phaseName = "Cuarto Menguante";
    astroQuality = "Cielo oscuro al anochecer";
    icon = "🌗";
  } else if (phase > 0.78 && phase <= 0.97) {
    phaseName = "Luna Menguante";
    astroQuality = "Excelente al principio de la noche";
    icon = "🌘";
  }

  moonText.innerHTML = `${icon} <span class="font-bold">${phaseName}</span>`;
  if (moonTip) moonTip.textContent = astroQuality;
}

// PWA Install prompt handler
let deferredPrompt;
function initPwaInstall() {
  const installBtn = document.getElementById('pwa-install-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.classList.remove('hidden');
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) {
        alert('Para instalar en tu celular, usa la opción "Añadir a la pantalla de inicio" de tu navegador (Chrome o Safari).');
        return;
      }
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        installBtn.classList.add('hidden');
      }
      deferredPrompt = null;
    });
  }

  // Register service worker if supported
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(reg => {
          console.log('Service Worker registrado correctamente (PWA offline lista):', reg.scope);
        })
        .catch(err => {
          navigator.serviceWorker.register('./sw.js').catch(e => console.log('SW registration note:', e));
        });
    });
  }
}

/* ==========================================================================
   OFFLINE NAVIGATION, RUTÓMETRO, SAT GPS TRACKER & VECTOR CROQUIS
   ========================================================================== */

// Helper to escape XML for GPX / KML downloads
function escapeXml(unsafe) {
  return (unsafe || '').toString().replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// Client-side Blob file downloader (100% offline)
function downloadFileBlob(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 300);
}

// 1. Export GPX Format for OsmAnd, Maps.me, Garmin, Gaia GPS
function downloadGpxRoute() {
  const waypointsXml = APP_DATA.routeWaypoints.map(wp => `
  <wpt lat="${wp.coords[0]}" lon="${wp.coords[1]}">
    <ele>${wp.elevation.replace(/[^0-9.]/g, '')}</ele>
    <name>Km ${wp.km} - ${escapeXml(wp.title)}</name>
    <desc>${escapeXml(wp.instruction)} [Alerta: ${escapeXml(wp.warning)}]</desc>
    <sym>Waypoint</sym>
    <type>${escapeXml(wp.type)}</type>
  </wpt>`).join('');

  const trackPointsXml = APP_DATA.routeWaypoints.map(wp => `
      <trkpt lat="${wp.coords[0]}" lon="${wp.coords[1]}">
        <ele>${wp.elevation.replace(/[^0-9.]/g, '')}</ele>
        <name>Km ${wp.km} - ${escapeXml(wp.title)}</name>
      </trkpt>`).join('');

  const gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="VillaCasanaTurismo" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Ruta Chepes - Villa Casana (Guía Offline)</name>
    <desc>Traza vecinal y waypoints para navegación sin cobertura celular entre Chepes y Villa Casana, Dpto. Rosario Vera Peñaloza, La Rioja, Argentina.</desc>
    <author>
      <name>Villa Casana Turismo</name>
    </author>
    <time>${new Date().toISOString()}</time>
  </metadata>
${waypointsXml}
  <trk>
    <name>Traza Chepes a Villa Casana (40 km consolidado)</name>
    <desc>Camino vecinal de ripio y tierra. Puntos de precaución, badenes y atractivos.</desc>
    <trkseg>
${trackPointsXml}
    </trkseg>
  </trk>
</gpx>`;

  downloadFileBlob(gpxContent, 'ruta_chepes_villa_casana_offline.gpx', 'application/gpx+xml');
}

// 2. Export KML Format for Google Earth & Google Maps
function downloadKmlRoute() {
  const placemarksXml = APP_DATA.routeWaypoints.map(wp => `
    <Placemark>
      <name>Km ${wp.km} - ${escapeXml(wp.title)}</name>
      <description><![CDATA[
        <p><b>Tipo:</b> ${wp.type}</p>
        <p><b>Elevación:</b> ${wp.elevation}</p>
        <p><b>Instrucción:</b> ${wp.instruction}</p>
        <p style="color:#d97706;"><b>Precaución:</b> ${wp.warning}</p>
      ]]></description>
      <Point>
        <coordinates>${wp.coords[1]},${wp.coords[0]},${wp.elevation.replace(/[^0-9.]/g, '')}</coordinates>
      </Point>
    </Placemark>`).join('');

  const coordsList = APP_DATA.routeWaypoints.map(wp => `${wp.coords[1]},${wp.coords[0]},0`).join(' ');

  const kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Ruta Chepes - Villa Casana (Offline)</name>
    <description>Ruta y waypoints rurales hacia Villa Casana, La Rioja</description>
${placemarksXml}
    <Placemark>
      <name>Camino Vecinal Chepes - Villa Casana (Traza)</name>
      <Style>
        <LineStyle>
          <color>ff10b981</color>
          <width>5</width>
        </LineStyle>
      </Style>
      <LineString>
        <extrude>1</extrude>
        <tessellate>1</tessellate>
        <coordinates>
          ${coordsList}
        </coordinates>
      </LineString>
    </Placemark>
  </Document>
</kml>`;

  downloadFileBlob(kmlContent, 'ruta_chepes_villa_casana_offline.kml', 'application/vnd.google-earth.kml+xml');
}

// 3. Mathematical Geolocation Calculations (Haversine & Bearing)
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function calculateBearing(lat1, lon1, lat2, lon2) {
  const rad = Math.PI / 180;
  const y = Math.sin((lon2 - lon1) * rad) * Math.cos(lat2 * rad);
  const x = Math.cos(lat1 * rad) * Math.sin(lat2 * rad) -
            Math.sin(lat1 * rad) * Math.cos(lat2 * rad) * Math.cos((lon2 - lon1) * rad);
  const brng = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
  return Math.round(brng);
}

function getCompassDirection(deg) {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSO', 'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'];
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
}

// 4. Offline GPS Satellite Tracker & Live Digital Compass
function initOfflineGpsTracker() {
  const toggleBtn = document.getElementById('gps-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleGpsTracker);
  }
}

function toggleGpsTracker() {
  if (state.gpsWatching) {
    stopGpsTracker();
  } else {
    startGpsTracker();
  }
}

function startGpsTracker() {
  if (!navigator.geolocation) {
    alert("Tu dispositivo o navegador no admite geolocalización por satélite.");
    return;
  }

  const btn = document.getElementById('gps-toggle-btn');
  const statusBadge = document.getElementById('gps-status-badge');
  const statusText = document.getElementById('gps-status-text');

  if (statusBadge) {
    statusBadge.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping inline-block"></span> Sincronizando con satélites GPS...';
    statusBadge.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40';
  }
  if (statusText) statusText.textContent = "Conectando con chip satelital del teléfono (funciona sin señal celular)...";

  state.gpsWatchId = navigator.geolocation.watchPosition(
    (position) => {
      state.gpsWatching = true;
      const { latitude, longitude, altitude, accuracy, speed } = position.coords;
      state.userPos = [latitude, longitude];

      if (btn) {
        btn.innerHTML = `<svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Detener Navegación Satelital`;
        btn.classList.add('border-rose-500/60', 'text-rose-300');
        btn.classList.remove('border-emerald-500/40', 'text-emerald-300');
      }

      if (statusBadge) {
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span> Satélites Conectados (Precisión ±${Math.round(accuracy)}m)`;
        statusBadge.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
      }

      if (statusText) {
        statusText.textContent = "Navegación activa 100% offline por satélite.";
      }

      // Target: Villa Casana Plaza [-31.0667, -66.5833]
      const targetLat = -31.0667;
      const targetLon = -66.5833;
      const distToCasana = calculateDistanceKm(latitude, longitude, targetLat, targetLon);
      const bearingToCasana = calculateBearing(latitude, longitude, targetLat, targetLon);
      const compassDir = getCompassDirection(bearingToCasana);

      // UI readouts
      const coordsEl = document.getElementById('gps-coords-display');
      if (coordsEl) coordsEl.textContent = `${latitude.toFixed(5)}°, ${longitude.toFixed(5)}°`;

      const distEl = document.getElementById('gps-distance-display');
      if (distEl) distEl.textContent = `${distToCasana.toFixed(1)} km`;

      const bearingEl = document.getElementById('gps-bearing-display');
      if (bearingEl) bearingEl.textContent = `${bearingToCasana}° (${compassDir})`;

      const speedEl = document.getElementById('gps-speed-display');
      if (speedEl) {
        const speedKmh = speed ? Math.round(speed * 3.6) : 0;
        speedEl.textContent = `${speedKmh} km/h`;
      }

      const altEl = document.getElementById('gps-altitude-display');
      if (altEl) {
        altEl.textContent = altitude ? `${Math.round(altitude)} msnm` : '645 msnm (estim.)';
      }

      // Compass needle rotation towards destination
      const needle = document.getElementById('gps-compass-needle');
      if (needle) {
        needle.style.transform = `rotate(${bearingToCasana}deg)`;
      }

      // Find closest upcoming waypoint
      findClosestUpcomingWaypoint(latitude, longitude);

      // Update map marker if Leaflet map exists
      updateGpsLeafletMarker(latitude, longitude);

      // Update position on vector croquis
      updateVectorCroquisUserPos(latitude, longitude);
    },
    (error) => {
      console.warn("GPS Satellite Error:", error);
      let msg = "Buscando conexión con satélites GPS...";
      if (error.code === 1) msg = "Permiso de ubicación denegado en tu navegador.";
      else if (error.code === 2) msg = "Buscando satélites... Sal a cielo abierto fuera del vehículo.";
      else if (error.code === 3) msg = "Esperando señal satelital...";

      if (statusBadge) {
        statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> ${msg}`;
        statusBadge.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40';
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    }
  );

  // Hardware Magnetic Compass sensor (phone orientation)
  if (window.DeviceOrientationEvent) {
    state.gpsOrientationHandler = (event) => {
      let compassHeading = null;
      if (event.webkitCompassHeading) {
        compassHeading = event.webkitCompassHeading;
      } else if (event.alpha !== null) {
        compassHeading = 360 - event.alpha;
      }
      if (compassHeading !== null) {
        state.userHeading = compassHeading;
        const compassDial = document.getElementById('gps-compass-dial');
        if (compassDial) {
          compassDial.style.transform = `rotate(${-compassHeading}deg)`;
        }
      }
    };
    window.addEventListener('deviceorientation', state.gpsOrientationHandler, true);
  }
}

function stopGpsTracker() {
  if (state.gpsWatchId !== null) {
    navigator.geolocation.clearWatch(state.gpsWatchId);
    state.gpsWatchId = null;
  }
  if (state.gpsOrientationHandler) {
    window.removeEventListener('deviceorientation', state.gpsOrientationHandler, true);
    state.gpsOrientationHandler = null;
  }
  state.gpsWatching = false;

  const btn = document.getElementById('gps-toggle-btn');
  if (btn) {
    btn.innerHTML = `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Iniciar Navegación Satelital GPS`;
    btn.classList.remove('border-rose-500/60', 'text-rose-300');
    btn.classList.add('border-emerald-500/40', 'text-emerald-300');
  }

  const statusBadge = document.getElementById('gps-status-badge');
  if (statusBadge) {
    statusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-500 inline-block"></span> GPS en Pausa`;
    statusBadge.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700';
  }
}

function findClosestUpcomingWaypoint(lat, lon) {
  let closest = null;
  let minDistance = Infinity;

  APP_DATA.routeWaypoints.forEach(wp => {
    const d = calculateDistanceKm(lat, lon, wp.coords[0], wp.coords[1]);
    if (d < minDistance) {
      minDistance = d;
      closest = wp;
    }
  });

  const nextWpEl = document.getElementById('gps-next-waypoint-display');
  if (nextWpEl && closest) {
    nextWpEl.innerHTML = `<span class="font-bold text-amber-400">${closest.title}</span> <span class="text-slate-400 text-xs">(Km ${closest.km} — a ${minDistance.toFixed(1)} km)</span>`;
  }
}

function updateGpsLeafletMarker(lat, lon) {
  if (!state.mapInstance) return;
  if (!state.gpsMarker) {
    const gpsIcon = L.divIcon({
      className: 'gps-live-marker',
      html: `<div class="relative flex items-center justify-center">
              <div class="w-7 h-7 rounded-full bg-amber-500/40 animate-ping absolute"></div>
              <div class="w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-xl relative"></div>
             </div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
    state.gpsMarker = L.marker([lat, lon], { icon: gpsIcon }).addTo(state.mapInstance);
    state.gpsMarker.bindPopup('<b>📍 Tu Posición Actual (GPS Satelital)</b>');
  } else {
    state.gpsMarker.setLatLng([lat, lon]);
  }
}

// 5. Render Step-by-Step Rutómetro (Roadbook Km a Km)
function renderRutometro() {
  const container = document.getElementById('rutometro-cards');
  if (!container) return;

  container.innerHTML = APP_DATA.routeWaypoints.map((wp, idx) => `
    <div id="wp-card-${wp.km.replace('.', '_')}" class="glass-card rounded-2xl p-5 border border-slate-800 hover:border-amber-500/50 transition-all relative overflow-hidden group">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0 border border-amber-500/30">
            ${wp.icon}
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                Km ${wp.km}
              </span>
              <span class="px-2 py-0.5 rounded-md text-[11px] font-semibold ${wp.badgeColor}">
                ${wp.badge}
              </span>
              <span class="text-xs text-slate-400 font-mono">
                ⛰️ ${wp.elevation}
              </span>
            </div>
            <h4 class="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors mt-1">
              ${wp.title}
            </h4>
          </div>
        </div>
        
        <div class="flex items-center gap-2 self-start sm:self-center">
          <button onclick="copyCoords(${wp.coords[0]}, ${wp.coords[1]}, this)" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 border border-slate-700 transition-all" title="Copiar coordenadas GPS">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            <span>${wp.coords[0].toFixed(4)}, ${wp.coords[1].toFixed(4)}</span>
          </button>
          <button onclick="focusWaypointOnMap([${wp.coords[0]}, ${wp.coords[1]}], '${escapeXml(wp.title)}')" class="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-all" title="Ver en Mapa">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </button>
        </div>
      </div>

      <div class="mt-3 space-y-2">
        <p class="text-sm text-slate-300 leading-relaxed">
          <strong class="text-slate-200">Indicación:</strong> ${wp.instruction}
        </p>
        <div class="p-2.5 rounded-xl bg-amber-950/30 border border-amber-600/30 text-xs text-amber-200/90 flex items-start gap-2">
          <span class="text-amber-400 font-bold">⚠️</span>
          <span><strong>Precaución:</strong> ${wp.warning}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Copy coordinate to clipboard helper with button text response
function copyCoords(lat, lon, btnElement) {
  const text = `${lat}, ${lon}`;
  navigator.clipboard.writeText(text).then(() => {
    const originalHtml = btnElement.innerHTML;
    btnElement.innerHTML = `<span class="text-emerald-400 font-bold">✓ ¡Copiado!</span>`;
    setTimeout(() => {
      btnElement.innerHTML = originalHtml;
    }, 2000);
  }).catch(() => {
    prompt("Copia las coordenadas para tu GPS:", text);
  });
}

// Focus waypoint on map and switch mode if needed
function focusWaypointOnMap(coords, title) {
  switchTab('mapa');
  if (state.mapMode === 'vector') {
    switchMapMode('leaflet');
  }
  setTimeout(() => {
    if (state.mapInstance) {
      state.mapInstance.flyTo(coords, 14, { duration: 1.5 });
      L.popup().setLatLng(coords).setContent(`<b>${title}</b>`).openOn(state.mapInstance);
    }
  }, 300);
}

// 6. Map Mode Switcher (Leaflet vs Vector Croquis Topográfico)
function initMapModeSwitcher() {
  const btnLeaflet = document.getElementById('btn-mode-leaflet');
  const btnVector = document.getElementById('btn-mode-vector');

  if (btnLeaflet) {
    btnLeaflet.addEventListener('click', () => switchMapMode('leaflet'));
  }
  if (btnVector) {
    btnVector.addEventListener('click', () => switchMapMode('vector'));
  }
}

function switchMapMode(mode) {
  state.mapMode = mode;
  const leafletWrapper = document.getElementById('leaflet-map-wrapper');
  const vectorWrapper = document.getElementById('vector-croquis-wrapper');
  const btnLeaflet = document.getElementById('btn-mode-leaflet');
  const btnVector = document.getElementById('btn-mode-vector');

  if (mode === 'leaflet') {
    if (leafletWrapper) leafletWrapper.classList.remove('hidden');
    if (vectorWrapper) vectorWrapper.classList.add('hidden');

    if (btnLeaflet) {
      btnLeaflet.className = "px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white shadow-lg transition-all flex items-center gap-2";
    }
    if (btnVector) {
      btnVector.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all flex items-center gap-2";
    }

    setTimeout(() => {
      if (state.mapInstance) state.mapInstance.invalidateSize();
    }, 100);
  } else {
    if (leafletWrapper) leafletWrapper.classList.add('hidden');
    if (vectorWrapper) vectorWrapper.classList.remove('hidden');

    if (btnLeaflet) {
      btnLeaflet.className = "px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all flex items-center gap-2";
    }
    if (btnVector) {
      btnVector.className = "px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white shadow-lg transition-all flex items-center gap-2";
    }
  }
}

// 7. Interactive Vector Topographic Croquis (SVG)
function initVectorCroquis() {
  const container = document.getElementById('vector-croquis-canvas-container');
  if (!container) return;

  // Render high-fidelity SVG Croquis
  container.innerHTML = `
    <svg viewBox="0 0 760 620" class="w-full h-auto select-none bg-slate-950 rounded-2xl border border-slate-800/80 shadow-2xl">
      <defs>
        <!-- Gradients -->
        <linearGradient id="roadGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="12%" stop-color="#d97706" />
          <stop offset="85%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.9" />
          <stop offset="60%" stop-color="#3b82f6" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
        </radialGradient>
        <pattern id="contourGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
        </pattern>
      </defs>

      <!-- Background Grid & Topography -->
      <rect width="760" height="620" fill="#090d16" />
      <rect width="760" height="620" fill="url(#contourGrid)" />

      <!-- Topographic Contour Lines (Sierras de Los Llanos & Cerro Espeche) -->
      <g stroke="rgba(217, 119, 6, 0.12)" stroke-width="1.5" fill="none">
        <!-- Cerro Espeche Elevation Outlines (Top Left) -->
        <ellipse cx="250" cy="110" rx="90" ry="50" />
        <ellipse cx="250" cy="110" rx="65" ry="36" />
        <ellipse cx="250" cy="110" rx="40" ry="22" stroke="rgba(217, 119, 6, 0.25)" />
        <ellipse cx="250" cy="110" rx="18" ry="10" stroke="rgba(217, 119, 6, 0.45)" fill="rgba(217, 119, 6, 0.05)" />
        <text x="250" y="113" font-size="9" fill="#f59e0b" text-anchor="middle" font-weight="bold">Cerro Espeche 710m</text>

        <!-- Serranías Orientales (Top Right) -->
        <path d="M 520,60 Q 580,120 540,240 T 600,380" stroke="rgba(255,255,255,0.05)" />
        <path d="M 550,80 Q 610,140 570,260 T 630,400" stroke="rgba(255,255,255,0.04)" />

        <!-- Río Seco La Aguadita Bed -->
        <path d="M 120,440 Q 280,455 450,445 T 700,430" stroke="#0284c7" stroke-width="2" stroke-dasharray="6,6" opacity="0.4" />
        <text x="560" y="440" font-size="10" fill="#38bdf8" opacity="0.7">Río Seco La Aguadita (Cruce Badén)</text>
      </g>

      <!-- Side Trails (Huellas Secundarias) -->
      <!-- Trail to Tuani (4x4) -->
      <path d="M 370,165 Q 310,120 220,50" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5,5" fill="none" opacity="0.85" />
      <text x="225" y="42" font-size="10" fill="#f87171" font-weight="bold">🚙 Travesía a Tuani (Solo 4x4)</text>

      <!-- Trail to Casa de Piedra -->
      <path d="M 370,170 L 290,150" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" fill="none" />
      <circle cx="290" cy="150" r="4" fill="#f59e0b" />
      <text x="280" y="145" font-size="10" fill="#fbbf24" font-weight="bold" text-anchor="end">🪨 Casa de Piedra (Olongastas)</text>

      <!-- Trail to Cascada del Sur -->
      <path d="M 370,210 Q 430,215 470,230" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4,4" fill="none" />
      <circle cx="470" cy="230" r="4" fill="#06b6d4" />
      <text x="480" y="234" font-size="10" fill="#22d3ee" font-weight="bold">💧 Cascada del Sur</text>

      <!-- Main Road Corridor (Chepes -> Villa Casana) -->
      <!-- Road Outer Glow -->
      <path d="M 370,550 Q 370,480 375,445 T 365,340 T 375,250 L 370,170" 
            stroke="rgba(245, 158, 11, 0.2)" stroke-width="12" stroke-linecap="round" fill="none" />
      <!-- Road Main Line -->
      <path id="svg-main-route" d="M 370,550 Q 370,480 375,445 T 365,340 T 375,250 L 370,170" 
            stroke="url(#roadGradient)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none" />

      <!-- Distance Scale / Kilometers on Road -->
      <g fill="#94a3b8" font-size="9" font-family="monospace">
        <text x="390" y="555">Km 0 (Chepes)</text>
        <text x="395" y="495">Km 4.5 (Fin Asfalto)</text>
        <text x="395" y="445">Km 11.2 (Badén)</text>
        <text x="385" y="345">Km 19.8 (Los Algodones)</text>
        <text x="395" y="275">Km 27.4 (Piedras)</text>
        <text x="395" y="215">Km 38.5 (Desvío Cascada)</text>
        <text x="395" y="175" font-weight="bold" fill="#34d399">Km 40 (Villa Casana)</text>
      </g>

      <!-- Waypoint Node Markers on Vector Croquis -->
      <!-- Chepes (Km 0) -->
      <g class="cursor-pointer" onclick="highlightCroquisWaypoint('0.0')">
        <circle cx="370" cy="550" r="8" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
        <text x="350" y="555" font-size="11" font-weight="bold" fill="#60a5fa" text-anchor="end">⛽ CHEPES</text>
      </g>

      <!-- Fin Asfalto (Km 4.5) -->
      <g class="cursor-pointer" onclick="highlightCroquisWaypoint('4.5')">
        <circle cx="370" cy="495" r="5" fill="#d97706" stroke="#ffffff" stroke-width="1.5" />
      </g>

      <!-- Badén La Aguadita (Km 11.2) -->
      <g class="cursor-pointer" onclick="highlightCroquisWaypoint('11.2')">
        <circle cx="375" cy="445" r="5" fill="#0284c7" stroke="#ffffff" stroke-width="1.5" />
      </g>

      <!-- Puesto Los Algodones (Km 19.8) -->
      <g class="cursor-pointer" onclick="highlightCroquisWaypoint('19.8')">
        <circle cx="365" cy="340" r="5" fill="#059669" stroke="#ffffff" stroke-width="1.5" />
      </g>

      <!-- Cañada del Espinillo (Km 27.4) -->
      <g class="cursor-pointer" onclick="highlightCroquisWaypoint('27.4')">
        <circle cx="370" cy="275" r="5" fill="#ca8a04" stroke="#ffffff" stroke-width="1.5" />
      </g>

      <!-- Vista Cerro Espeche (Km 34.0) -->
      <g class="cursor-pointer" onclick="highlightCroquisWaypoint('34.0')">
        <circle cx="375" cy="235" r="5" fill="#9333ea" stroke="#ffffff" stroke-width="1.5" />
      </g>

      <!-- Desvío Cascada (Km 38.5) -->
      <g class="cursor-pointer" onclick="highlightCroquisWaypoint('38.5')">
        <circle cx="372" cy="210" r="5" fill="#0891b2" stroke="#ffffff" stroke-width="1.5" />
      </g>

      <!-- Villa Casana Casco (Km 40.0) -->
      <g class="cursor-pointer" onclick="highlightCroquisWaypoint('40.0')">
        <circle cx="370" cy="170" r="10" fill="#10b981" stroke="#ffffff" stroke-width="2.5" />
        <text x="370" y="150" font-size="12" font-weight="900" fill="#34d399" text-anchor="middle">🌴 VILLA CASANA</text>
        <text x="370" y="135" font-size="9" fill="#a7f3d0" text-anchor="middle">Plaza, Capilla & Escuela</text>
      </g>

      <!-- Live GPS Satellital Beacon (Moves dynamically when tracking) -->
      <g id="croquis-user-beacon" class="hidden">
        <circle id="croquis-beacon-ping" cx="370" cy="550" r="16" fill="url(#beaconGlow)">
          <animate attributeName="r" values="8;24;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle id="croquis-beacon-center" cx="370" cy="550" r="6" fill="#3b82f6" stroke="#ffffff" stroke-width="2" />
        <text id="croquis-beacon-label" x="370" y="535" font-size="9" font-weight="bold" fill="#93c5fd" text-anchor="middle">📍 TU POSICIÓN</text>
      </g>

      <!-- Compass Rose & Scale in Croquis -->
      <g transform="translate(680, 70)">
        <circle cx="0" cy="0" r="24" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.5" />
        <path d="M 0,-18 L 5,0 L 0,-4 L -5,0 Z" fill="#ef4444" />
        <path d="M 0,18 L 5,0 L 0,4 L -5,0 Z" fill="#94a3b8" />
        <text x="0" y="-22" font-size="9" font-weight="bold" fill="#ef4444" text-anchor="middle">N</text>
        <text x="0" y="30" font-size="8" fill="#94a3b8" text-anchor="middle">S</text>
      </g>

      <!-- Legend Footer inside SVG -->
      <g transform="translate(30, 585)" font-size="9" fill="#94a3b8">
        <circle cx="10" cy="5" r="4" fill="#3b82f6" />
        <text x="20" y="8">Asfalto</text>
        <circle cx="85" cy="5" r="4" fill="#d97706" />
        <text x="95" y="8">Camino Ripio</text>
        <circle cx="185" cy="5" r="4" fill="#ef4444" />
        <text x="195" y="8">Huella 4x4</text>
        <circle cx="275" cy="5" r="4" fill="#0284c7" />
        <text x="285" y="8">Badén Río Seco</text>
        <text x="500" y="8" fill="#f59e0b">🧭 100% Vectorial (No requiere internet)</text>
      </g>
    </svg>
  `;
}

// Highlight waypoint card from croquis click
function highlightCroquisWaypoint(km) {
  const cardId = `wp-card-${km.replace('.', '_')}`;
  const el = document.getElementById(cardId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('ring-2', 'ring-amber-400', 'bg-amber-950/20');
    setTimeout(() => {
      el.classList.remove('ring-2', 'ring-amber-400', 'bg-amber-950/20');
    }, 2500);
  }
}

// Update user marker coordinates on Vector Croquis
function updateVectorCroquisUserPos(lat, lon) {
  const beacon = document.getElementById('croquis-user-beacon');
  const beaconCenter = document.getElementById('croquis-beacon-center');
  const beaconPing = document.getElementById('croquis-beacon-ping');
  const beaconLabel = document.getElementById('croquis-beacon-label');

  if (!beacon || !beaconCenter || !beaconPing || !beaconLabel) return;

  beacon.classList.remove('hidden');

  // Interpolation: Chepes lat: -31.3508 -> Y: 550, Villa Casana lat: -31.0667 -> Y: 170
  const latStart = -31.3508;
  const latEnd = -31.0667;
  const yStart = 550;
  const yEnd = 170;

  let progress = (lat - latStart) / (latEnd - latStart);
  progress = Math.max(0, Math.min(1.2, progress)); // Clamp

  const currentY = yStart - (progress * (yStart - yEnd));
  // Curvature of road in X
  const currentX = 370 + Math.sin(progress * Math.PI) * 5;

  beaconCenter.setAttribute('cx', currentX);
  beaconCenter.setAttribute('cy', currentY);
  beaconPing.setAttribute('cx', currentX);
  beaconPing.setAttribute('cy', currentY);
  beaconLabel.setAttribute('x', currentX);
  beaconLabel.setAttribute('y', currentY - 14);
}

