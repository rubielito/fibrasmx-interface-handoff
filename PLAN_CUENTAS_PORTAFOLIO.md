# Plan de cuentas y portafolio persistente de FIBRAS.MX

## Objetivo

Convertir el portafolio actual, que funciona localmente en el navegador, en un espacio personal sincronizado y protegido por cuenta. La PWA queda disponible como primera etapa sin exigir registro; el login se añadirá después de habilitar backend y base de datos.

## Flujo propuesto

| Etapa | Experiencia | Datos |
|---|---|---|
| Visitante | Explora FIBRAs, fichas, videos y eBooks | Sin datos personales |
| Registro | Inicia sesión con el proveedor OAuth de la plataforma | Identidad mínima de usuario |
| Portafolio | Agrega posiciones y transacciones | Títulos, precios, fechas, comisiones, notas |
| Comprobantes | Sube una imagen o PDF y confirma manualmente | Archivo privado asociado al usuario |
| Seguimiento | Guarda FIBRAs seguidas y preferencias | Lista por usuario |

## Modelo de datos previsto

Se recomienda una tabla de perfiles vinculada al usuario autenticado, una tabla de movimientos con `userId`, `ticker`, tipo, títulos, precio, fecha, comisión, intermediario, folio y notas, y una tabla de archivos con referencia al almacenamiento privado. Las consultas y mutaciones deberán estar protegidas por procedimientos autenticados y aplicar siempre el filtro del usuario actual.

## Privacidad y seguridad

El frontend no debe manejar cookies ni claves de sesión manualmente. La autenticación deberá usar el flujo OAuth integrado; el servidor debe validar el usuario en cada procedimiento y los comprobantes no deben ser públicos. La migración desde `localStorage` debe ser opt-in y mostrar una revisión antes de copiar datos a la cuenta.

## Decisión pendiente

Para implementar el login real y la persistencia se necesita actualizar el proyecto estático a la plantilla full-stack con autenticación, base de datos, API y almacenamiento de archivos. Esa ampliación debe confirmarse antes de modificar la arquitectura del proyecto.

## Modo de prueba local implementado

La primera versión no utiliza servidor. El usuario crea un apodo local y un PIN numérico de seis dígitos mediante un teclado visual con números del 0 al 9. El PIN se compara mediante un resumen criptográfico local; el apodo activo se guarda en el navegador y cada usuario recibe claves separadas para su portafolio y su lista de FIBRAs seguidas. El acceso incluye cerrar sesión y permite cambiar de usuario en el mismo dispositivo.

Este mecanismo es únicamente de prueba: no ofrece recuperación de cuenta, no sincroniza entre dispositivos y puede perderse al borrar los datos del navegador, desinstalar la PWA o restablecer el teléfono. No debe utilizarse para proteger información financiera real. La siguiente evolución será sustituirlo por autenticación de servidor, sesiones seguras y almacenamiento privado.
