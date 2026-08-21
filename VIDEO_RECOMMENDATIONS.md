# Recomendaciones de videos en FIBRAS.MX

## Alcance actual

La biblioteca utiliza una simulación local inspirada en `recommendation-algorithm.js`. Al tocar un video, el catálogo excluye el video actual y calcula coincidencias con señales educativas: mismo creador o serie, categorías inferidas por tema, etiquetas derivadas del título, popularidad visible y recencia cuando exista fecha.

El resultado se presenta en bloques: primero otros videos del mismo creador o serie y después una lista de videos relacionados para continuar aprendiendo. El sistema no envía historial a un servidor, no perfila usuarios reales y no debe interpretarse como una recomendación financiera.

## Próxima integración

Cuando exista login y backend, se podrán añadir señales consentidas como videos vistos, guardados, tiempo de reproducción y temas preferidos. Esas señales deberán almacenarse con consentimiento, permitir borrar el historial y conservar la separación entre contenido educativo y recomendaciones de compra o venta.

## Fuente de implementación

La lógica se adaptó desde el archivo proporcionado por el usuario: `recommendation-algorithm.js`, conservando la prioridad por creador, categorías, etiquetas, recencia, popularidad, exclusión del video actual y bloques agrupados. Los estilos se adaptaron al sistema editorial oscuro de FIBRAS.MX desde `recommendation-algorithm.css`.
