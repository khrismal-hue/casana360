# 🌄 Villa Casana Turismo - Aplicación Web & PWA

Aplicación web turística interactiva y Progressive Web App (PWA) dedicada a **Villa Casana**, paraje emblemático del **Departamento Rosario Vera Peñaloza**, Provincia de **La Rioja, Argentina**.

Diseñada para turistas, aventureros, senderistas y amantes de la naturaleza y el astroturismo.

> **Sitio publicado:** https://khrismal-hue.github.io/casana360/

---

## 🎨 Experiencia Visual (rediseño 2026)

La app recibió un rediseño integral con una estética premium, pensada para mostrar
la fotografía de Villa Casana como protagonista:

- **Hero fotográfico:** portada con imagen del Cerro Espeche, ficha lateral de
  acceso rápido, animación de estrellas en canvas y contadores animados
  (distancia, cielo Bortle 1, altitud y % de noches despejadas).
- **Tarjetas de atractivos renovadas:** miniatura propia por lugar, kicker de
  categoría, hover 3D suave y botón de acceso a la ficha completa.
- **Galería "Postales":** selección curada de 8 fotografías en grilla editorial
  con **lightbox** a pantalla completa (navegación con flechas, teclado y Esc).
- **Modal de atractivo:** imagen principal, galería de miniaturas, datos
  destacados, consejo baqueano, botón de compartir y **deep links**
  (`/#atractivo-cerro_espeche`) que abren la ficha directamente.
- **Detalles de navegación:** barra de progreso de lectura, scroll reveal,
  botón "volver arriba", notificaciones toast y footer de 4 columnas.
- **Accesibilidad y SEO:** jerarquía de encabezados correcta, foco visible,
  `aria-*` en modal/lightbox, `prefers-reduced-motion`, Open Graph/Twitter Cards,
  JSON-LD (`TouristDestination` + `TouristAttraction`) y metadatos por pestaña.
  Lighthouse: **Accesibilidad 100 · Buenas prácticas 100 · SEO 100**.
- **Rendimiento:** imágenes reoptimizadas a un máximo de 1920 px y JPEG q82
  (varias pasaron de 2–3 MB a menos de 500 KB) sin pérdida visual apreciable.

---

## 🌟 Funcionalidades Principales

### 1. 🌄 Guía de Atractivos Naturales y Circuitos
- **Cerro Espeche:** Información sobre trekking, senderos, dificultad y mirador panorámico de 360° sobre Los Llanos riojanos.
- **Circuitos 4x4 y Off-Road:** Travesías por huellas serranas, lechos de ríos secos y cañadas.
- **Cicloturismo Chepes - Villa Casana:** 40 km de recorrido rural en mountain bike con recomendaciones técnicas.
- **Quebradas y Pozos Serranos:** Remansos naturales y arroyos de temporal.
- **Filtros interactivos** por categoría y modales con recomendaciones de pobladores baqueanos.

### 2. 🧭 Navegación 100% Offline, Rutómetro & GPS Satelital
- **Diseñado para zonas sin señal celular:** El trayecto rural Chepes - Villa Casana no tiene cobertura 3G/4G. La app está preparada para operar en **Modo Avión** con el chip GPS satelital del teléfono.
- **Exportador de Rutas GPX & KML:** Descarga instantánea con un clic del track completo y waypoints para abrir en **OsmAnd**, **Maps.me**, **Organic Maps**, **Garmin** o **Google Earth**.
- **Panel GPS en Tiempo Real con Brújula Digital:** Conexión directa a satélites que calcula en vivo la distancia restante a Villa Casana, rumbo en grados (azimut), velocidad actual, altitud y el próximo hito en el camino.
- **Croquis Topográfico Vectorial (SVG):** Alternativa 100% offline al mapa web. Muestra el relieve de las Sierras de Los Llanos, el Cerro Espeche, badenes, bifurcaciones y proyecta tu posición satelital en directo sin depender de servidores de mapas.
- **Rutómetro Paso a Paso (Km 0 a Km 54):** 11 puntos de control georreferenciados con instrucciones de manejo, alertas de crecientes/arena, desvíos y botones para copiar coordenadas GPS exactas al portapapeles.

### 3. ✨ Astroturismo & Modo Cielos Prístinos
- **Cielos de Clase Bortle 1-2:** Cero contaminación lumínica en una de las regiones más transparentes del país.
- **Simulador Interactivo del Domo Celeste Austral (Canvas):** Representación de la Cruz del Sur, los Punteros (Alfa y Beta Centauri) y la Vía Láctea.
- **Modo Linterna / Visión Roja Nocturna:** Preserva la adaptación ocular en la oscuridad (visión escotópica) sin encandilarse.
- **Widget de Fase Lunar:** Estimación astronómica en tiempo real para planificar noches de cielo profundo o paseos iluminados por la luna llena.
- **Guía de orientación celeste:** Cómo localizar el Polo Sur geográfico proyectando la Cruz del Sur.

