# Análisis tecnológico público de FibrasMX

## Estado de BuiltWith

La consulta pública de `https://builtwith.com/fibrasmx.com` cargó un CAPTCHA de selección de imágenes antes de mostrar el perfil tecnológico. No se resolvió ni se automatizó el CAPTCHA. Por lo tanto, cualquier tecnología atribuida a BuiltWith deberá confirmarse posteriormente con intervención manual del usuario o con una fuente pública alternativa.

## Hallazgos iniciales

Las páginas públicas de FibrasMX muestran una aplicación web interactiva con navegación de catálogo, fichas dinámicas, comparador, calendario, noticias, aprendizaje, portafolio, controles de seguimiento, pestañas de métricas y contenido que parece depender de datos estructurados. El proyecto propio ya cuenta con catálogo, fichas, portafolio local, seguimiento, videos y eBooks; las brechas principales son autenticación, persistencia remota, datos de mercado con actualización verificable, gráficas históricas, reportes documentales y separación de contenido gratuito/premium.

No se debe afirmar que FibrasMX usa un framework, proveedor de hosting, base de datos o servicio de analítica específico sin confirmarlo mediante BuiltWith, cabeceras públicas, HTML descargado o documentación. La implementación propia se basará en capacidades y patrones observables, no en copiar código o infraestructura privada.

## Tecnologías públicas confirmadas por cabeceras y HTML

La inspección pasiva de `https://fibrasmx.com/` confirmó señales de **Next.js** mediante rutas `/_next/static`, variables `__next_f`, `x-matched-path`, `x-nextjs-prerender` y la variación `rsc`. El encabezado `server: Vercel` y `x-vercel-cache` indican despliegue en Vercel. El HTML declara una conexión/preconexión a un proyecto de **Supabase**, además de referencias públicas a **TradingView**, **Mapbox**, Google Analytics/Google Ads, Beehiiv y fuentes de Google. También expone manifest, canonical, alternate hreflang, favicon y apple-touch-icon.

BuiltWith no mostró el reporte porque presentó un CAPTCHA; por eso estas conclusiones provienen de cabeceras y HTML públicos, no de una resolución automatizada del CAPTCHA.

## Comparación y decisiones

FIBRAS.MX ya tiene React/Vite, rutas, datos locales, seguimiento, fichas, portafolio, eBooks y videos. Se implementarán primero mejoras de bajo riesgo: metadatos SEO y JSON-LD de plataforma educativa, manifest y robots, etiquetas visibles de fuente/fecha en datos educativos y documentación de una futura capa de autenticación/persistencia. No se copiarán código, claves de Supabase, datos privados, anuncios ni integraciones de TradingView/Mapbox sin una decisión específica y una fuente autorizada.

La autenticación, Supabase o una base de datos propia requieren una etapa full-stack y revisión de privacidad. Los datos de mercado en tiempo real requieren una fuente licenciada o API autorizada; no se deben simular con cifras inventadas.

## Resultados adicionales encontrados en BuiltWith

El contenido compartido por el usuario amplía la huella pública con señales de Beehiiv, Supabase, PerimeterX, CrUX, Common Crawl, GateKeeper Consent, sitelinks search box, Next.js, Organization Schema, ContactPoint Schema, compatibilidad móvil de Apple, Mapbox, Service Worker, React, Intersection Observer, WebAuthn, Ezoic, Google Adsense, ads.txt, HSTS, Let's Encrypt, Vercel, ImprovMX, SPF y Google Webmaster.

Estos hallazgos deben interpretarse como detecciones públicas de BuiltWith, no como prueba de que cada servicio sea indispensable para replicar la experiencia. Para FIBRAS.MX son especialmente útiles cuatro patrones: **SEO estructurado** mediante Organization/ContactPoint y sitelinks; **PWA** mediante manifest, iconos y service worker; **captación** mediante correo y consentimiento; y **autenticación segura** mediante una futura solución de login/WebAuthn. No se habilitarán anuncios, Ezoic, PerimeterX, Mapbox o WebAuthn sin una necesidad concreta, configuración de privacidad y pruebas de seguridad.
