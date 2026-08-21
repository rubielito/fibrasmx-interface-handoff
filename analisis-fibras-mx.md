# Análisis de FIBRAS.MX

## Interfaz pública observada

El sitio utiliza una interfaz oscura tipo dashboard con marca FIBRAS.MX en la esquina superior izquierda. La navegación incluye FIBRAs, Dashboard, Comparador, Calculadora y Portafolio. La pantalla principal contiene un buscador por nombre o ticker, filtros por sector, un bloque de mayores dividendos y una cuadrícula de tarjetas de FIBRAs.

La página pública muestra actualmente 17 instrumentos, entre ellos FUNO, FIBRAPL, FIBRAMQ, DANHOS, FSHOP, FINN, FIHO, FMTY, FPLUS, NEXT, FNOVA, FHIPO, EDUCA, STORAGE, FCFE, TERRA y FMX. Cada tarjeta puede mostrar ticker, sector, precio, variación diaria, ocupación, yield y una etiqueta de análisis como “MANTENER”. El pie declara que los datos provienen de BMV vía Yahoo Finance y que la información es solo educativa.

## Rutas detectadas

- `/`
- `/dashboard`
- `/comparador`
- `/calculadora`
- `/portafolio`

## Recursos y dependencias

El sitio se sirve como aplicación Next.js y carga scripts compilados desde `/_next/static/chunks/`. Usa logos bajo `/logos/` y conserva una clave de sesión en `localStorage` llamada `fibras_session_id`. No hay formularios HTML tradicionales visibles. Los precios, rendimientos, ocupación y análisis dependen de datos dinámicos; copiar solo el HTML no garantiza reproducir esos valores ni su actualización.

## Alcance recomendado

Se puede recrear la interfaz visual y las interacciones de búsqueda, filtros, navegación, tarjetas y calculadora educativa con datos demostrativos claramente etiquetados. Para reproducir datos de mercado en vivo haría falta definir una fuente autorizada, un backend/proxy y la lógica de actualización. También sería preferible usar logos propios o recursos para los que el usuario tenga derechos.

Fuente revisada: https://fibras-mx.abacusai.app/
