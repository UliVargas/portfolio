# 🚀 Portfolio - Ulises Vargas Flores

Portfolio personal desarrollado con Astro, TailwindCSS y diseño neobrutalism. Optimizado para rendimiento, accesibilidad y SEO.

## ✨ Características

- 🎨 Diseño neobrutalism moderno con elementos blueprint
- 🌓 Modo oscuro con persistencia y detección automática
- ♿ Accesibilidad mejorada (aria-labels, navegación por teclado)
- 📱 Diseño responsive y mobile-first
- ⚡ Optimizado para rendimiento y SEO
- 🔍 Meta tags Open Graph y Twitter Cards
- 📊 Tipografía optimizada con font-display: swap

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web moderno
- [TailwindCSS v4](https://tailwindcss.com) - Estilos utility-first
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- Google Fonts (Space Grotesk & Work Sans)
- Material Symbols - Iconografía

## 📁 Estructura del Proyecto

\`\`\`text
/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── og-image.jpg          # TODO: Agregar imagen para Open Graph
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── Projects.astro
│   │   ├── ServiceCard.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .eslintrc.json
├── .prettierrc.json
├── astro.config.mjs
└── package.json
\`\`\`

## 🧞 Comandos

| Comando | Acción |
| :------------------------ | :----------------------------------------------- |
| \`pnpm install\` | Instala las dependencias |
| \`pnpm dev\` | Inicia servidor de desarrollo en \`localhost:4321\` |
| \`pnpm dev:host\` | Inicia servidor accesible en red local |
| \`pnpm build\` | Construye el sitio para producción |
| \`pnpm lint\` | Ejecuta ESLint para detectar errores |
| \`pnpm lint:fix\` | Corrige automáticamente errores de ESLint |
| \`pnpm format\` | Formatea el código con Prettier |

## 📈 Mejoras Implementadas

### Críticas ✅
- ✅ Eliminado código comentado
- ✅ Botón de tema oscuro con ícono dinámico
- ✅ Aria-labels en todos los enlaces interactivos
- ✅ Estilos inline movidos a clases CSS reutilizables
- ✅ Manejo robusto de errores en localStorage

### Importantes ✅
- ✅ Meta tags SEO completos (Open Graph + Twitter Cards)
- ✅ Optimización de carga de fuentes (display=swap)
- ✅ ESLint y Prettier configurados
- ✅ Enlaces funcionales con seguridad (rel="noopener")
- ✅ Consolidación de clases CSS repetidas

## 📝 Licencia

© 2026 Ulises Vargas Flores
