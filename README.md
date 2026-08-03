# NewPharma — página “¿Qué es NewPharma?”

Rediseño de la página interna de marca de NewPharma. Esta versión **respeta la estructura del HTML guía original** y mejora su presentación sin transformarla en otra landing.

## Estructura preservada

1. Hero: **Bienestar desde lo natural**
2. Una misión de bienestar
3. Historia: 2020 → 2022–2023 → hoy
4. Tres pilares de NewPharma
5. La diferencia NewPharma
6. Comercio justo y calidad local
7. Testimonios conectables con Judge.me

No se añadieron FAQ, manifiestos extensos, capítulos comerciales ni bloques de formatos fuera de la historia. Cada idea aparece una sola vez.

## Vista previa en Vercel

La vista previa usa `noindex,nofollow` y canonical hacia la URL productiva para evitar competir con Shopify:

`https://www.newpharma.cl/pages/que-es-new-pharma`

## Integración en Shopify

- `shopify-section/newpharma-about.liquid`: sección Online Store 2.0.
- `shopify-section/page.newpharma-about.json`: plantilla de página.
- Las reseñas deben conectarse a Judge.me en producción.
- Los textos técnicos sobre cuerpo fructífero, extracción y composición deben confirmarse por producto antes de publicar.
