# Investigación: Portafolio Financiero y posible GitHub

## Conclusión

Los dos artículos proporcionados sí aportan información funcional más precisa sobre el dashboard de referencia, especialmente sobre el flujo de carga de portafolios y dividendos. Sin embargo, en el contenido visible no aparece un enlace a GitHub, licencia de código abierto, descarga del código fuente ni autoría técnica verificable. La búsqueda pública en GitHub tampoco identificó un repositorio que pudiera atribuirse con seguridad al proyecto.

## Hallazgos de los artículos

| Fuente | Información verificable | Aplicación posible a FIBRAs.MX |
|---|---|---|
| [Versión Beta Enero 2025][1] | Requiere usuario, objetivos, una inversión y movimientos iniciales de estado de cuenta. Enumera varias plataformas e instituciones. | Crear un perfil educativo, objetivos opcionales y un historial inicial claro, sin exigir plataformas ajenas al nicho de FIBRAs. |
| [Dashboard Fibras/Acciones][2] | Describe crear una inversión GBM, cargar un archivo XLSX exportado desde GBM y cargar dividendos mediante CSV. Incluye capturas de pantallas de carga. | Preparar importación de XLSX/CSV o comprobantes, con revisión manual, validación de columnas y registro de distribuciones por FIBRA. |

El segundo artículo es especialmente relevante: separa la carga del portafolio de la carga de dividendos. Esa separación puede convertirse en dos acciones del Portafolio de FIBRAS.MX: **Importar movimientos** y **Registrar distribuciones**, además de la captura manual actual.

## Búsqueda de repositorios

Se realizaron búsquedas públicas en GitHub con “Portafolio Financiero”, “Dashboard Fibras” y el dominio `portafoliosfinanciero.blogspot.com`. GitHub mostró repositorios genéricos de portafolios financieros, pero ninguno coincidió de forma verificable con el blog, sus títulos, su dominio o el dashboard de FIBRAs/acciones. La búsqueda de código por el dominio no devolvió resultados.

También se buscó en la web con los títulos exactos “Dashboard Fibras/Acciones” y “Portafolio Financiero: Versión Beta Enero 2025”; no apareció un repositorio oficial atribuible al proyecto. En el segundo artículo, la palabra “GitHub” tampoco aparece en el contenido visible.

## Recomendación para FIBRAS.MX

La arquitectura más útil para tu proyecto sería mantener el formulario oculto y ofrecer tres acciones independientes: **Agregar movimiento**, **Importar portafolio XLSX/CSV** y **Registrar distribución CSV**. Cada importación debería mostrar una vista previa de columnas, pedir confirmación del usuario y permitir corregir o eliminar filas antes de guardarlas. Las gráficas de barras, círculo y línea deben alimentarse únicamente con esos datos confirmados.

No recomiendo copiar código de repositorios genéricos encontrados en GitHub ni asumir que son del autor del dashboard. Si el autor publica un repositorio oficial o una licencia explícita en el futuro, se puede revisar su compatibilidad y atribución antes de reutilizar cualquier parte.

## Referencias

[1]: https://portafoliosfinanciero.blogspot.com/2025/01/version-beta-enero-2025.html?m=1 "Portafolio Financiero: Versión Beta Enero 2025"

[2]: https://portafoliosfinanciero.blogspot.com/2025/01/dashboard-fibrasacciones.html "Portafolio Financiero: Dashboard Fibras/Acciones"

[3]: https://github.com/search?q=Portafolio+Financiero&type=repositories "Búsqueda pública de repositorios en GitHub"
