# Investigación pública de dashboardfinanciero.lat

## Resultado de acceso directo
Se intentó abrir `https://dashboardfinanciero.lat/` y `http://dashboardfinanciero.lat/` el 21 de agosto de 2026. El navegador devolvió `ERR_CONNECTION_CLOSED` y la extracción de página no obtuvo contenido. Por tanto, no se pudo validar públicamente el funcionamiento interno, la autoría, la integración de datos ni la existencia de una API.

## Búsqueda indexada
Las búsquedas por `dashboardfinanciero.lat`, `Dashboard Financiero portafolio inversiones` y `dashboardfinanciero Facebook` no devolvieron una página oficial claramente atribuible al dominio. Aparecieron resultados generales sobre dashboards de inversión, plantillas de Excel/Power BI, portafolios personales y publicaciones de Facebook sobre dashboards financieros, pero no evidencia suficiente para afirmar que pertenezcan al producto de referencia.

## Patrones observables en las capturas proporcionadas por el usuario
Las capturas muestran una pantalla de resumen con una tarjeta de bienvenida, KPIs de invertido/rendimiento/distribuciones, gráfica temporal de rendimientos, círculo de distribución de cartera, gráfica acumulada, lista de últimos movimientos, tabla detallada por emisora y visualizaciones comparativas. Para FIBRAS.MX se puede adaptar esa arquitectura sin copiar marcas, datos ni contenido privado: emisora/ticker, títulos, costo promedio, importe, valor de referencia, distribuciones y participación por FIBRA.

## Límite actual
La implementación de FIBRAS.MX debe seguir siendo educativa y manual. Los gráficos deben alimentarse exclusivamente de los registros que el usuario introduzca, mostrando estados vacíos cuando no existan datos. No se debe inferir que dashboardfinanciero.lat expone una API o permitir que una captura se interprete automáticamente sin revisión del usuario.

## Fuentes consultadas
- `https://dashboardfinanciero.lat/` — acceso fallido, sin contenido extraíble.
- `http://dashboardfinanciero.lat/` — acceso fallido, sin contenido extraíble.
- Búsqueda pública web con términos exactos del dominio y variantes de dashboard financiero/portafolio.

## Fuentes comparables consultadas
- **Datdata — Ejemplo de Dashboard de Finanzas:** describe dashboards como una sola pantalla de KPIs, comparaciones entre periodos y desgloses; menciona ingresos, egresos, utilidad, márgenes y desviación contra presupuesto. Fuente: `https://www.datdata.com/finanzas-dashboard`.
- **TrackFolio:** muestra un producto de finanzas personales con tarjetas de patrimonio, rendimiento, distribución por tipo, métricas de cartera, gastos, metas, movimientos y navegación de portafolio. Fuente: `https://trackfolio.pages.dev/`. No es la fuente del sitio solicitado; se usa solo como patrón público comparable.
- **Eliteed Educación Continua en Facebook:** publicación pública que destaca estructuración de datos, análisis de variaciones e indicadores como componentes de un dashboard financiero. Fuente: `https://www.facebook.com/eliteed.educa/photos/-un-dashboard-financiero-no-solo-muestra-n%C3%BAmeros-revela-la-realidad-de-la-empres/1364286415730765/`.

## Conclusión comparativa
La referencia del usuario coincide con un patrón de dashboard de una sola pantalla: resumen superior, KPIs, visualizaciones temporales, distribución de cartera, movimientos y tabla detallada. Para FIBRAS.MX, los equivalentes útiles son: valor registrado, títulos, costo promedio, distribuciones, participación por ticker, evolución de aportaciones y detalle por emisora. Los datos deben aparecer como “referencia manual” hasta que exista una fuente oficial o importación revisada.

## Artículos proporcionados por el usuario

### Versión Beta Enero 2025
La entrada indica que el sistema requiere registrar usuario, objetivos y al menos una inversión. Enumera instituciones como GBM, Prestadero, Yo Te Presto, Banco Azteca, Seguros Monterrey, Cetes Directo, Briq, Afluenta, Doopla, Monific, Nu, Mercado Pago y Klar. También describe un movimiento inicial de estado de cuenta para comenzar el histórico.

Fuente: `https://portafoliosfinanciero.blogspot.com/2025/01/version-beta-enero-2025.html?m=1`.

### Dashboard Fibras/Acciones
La entrada del 8 de enero de 2025 describe un flujo específico para GBM: crear una inversión, cargar un archivo XLSX exportado desde GBM y cargar dividendos mediante un CSV con formato definido. Incluye capturas de las pantallas de carga de portafolio y dividendos, pero no muestra un enlace visible a GitHub, repositorio, licencia o archivo fuente.

Fuente: `https://portafoliosfinanciero.blogspot.com/2025/01/dashboard-fibrasacciones.html`.

## Hallazgo sobre código público
En el contenido visible de las dos entradas no aparece un enlace a GitHub ni una licencia de código abierto. El blog identifica el producto como “Portafolio Financiero”, pero la autoría técnica y el repositorio no quedan confirmados solo con estas páginas.

## Búsqueda en GitHub
Se consultó GitHub con `gh search repos` para “Portafolio Financiero” y “Dashboard Fibras”, además de una búsqueda de código por `portafoliosfinanciero.blogspot.com`. GitHub devolvió repositorios genéricos de portafolios financieros, pero ninguno fue identificable como el proyecto del blog. No hubo resultados para “Dashboard Fibras” ni para el dominio en la búsqueda de código. Los nombres genéricos no deben atribuirse al autor del dashboard sin evidencia adicional.
