# Hallazgos de FibrasMX con sesión activa

Fecha de revisión: 21 de agosto de 2026.

La conexión del navegador personal está activa y la cuenta muestra el correo `miyot89704@gmail.com`; no se modificaron datos ni se inició ninguna operación. La cuenta presenta una prueba gratuita con 14 días restantes y un botón de planes.

La vista autenticada de `/portafolio` tiene las pestañas Posiciones, Calendario, Mapa y Transacciones. El resumen visible contiene Valor total, Ganancia/Pérdida, Ingreso anual estimado y Yield del portafolio. También existe un control Más métricas.

En Posiciones aparecen las columnas FIBRA, Títulos, Precio promedio, Precio actual, Valor, Peso, YOC, G/L y Calificación. El estado vacío ofrece `+ Agregar posición`, además de acciones Compra y Venta. La cuenta muestra una lista de FIBRAs seguidas que todavía no están en el portafolio, con botones para agregarlas; entre ellas aparecen FHIPO, FUNO, STORAGE, FMTY y FIHO.

La interacción de `+ Agregar posición` no abrió un formulario visible durante esta revisión, por lo que no se deben inferir campos privados o no renderizados. Los patrones confirmados que conviene adaptar a FIBRAS.MX son: posición separada de transacción, compra/venta como acciones rápidas, calendario de ingresos, transacciones, precio promedio, precio actual, peso, YOC, ganancia/pérdida, calificación educativa y lista de FIBRAs seguidas.

La adaptación propia de FIBRAS.MX ya incorpora varios parámetros adicionales: precio actual observado, comisión/gastos, intermediario, estado de fuente, comprobante y notas. Debe permanecer manual, educativa y sin conexión con GBM ni ejecución de órdenes hasta implementar backend y autenticación propia.

## Formulario exacto observado

La pestaña autenticada `Agregar posición` se abre como un cuadro modal y contiene únicamente cuatro datos principales: un selector de `FIBRA`, `Títulos (CBFIs)` con ejemplo 100, `Precio promedio de compra (MXN)` con ejemplo 25.50 y `Notas (opcional)` con ejemplo `compra en GBM`. Sus acciones son `Cancelar` y `Agregar`. El selector muestra emisoras con ticker y número de CBFIs, como DANHOS13, EDUCA18, FCFE18, FHIPO14, FIBRAMQ12, FIBRAPL14, FIHO12, FINN13, FMTY14, FMX23, FNOVA17, FPLUS16, FSHOP13, FUNO11, NEXT25 y STORAGE18.

Este flujo confirma que FIBRAS.MX debe ofrecer primero un alta rápida de posición. Los campos avanzados pueden quedar en una sección opcional o en un segundo paso para no saturar el registro inicial: precio actual observado, comisión, intermediario, estado de fuente, fecha, comprobante y notas ampliadas.
