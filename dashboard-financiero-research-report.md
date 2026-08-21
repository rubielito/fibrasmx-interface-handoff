# Investigación pública: dashboardfinanciero.lat

## Resultado ejecutivo

El sitio `dashboardfinanciero.lat` no pudo verificarse directamente durante la investigación: tanto HTTPS como HTTP cerraron la conexión y no devolvieron contenido extraíble. Tampoco apareció una página oficial claramente atribuible al dominio en las búsquedas públicas realizadas, ni una cuenta de Facebook identificable como propietaria del producto. Por ello, no es responsable afirmar que el sitio expone una API, qué tecnología utiliza o cómo procesa comprobantes.

Las capturas proporcionadas sí permiten identificar el patrón funcional: un resumen de portafolio en una sola pantalla, tarjetas de indicadores, gráficas de evolución, distribución, acumulado, últimos movimientos y tabla detallada por instrumento.

## Patrones observables y adaptación a FIBRAs.MX

| Patrón de la referencia | Adaptación educativa para FIBRAs mexicanas |
|---|---|
| Tarjeta de bienvenida y valor total | Valor registrado manualmente y nota de seguimiento, sin prometer rendimiento |
| Indicadores de invertido y rendimiento | Importe de compras, títulos registrados y distribuciones capturadas |
| Gráfica de barras | Importe de referencia por ticker de FIBRA |
| Círculo de cartera | Participación proporcional por FIBRA, calculada solo con registros del usuario |
| Línea acumulada | Distribuciones acumuladas por fecha, sin rellenar datos faltantes |
| Últimos movimientos | Compra, distribución o ajuste con fecha, monto y comprobante |
| Tabla de emisoras | Ticker, títulos, costo promedio, importe y valor de referencia |

Estos patrones coinciden con recomendaciones generales para dashboards: concentrar indicadores relevantes en una sola pantalla, comparar periodos y permitir desgloses que expliquen la historia de los datos [1]. Un producto público comparable de seguimiento financiero también agrupa patrimonio, rendimiento, distribución, métricas de cartera, movimientos y metas en una navegación unificada [2]. Una publicación pública de educación financiera destaca la importancia de estructurar datos, analizar variaciones y construir indicadores [3].

## Recomendación para el proyecto

La implementación actual de FIBRAS.MX debe conservar el alcance manual y educativo. Los gráficos deben alimentarse exclusivamente de compras, distribuciones y ajustes que el usuario capture. Mientras el portafolio esté vacío, es correcto mostrar estados vacíos en lugar de inventar barras, porcentajes, dividendos o rendimientos. La lectura automática de comprobantes puede prepararse posteriormente, pero siempre debe requerir revisión y confirmación manual.

No encontré evidencia pública suficiente para integrar datos directamente desde `dashboardfinanciero.lat`, Facebook o GBM. Cualquier integración futura debe partir de una fuente autorizada, autenticación explícita y almacenamiento seguro; no debe depender de scraping de una página que actualmente no responde.

## Referencias

[1]: https://www.datdata.com/finanzas-dashboard "Datdata — Ejemplo de Dashboard de Finanzas"

[2]: https://trackfolio.pages.dev/ "TrackFolio — Dashboard financiero personal"

[3]: https://www.facebook.com/eliteed.educa/photos/-un-dashboard-financiero-no-solo-muestra-n%C3%BAmeros-revela-la-realidad-de-la-empres/1364286415730765/ "Eliteed Educación Continua — publicación pública sobre dashboards financieros"

[4]: https://dashboardfinanciero.lat/ "dashboardfinanciero.lat — acceso directo no disponible durante la investigación"
