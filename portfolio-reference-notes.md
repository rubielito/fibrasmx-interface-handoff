# Notas de referencia — Dashboard de Portafolio de FIBRAs

## Alcance
La referencia muestra un dashboard financiero con navegación lateral, carga de archivos, resultados de importación y una vista de movimientos. Para FIBRAS.MX se adaptará únicamente a FIBRAs mexicanas y a uso educativo/manual.

## Patrones observados

| Patrón | Adaptación propuesta |
|---|---|
| Carga de comprobantes o archivos | Adjuntar una imagen o PDF como referencia de una compra/distribución, sin conectarse a GBM ni ejecutar operaciones |
| Extracción de datos desde captura | Preparar un formulario de revisión manual con campos sugeridos: FIBRA, movimiento, fecha, títulos, precio, monto y folio |
| Tabla de movimientos | Mostrar entradas con fecha, FIBRA, tipo de movimiento, títulos, monto de referencia, comprobante y estado |
| Portafolio personal | Resumen de FIBRAs agregadas, costo de referencia, títulos, distribución registrada y peso educativo |
| Edición/eliminación | Permitir corregir o retirar registros manualmente y pedir confirmación antes de eliminar |
| Folio único | Usar un identificador local por registro; no copiar la fórmula de Excel de la referencia |

## Restricciones
No se deben presentar datos simulados como transacciones reales, no se deben inventar comprobantes ni recomendar compras. Los valores deben etiquetarse como ingresados por el usuario, de referencia o pendientes de confirmar. El almacenamiento persistente de imágenes y datos requerirá convertir el proyecto estático en una aplicación con backend y autenticación.

## Proveedor externo
El enlace dashboardfinanciero.lat no respondió durante la consulta pública. La implementación se basará en las capturas proporcionadas y no copiará datos privados ni instrucciones de acceso.

## Primera implementación
La primera versión en `/fibras-mx/portafolio` permite seleccionar una FIBRA, registrar Compra/Distribución/Ajuste, fecha, títulos, precio de referencia, precio actual observado, monto, comisión o gastos, intermediario, estado de fuente, folio, notas y un comprobante de imagen o PDF. Los registros se pueden editar y eliminar con confirmación. Se guardan en `localStorage` del navegador para pruebas; las imágenes se mantienen como datos locales del navegador y no se suben a un servidor.

## Parámetros ampliados
Los nuevos campos ayudan a separar el costo ingresado por el usuario del valor observado: el precio de referencia y la comisión forman el costo educativo, mientras que el precio actual observado permite calcular una diferencia orientativa. El intermediario es un dato descriptivo, no una conexión con GBM u otra casa de bolsa. El estado de fuente distingue entre datos pendientes de confirmar y datos revisados contra un documento. También se ampliaron las opciones de FIBRA para incluir FHIPO, TERRA, FMX y otras emisoras presentes en las herramientas educativas del proyecto.

Para una versión multi-dispositivo o con respaldo real será necesario habilitar backend, autenticación y almacenamiento de archivos. La lectura automática de comprobantes queda como futura integración; por ahora el usuario confirma manualmente los datos antes de guardar.
