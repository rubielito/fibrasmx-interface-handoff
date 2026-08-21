# Auditoría de flujos de FIBRAS.MX

## Dashboard

La ruta `/dashboard` presenta una cuadrícula de cuatro paneles: Top Rendimientos, Mayores Caídas, Mayor Volumen y Mayor Capitalización. Cada panel lista cinco FIBRAs con ticker, nombre y métrica alineada a la derecha. Debajo aparecen dos bloques de estado: Mis Favoritos y Mis Alertas de Precio. En el estado observado, ambos muestran mensajes vacíos que invitan a volver a la página principal o entrar al detalle de una FIBRA.

## Portafolio

La ruta `/portafolio` conserva la navegación principal y muestra un estado de carga prolongado antes del pie. El flujo parece depender de sesión o datos persistidos. Para una copia educativa conviene reemplazar ese estado por un estado vacío claro, con la opción de añadir instrumentos observados y crear alertas simuladas sin enviar órdenes.

## Diferencias prioritarias frente a la aplicación actual

La aplicación independiente ya tiene catálogo, Comparador y Calculadora. Las principales diferencias funcionales son la falta de un Dashboard con cuatro paneles de rankings, la falta de un Portafolio con estado vacío y la navegación completa entre módulos. La próxima pasada debe añadir esas dos vistas y conectar todos los enlaces del header.

Fuentes revisadas:

- https://fibras-mx.abacusai.app/dashboard
- https://fibras-mx.abacusai.app/portafolio

## Ficha detallada y selección

La página principal de FIBRAS.MX expone 17 tarjetas, pero los enlaces visibles solo corresponden al menú; las tarjetas usan eventos internos y botones de favoritos. La ficha detallada se debe modelar como una ruta propia al tocar la tarjeta, con navegación de regreso y secciones educativas. El nuevo diseño debe incluir pagos, valuación, ocupación, métricas, explicación del sector y videos por sección, sin afirmar que los valores son recomendaciones.

## Validación de ficha y videos

La ruta `/fibras-mx/fibra/FUNO` carga una ficha con navegación compacta, precio de referencia, ticker, sector y tabs Resumen, Pagos, Valuación, Ocupación y Videos. Al abrir Videos aparecen tres tarjetas temáticas: qué es la FIBRA, cómo leer una FIBRA y pagos/distribuciones. Cada tarjeta abre una búsqueda educativa en YouTube relacionada con el tema.

## Flujo Videos → Resumen

Los enlaces de la previsualización ahora usan `?seccion=videos`. La ficha FUNO abre correctamente con Videos activo y muestra las tres tarjetas educativas. Al tocar Resumen, cambia a las métricas de yield, ocupación y dividendo. La versión principal no fue reemplazada.

## Reportes, carrusel y relaciones

La ficha FUNO abre correctamente con `?seccion=reportes`. El repositorio muestra cinco años, con un bloque anual y cuatro trimestrales por año, todos marcados como "Sin PDF cargado" hasta que se proporcionen documentos oficiales. El carrusel superior repite las miniaturas de FIBRAs y cada elemento enlaza a su ficha con Videos como sección inicial. La sección inferior muestra tres FIBRAs relacionadas mediante coincidencia de sector y etiquetas educativas; se presenta como contexto, no como recomendación.