### 4. 🎒 Planificador & Checklist Interactivo de Viaje
- Lista de verificación interactiva de equipaje esencial (agua potable, rueda de auxilio, efectivo, botiquín, ropa térmica) con guardado automático en `localStorage`.
- Barra de progreso interactiva.
- Código de convivencia rural y turismo responsable (cerrar tranqueras, cero residuos, prevención de incendios).

### 5. 🤝 Pobladores, Baqueanos y Botones Directos de WhatsApp
- Directorio de anfitriones y productores locales (Trekking al Cerro Espeche, Pan casero en horno de barro, Chivito riojano, Auxilio 4x4, Hospedaje/Camping).
- Botones de un solo clic que abren WhatsApp con un mensaje personalizado de consulta.

### 6. 📜 Historias, Identidad y Crónicas de Viajeros
- **"Donde el tiempo todavía saluda por el nombre":** Crónica especial de Orion FM Chepes sobre la hospitalidad campesina, los silencios que abrazan y los amaneceres naranjas sobre las sierras.
- **Relatos Fundacionales:** El pasado Olongasta en la Casa de Piedra, la historia de la primera escuela rural (35 años de vocación docente), la devoción a la Virgen del Carmen y la botica natural del monte (jarilla, tusca, chañar y algarroba).
- **Directorio de Servicios & Medios:** Policía, hospital, bomberos, turismo y enlace directo a Radio Orion FM 98.7 Chepes.

### 7. 🎬 Videos Documentales: Artesanos de Villa Casana
- **Serie "Gestos del oficio":** Sección dedicada a los artesanos reconocidos del pueblo, con retrato, miniatura enlazada a YouTube y ficha informativa.
- **Vicenta Pereyra:** Artesana de Villa Casana; su video retrata la rueca, las fibras naturales y el telar criollo como parte de la identidad del pueblo.
- **Ignacio y Jesús Ruarte:** Ignacio Ruarte, reconocido artesano de Villa Casana, junto a Jesús Ruarte, protagonizan el segundo capítulo de la serie.
- **Galería del cielo nocturno:** Nuevas fotografías del firmamento de Villa Casana integradas en la pestaña de Astroturismo.

---

## 🛠️ Cómo Personalizar con Fotos y Contactos Reales

### 📸 1. Agregar tus Fotos Reales
La aplicación busca automáticamente fotos dentro de la carpeta `images/`.
Los nombres usan minúsculas y guiones, sin espacios ni acentos. Para reemplazar
una foto, copiala dentro de `images/` con el mismo nombre del archivo actual:
* `cerro-espeche-nuevo.jpg` -> Foto del cerro
* `circuito-4x4.jpg` -> Foto de camionetas en el camino de tierra o río seco
* `cicloturismo.jpg` -> Foto de ciclistas
* `pan-casero.jpg` -> Foto del horno de barro, pan casero o tortas fritas
* `pozos-arroyos.jpg` -> Foto de las vertientes o quebradas
* `cielo-nocturno.jpg` -> Foto del cielo estrellado
* `cielo-nocturno-2.jpg` / `cielo-nocturno-3.jpg` -> Galería del cielo nocturno
* `cabrito-1.jpg` / `cabrito-2.jpg` -> Galería del cabrito asado
* `ignacio-ruarte.jpg` -> Retrato de Ignacio Ruarte
* `ignacio-y-jesus-ruarte.jpg` -> Miniatura del video de Ignacio y Jesús Ruarte
* `vicenta-pereyra.jpg` -> Miniatura y retrato de Vicenta Pereyra

Si una foto falta, la app usa una imagen local de respaldo (no depende de
internet). Los créditos y licencias de las fotos de gastronomía están en
[images/CREDITOS.md](images/CREDITOS.md).

### 🖼️ Miniaturas de las tarjetas (`cardImage`)

