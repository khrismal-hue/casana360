/**
 * Service Worker para Villa Casana Turismo PWA
 * Diseñado para funcionamiento 100% fluido y navegación offline
 * en zonas rurales de montaña sin señal celular (Los Llanos riojanos).
 */

const CACHE_NAME = 'casana360-pwa-v4';

// Recursos esenciales que se guardan de inmediato en la instalación (App Shell)
const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  // Imágenes
  './images/cerro_espeche.jpg',
  './images/cerro espeche 1.jpg',
  './images/circuito_4x4.jpg',
  './images/cicloturismo.jpg',
  './images/cielo_nocturno.jpg',
  './images/pan_casero.jpg',
  './images/pozos_arroyos.jpg',
  './images/plaza_carmen.jpg',
  './images/capilla_del_carmen.jpg',
  './images/iglesia del carmen.jpg',
  './images/fiesta de virgen del carmen.jpg',
  './images/capilla Sra. del Carmen Villa Casana.webp',
  './images/escuela_rural.jpg',
  './images/pueblo.jpg',
  './images/bienvenidos.jpg',
  './images/sabores_casana.jpg',
  './images/rosa_oropel.jpg',
  './images/mural_escuela.jpg',
  // Fotografías reales — Casa de Piedra
  './images/casa_de_piedra.jpg',
  './images/casa_de_piedra_interior.jpg',
  './images/casa de piedra1.jpg',
  './images/casa de piedra 3.jpg',
  // Fotografías reales — Escuela Rural
  './images/escuela_frente.jpg',
  './images/escuela villa casana frente.jpg',
  './images/escuela villa casana.jpg',
  './images/escuela villa casana 3.jpg',
  './images/escuela_patio.jpg',
  './images/huerta_escolar.jpg',
  // Fotografías reales — Circuito 4x4 y Casas Viejas
  './images/casas_viejas_4x4.jpg',
  './images/casas_viejas_panoramica.jpg',
  './images/cartel_casas_viejas.jpg',
  './images/casas viejas 1.jpeg',
  './images/casas viejas 2.jpeg',
  './images/casas viejas 3.jpeg',
  './images/casas viejas 4.jpeg',
  './images/casas viejas.jpeg',
  './images/casas viejas 3.jpg',
  './images/casas viejas 4.jpg',
  // Fotografías reales — Quebrada de Vallecito
  './images/quebrada de vallecito.jpg',
  './images/quebrada de vallecito 1.jpeg',
  './images/quebrada de vallecito 2.jpeg',
  './images/quebrada de vallecito 3.jpeg',
  './images/quebrada de vallecito 4.jpeg',
  './images/quebrada_vallecito_2.jpg',
  './images/quebrada_vallecito_3.jpg',
  // Fotografías reales — Río La Junta
  './images/rio_la_junta.jpg',
  './images/rio_la_junta_2.jpg',
  './images/la junta 1.jpeg',
  './images/la junta 2.jpeg',
  './images/la junta 3.jpeg',
  './images/la junta 4.jpeg',
  './images/la junta 5.jpeg',
  './images/la junta 6.jpeg',
  './images/la junta 7.jpeg',
  './images/la junta 8.jpeg',
  './images/la junta 9.jpeg',
  // Fotografías reales — La Batea
  './images/la batea 1.jpeg',
  './images/la batea 2.jpeg',
  './images/la batea 3.jpeg'
];

// Librerías CDN críticas para el mapa y estilos offline
const CDN_ASSETS = [
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.tailwindcss.com'
];

// 1. INSTALACIÓN: Precaching del App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Primero cacheamos los recursos locales esenciales de forma garantizada
      try {
        await cache.addAll(CORE_ASSETS);
      } catch (err) {
        console.warn('Advertencia precacheando assets locales:', err);
      }

      // Intentamos cachear los CDN de forma tolerante a fallos
      await Promise.allSettled(
        CDN_ASSETS.map((url) =>
          fetch(url, { mode: 'cors' })
            .then((res) => {
              if (res.ok) return cache.put(url, res);
            })
            .catch((err) => console.log('CDN offline durante install:', url, err))
        )
      );
    })
  );
  // Activa el nuevo Service Worker inmediatamente sin esperar que cierren pestañas
  self.skipWaiting();
});

// 2. ACTIVACIÓN: Limpieza de versiones antiguas de caché
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Eliminando caché antigua:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  // Reclama el control de todos los clientes abiertos de inmediato
  self.clients.claim();
});

// 3. FETCH: Estrategia de respuesta rápida y respaldo offline
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Solo manejamos peticiones GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // A. Peticiones de navegación (cuando el usuario entra o recarga cualquier página)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // Si hay red, actualizamos el index en caché
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          // Si no hay señal (modo avión o sierra profunda), servimos la app offline
          const cachedPage = await caches.match('./index.html');
          return cachedPage || caches.match('./');
        })
    );
    return;
  }

  // B. Recursos estáticos locales y librerías CDN (Cache-First para máxima velocidad)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // En segundo plano intentamos actualizar la caché si estamos online (Stale-While-Revalidate selectivo)
        if (navigator.onLine && (url.origin === location.origin)) {
          fetch(request).then((freshResponse) => {
            if (freshResponse && freshResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(request, freshResponse));
            }
          }).catch(() => {});
        }
        return cachedResponse;
      }

      // Si no estaba en caché, vamos a la red y guardamos una copia (ej. imágenes, azulejos de mapa Leaflet)
      return fetch(request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            (networkResponse.status === 200 || networkResponse.type === 'opaque')
          ) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Si falla una imagen y estamos offline, devolvemos el icono SVG de respaldo si aplica
          if (request.destination === 'image') {
            return (await caches.match('./icon.svg')) || (await caches.match('./icon-192.png'));
          }
          // Para todo lo demás, devolver fallback de página si era un documento
          return caches.match('./index.html');
        });
    })
  );
});
