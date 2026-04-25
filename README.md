# DD Performance Landing Page

Proyecto de landing page profesional para la marca de basketball coaching de Diego Droguett en Chile. Construido con una estética editorial brutalista, masiva y técnica.

## 🚀 Tecnologías
- **Core**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4 (Configuración basada en CSS variables)
- **Animaciones**: Framer Motion
- **Iconografía**: Lucide React
- **Tipografía**: Google Fonts (Bebas Neue, Archivo, JetBrains Mono)

## 📁 Estructura del Proyecto
- `src/app`: Rutas y configuración global (Metadata, SEO, Globals CSS).
- `src/components/sections`: Secciones modulares de la landing page (Hero, Services, Methodology, etc).
- `src/components/ui`: Componentes de interfaz reutilizables (Logo, WhatsAppFloat).
- `src/lib`: Utilidades (clase `cn` para Tailwind).

## 🛠️ Instalación y Uso

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Correr en desarrollo:
   ```bash
   npm run dev
   ```
4. Generar build de producción:
   ```bash
   npm run build
   ```

## 📝 Assets Pendientes de Reemplazo
Para llevar este proyecto a producción real, se deben reemplazar los siguientes placeholders:
- **Imágenes**: Reemplazar los divs de placeholder en `Hero`, `AboutDiego` y `AuthorityBar` con fotos reales en blanco y negro (B/N).
- **Logos**: Cargar los logos reales de los clubes en `AuthorityBar`.
- **Links**: 
  - Actualizar número de WhatsApp en `WhatsAppFloat.tsx` y `Contact.tsx`.
  - Actualizar link de Calendly en `Contact.tsx`.
- **Video**: El video hero placeholder debe ser reemplazado por un archivo `.mp4` optimizado.
- **Testimonios**: Reemplazar el contenido de `Testimonials.tsx` con declaraciones reales de jugadores/entrenadores.

## 🔮 Próximos Pasos
1. **Captura de Leads**: Conectar el formulario de `LeadMagnet` y `Contact` a una API como Brevo o Mailchimp.
2. **Analítica**: Integrar Google Analytics 4 (GA4) y Meta Pixel.
3. **CMS**: Integrar Sanity.io o Contentful para que el coach pueda actualizar sus servicios y blog sin tocar código.

---
*Los detalles SON la diferencia.*
