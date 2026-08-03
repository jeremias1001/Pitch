# NewPharma — Rediseño de “¿Qué es NewPharma?”

Propuesta de evolución para la página publicada en:

`https://www.newpharma.cl/pages/que-es-new-pharma`

La tienda, el catálogo, el carrito y el checkout permanecen en Shopify. Este repositorio rediseña únicamente la página **Conócenos / ¿Qué es NewPharma?** como una experiencia editorial e interactiva integrada al e-commerce actual.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjeremias1001%2FPitch&project-name=newpharma-conocenos&repository-name=newpharma-conocenos)

## Dirección del rediseño

La página publicada es la fuente principal de contenido. El archivo de guía entregado por NewPharma se utilizó como blueprint para ampliar esa información mediante:

- Hero “Bienestar desde lo natural”.
- Misión y origen en Viña del Mar.
- Línea de tiempo 2020 → 2022–2023 → actualidad.
- Calidad, innovación y sostenibilidad como tres principios centrales.
- Sección educativa sobre criterios de productos de hongos funcionales.
- Comercio justo, calidad local y mapa de origen.
- Espacio preparado para reseñas verificadas mediante Judge.me.
- FAQ final, sin convertir toda la página en un acordeón.
- CTA hacia catálogo, compra por beneficios y tiendas.

## Archivos principales

- `index.html`: vista previa completa con una representación del header y footer del e-commerce.
- `styles.css`: sistema visual responsive.
- `script.js`: navegación por capítulos, timeline, tabs y carrusel.
- `shopify-section/newpharma-about.liquid`: sección Online Store 2.0 configurable.
- `shopify-section/page.newpharma-about.json`: plantilla de página Shopify.
- `robots.txt` y `llms.txt`: base de descubrimiento técnico para la vista previa.

## Vista local

```bash
python -m http.server 4173
```

Abre `http://localhost:4173`.

## Despliegue en Vercel

Usa el botón **Deploy with Vercel**. No requiere build command. Framework preset: `Other`; output directory: `.`.

La versión de Vercel sirve para revisión y aprobación. No debe competir en Google con la página productiva; se entrega con `noindex` hasta publicar la versión Shopify.

## Instalación en Shopify

1. Duplica el tema publicado.
2. En **Editar código**, crea `sections/newpharma-about.liquid`.
3. Copia el archivo incluido en `shopify-section/`.
4. Crea `templates/page.newpharma-about.json` y copia la plantilla incluida.
5. Asigna la plantilla a la página “¿Qué es NewPharma?”.
6. Carga imágenes reales desde el editor visual.
7. Completa los bloques de timeline, principios y FAQ.
8. Conecta el bloque de comunidad con Judge.me.
9. Valida móvil, accesibilidad, enlaces, JSON-LD y rendimiento antes de publicar.

## Contenido que debe confirmarse antes de producción

- Redacción exacta del hito actual y la evolución hacia hongos funcionales.
- Alcance por producto de las declaraciones “vegano” y “sin gluten”.
- Documentación sobre parte del hongo, extracción, concentraciones y análisis.
- Fotografías reales del equipo, origen, producción y productos.
- Reseñas reales y verificadas.
- Vigencia de logos, reconocimientos y participación en programas.

## SEO y GEO

El prototipo incluye una estructura semántica, una sola etiqueta `h1`, metadata, canonical, Open Graph y JSON-LD de organización, AboutPage, breadcrumbs y FAQ. Ninguna implementación garantiza el primer lugar en Google; el posicionamiento también depende de autoridad, enlaces, contenido verificable, reputación, rendimiento y competencia.