Cada atractivo de `APP_DATA.attractions` en [app.js](file:///c:/Users/khris/Desktop/proyecto%20turismo/app.js)
tiene tres campos de imagen con roles distintos:

| Campo | Dónde se usa |
| --- | --- |
| `cardImage` | Miniatura de la tarjeta en la grilla de "Explorar" |
| `localImage` | Imagen principal del modal y primera miniatura de su galería |
| `image` / `gallery` | Respaldo y fotos adicionales de la ficha |

Para cambiar la portada de una tarjeta, apuntá `cardImage` a la foto que mejor
represente el lugar (horizontal, buen contraste y al menos 1200 px de ancho).
Si `cardImage` no existe, la app usa `localImage` automáticamente.

### 📱 2. Cambiar Teléfonos y Números de WhatsApp
Abre el archivo [app.js](file:///c:/Users/khris/Desktop/proyecto%20turismo/app.js) en tu editor y busca la sección `localContacts`:
```javascript
{
  name: "Don Ramón Romero",
  phoneDisplay: "+54 9 3821 40-1234",
  whatsappNumber: "5493821401234", // Código de país (54) + 9 + característica sin 0 ni 15
  whatsappMsg: "¡Hola! Vi su contacto en la app de Villa Casana..."
}
```

### 📖 3. Agregar o Modificar Leyendas e Historias
En [app.js](file:///c:/Users/khris/Desktop/proyecto%20turismo/app.js), en la sección `historyAndLegends`, puedes modificar o agregar anécdotas, historias familiares o reseñas históricas de Villa Casana.

---

## 🧭 Cómo Navegar en el Campo Sin Señal (100% Offline)

1. **Antes de salir de Chepes (con señal):**
   - Abre la aplicación en tu celular.
   - Entra en la pestaña **"🧭 Rutas & Mapa Offline"**.
   - Presiona **"Descargar GPX"**. Esto guarda el archivo con todos los waypoints y la traza en tu teléfono.
2. **Durante el viaje (sin señal celular / en Modo Avión):**
   - **Opción A (Dentro de esta App):** Presiona **"Iniciar Navegación Satelital GPS"**. El chip satelital de tu teléfono calculará en tiempo real tu distancia a Villa Casana, tu velocidad, el rumbo de la brújula y el próximo hito en el camino.
   - **Opción B (Croquis Vectorial):** Si las imágenes de los mapas no cargan por falta de internet, activa el **"Croquis Vectorial (100% Offline)"** para ver el mapa topográfico con todas las quebradas, badenes y desvíos.
   - **Opción C (En tu App de GPS favorita):** Abre el archivo `.gpx` descargado en **OsmAnd**, **Maps.me**, **Organic Maps** o **Garmin**. Tendrás la ruta visible con navegación por voz y relieve sin gastar datos.
   - **Opción D (Rutómetro Paso a Paso):** Consulta los 11 puntos de control georreferenciados (Km 0 a Km 54) con consejos de badenes, pasos de arena y botones para copiar coordenadas `Lat, Lon` exactas.

---

## 🚀 Cómo Ejecutar la Aplicación

1. **Abrir directamente:** Haz doble clic sobre el archivo [index.html](file:///c:/Users/khris/Desktop/proyecto%20turismo/index.html) en tu navegador favorito (Chrome, Edge, Firefox, Safari).
2. **Instalación como App en Celular (PWA):**
   - En Android (Chrome): Toca el menú de tres puntos y selecciona **"Agregar a la pantalla principal"**.
   - En iPhone / iPad (Safari): Toca el botón de compartir y selecciona **"Añadir a la pantalla de inicio"**.

---

## 📁 Estructura del Proyecto

```
proyecto turismo/
├── images/          # Fotografías optimizadas de Villa Casana y gastronomía
│   ├── LEEME_FOTOS.txt
│   └── CREDITOS.md  # Atribución y licencias de las fotos de comida
├── data/
│   └── gastronomia.json  # Fichas de comidas típicas (nombre, categoría, imagen, descripción)
├── index.html       # Estructura principal, hero, postales, modal y lightbox
├── styles.css       # Sistema visual, responsive, modo nocturno rojo y animaciones
├── app.js           # Datos de atractivos, galería, modal, scroll y deep links
├── manifest.json    # Manifiesto para instalación como App PWA
├── service-worker.js # Service worker (precache tolerante a fallos y offline)
└── README.md        # Esta guía de uso y personalización
```

### ♻️ Actualizar el caché tras cambiar archivos

El service worker usa una versión de caché (`CACHE_NAME = 'casana360-pwa-v11'`).
Cuando modifiques `index.html`, `styles.css`, `app.js` o agregues imágenes:

1. Subí el número de versión en `service-worker.js` (por ejemplo `v12`).
2. Si agregaste fotos nuevas usadas por la app, sumalas a `CORE_ASSETS`.
3. Recargá dos veces el sitio para que el nuevo service worker tome el control.

El precache se hace recurso por recurso con `Promise.allSettled`, de modo que una
imagen faltante no invalida el resto de la aplicación offline.
