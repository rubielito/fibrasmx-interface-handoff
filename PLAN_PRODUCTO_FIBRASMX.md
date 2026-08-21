# Plan de producto de FIBRAS.MX

## Visión

FIBRAS.MX será una plataforma educativa independiente para aprender a analizar FIBRAs mexicanas con fichas, videos, reportes, simuladores y un portafolio personal. La primera etapa debe priorizar claridad, confianza y aprendizaje; la monetización se incorporará después de validar qué contenidos consultan más los usuarios.

> El sitio debe informar y enseñar. No debe presentar una FIBRA como una orden de compra o venta ni prometer rendimientos.

## Ruta principal del visitante

| Etapa | Experiencia | Objetivo |
|---|---|---|
| 1. Descubrir | Inicio, catálogo visual y videos gratuitos | Que la persona entienda qué es una FIBRA y encuentre un tema de interés. |
| 2. Aprender | Ficha de una FIBRA, reportes y simulador educativo | Aumentar comprensión y tiempo de consulta sin dar instrucciones personalizadas. |
| 3. Registrar | Formulario de correo y cuenta opcional | Crear una relación con el visitante y permitir funciones personales. |
| 4. Volver | Portafolio guardado, historial y nuevos contenidos | Convertir una visita aislada en uso recurrente. |
| 5. Premium | Videos avanzados, reportes organizados y materiales especiales | Probar una futura membresía cuando exista suficiente contenido. |

## Publicidad de eBooks

El modal promocional del inicio se muestra una sola vez por sesión mediante `sessionStorage`. El mini catálogo permanece visible al final del inicio para que la promoción pueda consultarse sin interrumpir la navegación. Los eBooks pueden dividirse en gratuitos, de lectura complementaria y externos, incluyendo enlaces a Amazon cuando el libro esté publicado allí.

La publicidad debe distinguir claramente entre un recurso gratuito del sitio y un enlace comercial externo. Cada eBook debería tener portada, título, autor, descripción breve, tipo de acceso y destino: PDF del sitio, página propia, Amazon o YouTube relacionado.

## Captación de usuarios

La primera captura recomendada es un formulario breve de correo, con consentimiento explícito y una explicación del uso del correo. Puede ofrecerse un recurso gratuito, como una guía introductoria o un resumen de conceptos, a cambio del registro. El formulario no debe bloquear el acceso al catálogo básico ni exigir una cuenta antes de que el visitante entienda el valor del sitio.

## Acceso y portafolio

El portafolio debe conservar su modo de prueba local mientras se valida la experiencia. Antes de guardar información personal real, se debe actualizar el proyecto a una arquitectura con backend, autenticación y base de datos. El login protegerá movimientos, comprobantes, notas y configuraciones; la información no debe depender únicamente del navegador del usuario.

## Contenido gratuito y premium

| Contenido gratuito inicial | Contenido premium futuro |
|---|---|
| Fichas introductorias de FIBRAs | Reportes organizados y herramientas de lectura avanzada |
| Videos de conceptos básicos | Videos de análisis profundo o cursos por módulos |
| Simulador educativo | Comparadores ampliados y seguimiento histórico |
| Algunos reportes públicos | Biblioteca curada, alertas y materiales descargables |
| eBooks seleccionados | Colecciones, cursos y ediciones especiales |

El contenido premium debe comenzar únicamente cuando exista una biblioteca real y una diferencia comprensible frente al contenido gratuito. No conviene cobrar por una estructura vacía; primero hay que publicar, observar el uso y mejorar los materiales.

## Amazon y YouTube

Amazon puede funcionar como destino externo para los eBooks publicados. YouTube puede servir como canal de alcance y descubrimiento, mientras que FIBRAS.MX organiza el contexto educativo, las fichas y los enlaces relacionados. En una etapa posterior, los videos propios pueden alojarse en Vimeo o en otro proveedor y mostrarse dentro de la biblioteca con sus miniaturas y metadatos.

## Orden recomendado de construcción

1. Finalizar contenido gratuito y fichas de FIBRAs.
2. Añadir formulario de correo con consentimiento.
3. Crear login y persistencia segura para el portafolio.
4. Subir reportes públicos con año, periodo y tipo de documento.
5. Integrar enlaces de eBooks a PDF, Amazon y YouTube.
6. Medir consultas y definir qué módulos pueden convertirse en premium.
7. Incorporar pagos únicamente después de validar la propuesta de valor.

## Nota de formación

El estudio de Finanzas y Contabilidad en la EBC puede convertirse en una ventaja editorial si se documenta el aprendizaje con rigor: glosario, fuentes, fecha de actualización, supuestos del simulador y separación clara entre datos observados y explicaciones educativas. Cada reporte o ficha futura debe indicar su fuente y periodo para evitar presentar información desactualizada como si fuera vigente.
