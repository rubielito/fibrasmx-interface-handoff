# FibrasmX

Plataforma educativa sobre FIBRAs inmobiliarias mexicanas. Este repositorio contiene la interfaz y la lógica de prototipo creada para validar la experiencia de aprendizaje antes de incorporar persistencia remota, autenticación segura, fuentes de datos licenciadas y servicios de video reales.

## Propósito del proyecto

FibrasmX ayuda a estudiar FIBRAs mediante fichas por empresa, videos educativos, reportes, herramientas de comparación y un portafolio manual. El producto debe conservar una separación clara entre **educación financiera** y **asesoría o recomendación de inversión**.

La interfaz fue diseñada por el propietario del proyecto. El ingeniero que continúe el trabajo deberá dar vida a la arquitectura, persistencia, seguridad, datos y servicios externos sin cambiar la intención educativa central.

## Stack actual

El proyecto utiliza React 19, TypeScript, Vite, Tailwind CSS 4, Wouter y almacenamiento local para el prototipo. La aplicación es actualmente frontend-first; el portafolio y el acceso local son temporales y no sustituyen una cuenta segura con servidor.

## Funciones existentes

La experiencia incluye catálogo de FIBRAs, fichas individuales con pestañas de resumen, pagos, valuación, ocupación, videos y reportes, biblioteca de videos simulada, recomendaciones por tema y creador, simulador educativo, enlaces a calculadora y comparador, recursos y eBooks, PWA básica, login local temporal con apodo y PIN de seis dígitos, seguimiento local de FIBRAs y portafolio manual.

En las fichas individuales, la pestaña **Videos** permite seleccionar una tarjeta y muestra debajo recomendaciones relacionadas en un carrusel horizontal compacto. La recomendación no debe presentarse como señal de compra o venta.

## Instalación local

```bash
pnpm install
pnpm dev
```

Para validar tipos:

```bash
pnpm exec tsc --noEmit
```

## Estructura principal

```text
client/src/pages/PreviewEditorial.tsx  # Inicio editorial y biblioteca de videos
client/src/pages/FibraDetail.tsx       # Fichas individuales y pestaña Videos
client/src/pages/FibrasOverview.tsx    # Catálogo, dashboard y portafolio
client/src/lib/videoRecommendations.ts # Algoritmo local de recomendaciones
client/src/contexts/LocalAuthContext.tsx # Sesión local temporal
client/src/index.css                   # Tema editorial y estilos responsive
client/public/                         # Solo archivos públicos pequeños
server/                                # Compatibilidad del template actual
shared/                                # Tipos y constantes compartidas
```

## Recursos visuales incluidos

Los logotipos recortados de las FIBRAs y la marca visual de FibrasmX se encuentran en `docs/assets/`. Se incluyen como material de continuidad para el ingeniero. Las marcas y logotipos pertenecen a sus respectivos titulares; deben utilizarse únicamente para identificar las FIBRAs y no deben sugerir afiliación, patrocinio o recomendación.

Parte de la interfaz actual todavía referencia recursos alojados en el entorno de publicación mediante rutas `/manus-storage/` y algunas imágenes remotas. Antes de desplegar fuera de ese entorno, el ingeniero debe migrar esos recursos a un almacenamiento controlado y actualizar las referencias.

## Siguientes etapas recomendadas

La siguiente etapa técnica debería ser una auditoría de arquitectura, seguida por un backend con autenticación segura, base de datos y almacenamiento privado para portafolios y comprobantes. Después conviene integrar un proveedor de video, un sistema de fuentes y reportes con fechas de actualización, y pruebas automatizadas para cálculos y recomendaciones.

No se debe conectar GBM, ejecutar operaciones financieras ni presentar datos de mercado como tiempo real sin revisar primero seguridad, permisos, licencias, fuentes y obligaciones legales aplicables.

## Variables de entorno

No se incluyen secretos en este repositorio. Si el backend requiere variables, deben documentarse únicamente con nombres en `.env.example`; los valores reales deben configurarse fuera de GitHub.

## Nota de propiedad y colaboración

Este repositorio es una copia de continuidad para el ingeniero. El diseño, la organización editorial y la visión funcional pertenecen al propietario del proyecto. Los cambios estructurales deberán preservar la navegación móvil, el enfoque educativo, la advertencia de no asesoría financiera y la trazabilidad de fuentes.
