# Plan de mejora de la portada de Dividendos / FIBRAS.MX

## Alcance
Crear una portada propia inspirada en la estructura pública de masdividendos.mx, sin reutilizar su código, textos propietarios o imágenes. La página debe dirigir a la plataforma educativa existente y mejorar claridad, conversión, navegación y confianza.

## Diseño
- **Movimiento:** editorial financiero contemporáneo, con contraste de revista y precisión de dashboard.
- **Principios:** claridad primero, datos como evidencia, espacios amplios, llamadas a la acción visibles.
- **Color:** marfil cálido para sensación de lectura, carbón para autoridad y menta propia para representar crecimiento sin copiar la identidad del referente.
- **Layout:** hero asimétrico con tarjeta de calendario, seguido por prueba social, productos, calendario y método.
- **Firma visual:** signo `+` de menta, tarjetas con bordes suaves y una mini visualización de calendario.
- **Interacción:** navegación anclada, menú móvil, enlaces a plataforma, formulario de suscripción local con estado de éxito.
- **Animación:** sutiles elevaciones hover; sin movimiento imprescindible para comprender el contenido.
- **Tipografía:** Fraunces para titulares editoriales y Karla para interfaz y datos.
- **Esencia:** educación práctica para comprender dividendos y FIBRAs mexicanas antes de decidir. Personalidad: clara, sobria, útil.
- **Voz:** directa, didáctica y responsable. Ejemplos: “Invierte con más contexto.” / “Aprende antes de decidir.”
- **Marca:** wordmark `+dividendos.` con signo de suma menta; el catálogo existente conserva su identidad FIBRAS.MX.

## Estructura
- `client/src/pages/DividendosLanding.tsx`: portada, productos, calendario de muestra, método y suscripción.
- `client/src/App.tsx`: ruta `/` hacia la portada; rutas de plataforma intactas.
- `client/src/index.css`: sistema visual responsive de la nueva portada.
