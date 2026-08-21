# Referencia de seguimiento de FibrasMX

La vista `/fibras` muestra tarjetas de FIBRAs con un icono de estrella/corazón en la esquina superior derecha. En una FIBRA seguida, el control anuncia `Dejar de seguir`; en una no seguida anuncia `Seguir esta FIBRA`. El estado visual normal es transparente y el estado seleccionado usa el color de acento.

La vista de portafolio muestra una sección separada llamada `FIBRAs que sigues`, con las emisoras seguidas que aún no tienen posición. Cada fila muestra ticker, nombre, precio, variación, rendimiento y un control `+` para agregar una posición. El seguimiento es distinto de tener una posición: se puede seguir una FIBRA sin registrar una compra.

Para FIBRAS.MX se implementará el mismo concepto con estado local educativo compartido entre el catálogo principal y `/fibras-mx/portafolio`. El corazón no representará una recomendación ni una orden; solo una lista personal de seguimiento. Se usará confirmación visual breve y persistencia local mientras no exista login/backend.

## Verificación visual de la ampliación

La ficha propia `/fibras-mx/fibra/FIHO` conserva la navegación por pestañas y ahora muestra una sección `Ficha ampliada · referencia educativa` con métricas agrupadas, descripción, datos corporativos, actualización y fuente. En móvil la lectura es vertical y cada métrica ocupa una tarjeta compacta. La lista de seguimiento del portafolio mantiene sus acciones y está preparada para mostrar precio, variación y yield junto al ticker cuando existan FIBRAs seguidas en el almacenamiento local.
