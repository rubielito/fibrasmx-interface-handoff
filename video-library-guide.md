# Biblioteca audiovisual FIBRAS.MX

## Estado actual

La ruta `/fibras-mx/preview-editorial` contiene una **simulación visual** de la sección de videos basada en la referencia proporcionada. La composición está formada por un carrusel horizontal de **Recomendados para ti**, con botón de avance, y una cuadrícula de dos columnas para **Últimos videos** en escritorio. En móvil, los recomendados siguen siendo desplazables horizontalmente y los últimos videos se apilan verticalmente.

Cada tarjeta simula una publicación audiovisual mediante una miniatura, duración, título y metadatos. Las miniaturas actuales utilizan imágenes remotas de referencia y los títulos, creadores y vistas son contenido demostrativo; todavía no existe una cuenta de Vimeo conectada ni un reproductor externo activo.

## Modelo de datos temporal

Los registros viven en `PreviewEditorial.tsx` dentro de `previewVideos` y usan los campos `id`, `title`, `creator`, `duration`, `views` e `image`. La estructura está separada de la presentación para que pueda sustituirse por una respuesta de Vimeo u otro proveedor sin rehacer la interfaz.

## Integración futura

Cuando se conecte Vimeo u otro proveedor, `previewVideos` debe reemplazarse por una fuente de datos externa con un modelo estable: `id`, `title`, `creator`, `duration`, `thumbnail`, `publishedAt`, `views` y `providerUrl`. La interfaz deberá conservar la separación entre carrusel recomendado y cuadrícula de últimos videos.

El siguiente paso técnico será definir una ruta segura de consulta en backend, guardar el identificador del proveedor en variables privadas y transformar la respuesta externa al modelo local. Las miniaturas deberán llegar desde el proveedor o desde almacenamiento persistente; no se deben guardar videos grandes dentro del proyecto frontend.

## Reglas editoriales

Los enlaces actuales son de previsualización y no deben presentarse como reproductores conectados. Al activar la integración real, cada tarjeta deberá abrir un reproductor accesible, mostrar duración y estado de carga, y ofrecer una alternativa textual si el video no puede reproducirse. Los títulos, creadores, vistas y fechas deben provenir del contenido real, sin inventar reseñas, valoraciones o métricas de audiencia.
