# FibrasmX — Código fuente compartible

Este paquete contiene la reconstrucción educativa de FibrasmX. Está hecho con **React, TypeScript, HTML, CSS y JavaScript** usando Vite. No utiliza WordPress, PHP, base de datos ni backend.

## Requisitos

Se necesita instalar **Node.js 18 o superior** y npm o pnpm. Puedes comprobar la instalación con:

```bash
node --version
npm --version
```

## Instalación

Descomprime el ZIP, abre una terminal dentro de la carpeta del proyecto y ejecuta:

```bash
npm install
```

También puedes usar pnpm:

```bash
pnpm install
```

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Después abre en el navegador la dirección que muestre Vite, normalmente:

```text
http://localhost:5173
```

## Crear la versión de producción

```bash
npm run build
```

Para previsualizar la compilación:

```bash
npm run preview
```

## Archivos principales

| Archivo | Función |
|---|---|
| `client/src/pages/Home.tsx` | Contenido, secciones e interacciones de la página |
| `client/src/index.css` | Diseño visual, responsive, tipografías y animaciones |
| `client/src/App.tsx` | Entrada principal de la aplicación |
| `client/index.html` | Documento HTML base y metadatos |
| `package.json` | Dependencias y comandos del proyecto |

Los enlaces educativos a **https://fibras-mx.abacusai.app/** están configurados en el hero, catálogo, pasos 3 y 4, y sección final.

> La página tiene fines educativos e informativos. El contenido no constituye asesoría financiera ni una recomendación de inversión.

## Nota sobre imágenes

Las imágenes del hero y de la sección de proceso utilizan recursos alojados en la infraestructura del proyecto. Si mueves el proyecto a otro hosting, conserva esas URLs o reemplázalas por imágenes locales dentro del flujo de assets de tu nuevo hosting.
