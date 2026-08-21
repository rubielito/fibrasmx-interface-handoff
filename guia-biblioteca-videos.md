# Guía de diseño futuro: Biblioteca educativa FIBRAS.MX

## 1. Propósito

FIBRAS.MX debe evolucionar hacia una biblioteca educativa de videos sobre FIBRAs. En una etapa posterior, el mismo sistema se podrá reutilizar para una biblioteca sobre acciones. En esta fase únicamente se documenta el diseño y la arquitectura; no se suben videos, no se conecta Vimeo y no se modifica la interfaz actual.

> La biblioteca debe ayudar a entender activos, conceptos y métricas antes de tomar decisiones. No debe presentarse como una plataforma de recomendaciones ni como asesoría financiera.

## 2. Arquitectura editorial

La unidad principal será una **ficha de contenido**. Cada ficha puede representar un video, una serie, una FIBRA, una categoría o una explicación conceptual. El modelo debe ser suficientemente general para cambiar `assetType` de `fibras` a `acciones` sin rehacer la aplicación.

| Campo | Descripción | Ejemplo |
|---|---|---|
| `assetType` | Tipo de activo | `fibras` / `acciones` |
| `ticker` | Símbolo relacionado | `FUNO` |
| `title` | Título del contenido | `¿Qué es FUNO?` |
| `description` | Resumen educativo | Explicación breve y neutral |
| `category` | Tema principal | `Pagos`, `Valuación`, `Riesgos` |
| `level` | Dificultad | `Inicial`, `Intermedio`, `Avanzado` |
| `duration` | Duración del video | `08:42` |
| `thumbnail` | Imagen de portada | URL de miniatura |
| `providerId` | Identificador externo | ID de Vimeo |
| `sourceUrl` | Fuente o documento relacionado | Reporte oficial |
| `publishedAt` | Fecha de publicación | Fecha ISO |

## 3. Navegación propuesta

La navegación principal conservará el lenguaje visual de la aplicación actual: **FIBRAs, Dashboard, Comparador, Calculadora y Portafolio**. La biblioteca futura se incorporará como una entrada educativa llamada **Aprende** o **Videos**, sin desplazar las herramientas principales.

La pantalla de biblioteca debe mostrar una introducción breve, una búsqueda por título o ticker, filtros por categoría y nivel, y una galería de contenidos. El usuario debe poder entrar desde una FIBRA específica y ver únicamente contenidos relacionados con ella.

| Ruta futura | Función |
|---|---|
| `/fibras-mx/aprende` | Biblioteca general de videos |
| `/fibras-mx/aprende/fibras` | Contenidos sobre FIBRAs |
| `/fibras-mx/aprende/fibras/FUNO` | Videos relacionados con FUNO |
| `/fibras-mx/aprende/tema/pagos` | Videos agrupados por tema |
| `/fibras-mx/aprende/video/:id` | Ficha individual del contenido |
| `/acciones/aprende` | Futura biblioteca sobre acciones |

## 4. Organización de contenidos

La primera versión editorial debe organizarse en seis series: **Conceptos básicos**, **Cómo leer una FIBRA**, **Pagos y distribuciones**, **Valuación**, **Ocupación y activos**, y **Riesgos y documentos**. Cada FIBRA podrá tener una colección propia con la secuencia “qué es”, “qué posee”, “cómo genera ingresos”, “qué métricas observar” y “qué documentos consultar”.

Para acciones, se reutilizará la misma secuencia con vocabulario adaptado: empresa, sector, ingresos, valuación, riesgos, resultados y fuentes públicas.

## 5. Diseño visual

La biblioteca debe conservar la dirección **terminal editorial negra y roja** ya definida para FIBRAS.MX. El fondo será negro carbón, el texto blanco roto y el rojo se utilizará como señal de navegación, categoría activa, duración o estado destacado. La retícula será visible mediante reglas finas; las tarjetas deben alinearse estrictamente y evitar desplazamientos decorativos.

En móvil, la biblioteca usará una sola columna vertical. Cada contenido ocupará un bloque táctil amplio con miniatura, categoría, título, duración y una llamada breve. En desktop se puede usar una retícula de tres columnas, siempre con alturas consistentes.

## 6. Ficha individual de video

La ficha debe abrir con el reproductor o miniatura principal, título, categoría, ticker relacionado y una descripción breve. Debajo debe aparecer una barra de navegación con **Video, Resumen, Fuentes y Siguiente**. Si el usuario llega desde una FIBRA, la primera sección debe conservar el contexto de esa FIBRA.

El contenido relacionado debe mostrar otros videos del mismo ticker y de la misma categoría. Las fuentes oficiales deben estar separadas de las opiniones o explicaciones editoriales. Nunca se deben inventar testimonios, calificaciones, rendimientos ni datos de mercado.

## 7. Vimeo como estrategia futura

Vimeo se considera el alojamiento inicial previsto, pero no se conectará todavía. Cuando llegue el momento, la aplicación guardará únicamente metadatos y el identificador del video, mientras Vimeo alojará el archivo y proporcionará el reproductor. La documentación oficial de Vimeo indica que su API puede administrar metadatos, carpetas y privacidad, y que su Player SDK puede controlar eventos del reproductor y subtítulos [1] [2].

La configuración futura deberá decidir si los videos son públicos, no listados o restringidos al dominio de FIBRAS.MX. Vimeo permite controlar la privacidad de visualización y la privacidad de incrustación, incluyendo una lista de dominios autorizados [1]. Esta decisión debe tomarse antes de cargar el primer video.

## 8. Componentes que deberán construirse después

La implementación futura necesitará un `VideoLibrary`, `VideoCard`, `VideoFilters`, `VideoPlayer`, `VideoMeta`, `RelatedVideos`, `SourceList` y `LearningPath`. Todos deben recibir datos por propiedades para que funcionen tanto con `assetType: fibras` como con `assetType: acciones`.

Por ahora, estos componentes quedan documentados como arquitectura. No se agregan videos de prueba ni reproductores conectados.

## 9. Criterios de aprobación futura

La biblioteca se considerará lista cuando permita encontrar un video por ticker o tema, abrir una ficha desde una tarjeta de FIBRA, reproducir el contenido desde el proveedor elegido, mostrar fuentes y contenidos relacionados, funcionar en móvil con una columna vertical y cambiar de FIBRAs a acciones sin duplicar toda la lógica.

## Referencias

[1]: https://developer.vimeo.com/api/guides/videos/interact "Vimeo API: interacción con videos, privacidad e incrustación"

[2]: https://help.vimeo.com/hc/en-us/articles/12427681730577-Overview-Developer-Tools "Vimeo Developer Tools: API, oEmbed y Player SDK"
