# Rutas revisadas: Comparador y Calculadora

## Comparador

La ruta `/comparador` mantiene la navegación oscura de FIBRAS.MX, marca la pestaña Comparador en rojo y muestra el título “Comparador”. La instrucción principal es seleccionar hasta tres FIBRAs para comparar métricas lado a lado. Incluye un botón “Añadir FIBRA” y un estado vacío con el mensaje “Selecciona FIBRAs para comenzar a comparar”.

## Calculadora

La ruta `/calculadora` muestra el título “Calculadora de Inversión” y la explicación “Calcula los dividendos proyectados de tu inversión en FIBRAs”. Incluye un selector de FIBRA con dividendo por certificado, campo numérico para monto a invertir y resultados proyectados: certificados, yield anual, dividendo anual, dividendo mensual y una proyección de cinco años con reinversión.

La versión independiente debe conservar esta arquitectura, pero con textos educativos, un aviso visible de que las cifras son hipotéticas y sin presentar resultados como recomendaciones financieras. El modelo base puede calcular certificados enteros, dividendo anual, mensual y una proyección simple a cinco años usando una tasa educativa seleccionada.

Fuente: https://fibras-mx.abacusai.app/comparador
Fuente: https://fibras-mx.abacusai.app/calculadora

## Validación en vista previa

La vista `/fibras-mx/calculadora` carga correctamente y al cambiar de FUNO a FIBRAPL actualiza el dividendo por certificado, certificados, yield, dividendos y proyección de cinco años. Esto confirma que el cálculo es interactivo y que los resultados educativos se recalculan sin recargar la página.

## Validación del Comparador

La vista `/fibras-mx/comparador` carga con estado vacío, permite seleccionar una FIBRA desde el selector y, al pulsar “Añadir FIBRA”, crea una columna con ticker, sector, precio observado, yield orientativo, ocupación y la etiqueta “Referencia educativa”. También aparece el control “Limpiar”.
