# Sistema propio de Portafolio FIBRAs.MX

## Alcance

El módulo será una herramienta educativa para registrar y estudiar FIBRAs inmobiliarias mexicanas. No ejecutará operaciones, no se conectará a GBM y no presentará recomendaciones personalizadas.

## Flujo principal

1. El usuario entra al resumen del portafolio.
2. Puede agregar un movimiento manual o importar un archivo XLSX/CSV.
3. La importación se muestra en una vista previa editable antes de guardarse.
4. Los registros confirmados alimentan tarjetas, barras, círculo de participación, línea de distribuciones y tabla de posiciones.
5. El usuario puede editar o eliminar cualquier movimiento.
6. Los comprobantes se adjuntan como referencia local y se revisan manualmente.

## Modelo mínimo

Cada movimiento contiene ticker de FIBRA, tipo de movimiento, fecha, títulos, precio de referencia, monto, folio, comprobante y notas. Los cálculos se derivan únicamente de estos datos.

## Importación

Se admitirán CSV y XLSX con columnas normalizables: `ticker`, `movement`, `date`, `shares`, `price`, `amount`, `folio`, `notes`. Antes de guardar se validarán ticker, fecha y tipo de movimiento; las filas incompletas quedarán marcadas para corrección.

## Límites

La primera versión usa almacenamiento local del navegador para pruebas. La persistencia multi-dispositivo, autenticación y almacenamiento seguro de comprobantes se reservarán para una futura ampliación full-stack.
