# NewPharma — Sobre nosotros

Propuesta editorial y técnica para reemplazar la página “Qué es NewPharma” por una experiencia de marca más sólida, clara y preparada para buscadores y asistentes de IA.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjeremias1001%2FPitch&project-name=newpharma-about&repository-name=newpharma-about)

## Qué incluye

- Página responsive en HTML, CSS y JavaScript sin dependencias.
- Metadatos SEO, canonical, Open Graph y Twitter Card.
- Datos estructurados JSON-LD: `Organization`, `OnlineStore`, `AboutPage`, `WebSite`, `BreadcrumbList` y `FAQPage`.
- Contenido semántico y respuestas directas para SEO y descubrimiento generativo.
- `robots.txt`, `sitemap.xml` y `llms.txt`.
- Versión portable como sección de Shopify en `shopify-section/newpharma-about.liquid`.
- Documentación competitiva y checklist de publicación.

## Vista local

```bash
python -m http.server 4173
```

Abre `http://localhost:4173`.

## Despliegue en Vercel

Pulsa el botón **Deploy with Vercel**. Framework preset: **Other**, build command vacío y output directory `.`.

## Integración en Shopify

1. En Shopify ve a **Tienda online → Temas** y duplica el tema publicado.
2. En la copia entra a **… → Editar código**.
3. En `Sections`, crea `newpharma-about.liquid`.
4. Copia el archivo incluido en `shopify-section/`.
5. Crea una plantilla de página nueva y añade la sección **NewPharma · Sobre nosotros**.
6. Asigna esa plantilla a la página actual.
7. Revisa móvil, enlaces, accesibilidad, analytics y datos estructurados antes de publicar.

## Antes de publicar

- Confirmar con NewPharma los textos sobre origen, sustentabilidad y características de producto.
- Validar el JSON-LD con Rich Results Test y Schema Markup Validator.
- Mantener una sola URL canónica: `https://www.newpharma.cl/pages/que-es-new-pharma`.
- No indexar la vista previa cuando exista la versión productiva.
- Medir consultas, impresiones, CTR y conversiones asistidas en Search Console.

## Nota

Una página técnicamente sólida mejora la capacidad de rastreo, comprensión y conversión, pero ningún desarrollo puede garantizar el primer lugar en Google. El ranking también depende de autoridad, enlaces, catálogo, reputación, rendimiento, contenido útil y competencia.
