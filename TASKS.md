# Ncéntrika — seguimiento de optimización

Objetivo: menos peso y más consistencia **sin cambiar la identidad visual** (colores, tipografía, layout de marca).

Referencia: diagnóstico del sitio (CRA + CSS en `public/` + media pesada).

---

## Estado

| Fase | Nombre | Esfuerzo | Estado |
|------|--------|----------|--------|
| 0 | Quick wins (peso) | S | ✅ Cerrada (build 4.13 MB; antes ~21.7 MB) |
| 1 | Consistencia (tokens / CSS) | M | ✅ Cerrada (tokens + Bootstrap out + breakpoints 1000) |
| 2 | Tailwind (opcional) | L | ⬜ No iniciar aún (decisión en parking lot) |

**Regla:** no empezar Fase 2 hasta cerrar Fase 0 y lo esencial de Fase 1.

---

## Fase 0 — Quick wins (peso / performance)

### 0.1 Hero video (P0)
- [x] Unificar a **un solo** `<video>` en `src/components/Home.js` (quitar doble mount desktop/mobile)
- [x] Añadir `poster` (WebP ligero) con el mismo look del frame actual
- [x] Reencode / comprimir `public/resources/videos/homeVideo.mp4` (meta: &lt; ~800 KB–1 MB si es viable)
- [x] Valorar carga diferida (IntersectionObserver / play tras visible) sin romper autoplay muted
- [x] Verificar LCP cualitativo en mobile y desktop (hero: poster WebP + 1× video comprimido; logo header sin lazy)

### 0.2 Assets no usados / sobredimensionados (P0)
- [x] **No** incluir en deploy los `IMG_*.PNG` / `IMG_2219.JPEG` si no están referenciados en código
- [ ] Si se van a usar: convertir a WebP, redimensionar, &lt; ~150–200 KB c/u, y actualizar componentes
- [x] Comprimir `3.webp`, `6.webp`, `doctora.webp`
- [x] Confirmar y eliminar `acordion1.png` si solo se usa `acordion1.webp`
- [x] Añadir `loading="lazy"` + `width`/`height` (o aspect-ratio) en imágenes below-the-fold

### 0.3 CSS / deps muertos (P0–P1)
- [x] Quitar Font Awesome de `public/index.html` (`font-awesome.min.css`)
- [x] Eliminar `react-scroll-parallax` de `package.json` (no se usa)
- [x] Limpiar paquetes `workbox-*` no importados en `src/service-worker.js`
- [x] Convertir OpenSans TTF → **woff2** y actualizar `@font-face` en `public/css/common.css`
- [x] Borrar / no linkear dead code: `src/App.css` (boilerplate), revisar `src/components/navigations.js`
- [x] Quitar import unused de `Facilities` en `src/components/Innovation.js`

### 0.4 Checklist de cierre Fase 0
- [x] `npm run build` y anotar tamaño total de `build/` (antes ~21.7 MB → **4.13 MB**)
- [x] Confirmar que el look de home / tipografía / colores no cambió a simple vista (tokens/vars; mismos hex)
- [x] Deploy de prueba o preview local (`npm start` + `serve -s build` en :3456)

**Notas / métricas**

| Fecha | build/ MB | Notas |
|-------|-----------|-------|
| 2026-08-12 | — | Hero MP4: 3523 KB → 379 KB; poster WebP 16 KB; un solo `<video>` |
| 2026-08-12 | — | Assets: 3/6/doctora webp −1.45 MB; acordion1.png −334 KB; IMG_* → `assets-raw/` (fuera de build) |
| 2026-08-12 | 4.25 | Prompt 3: FA −30 KB; OpenSans TTF→woff2 (−142 KB); deps muertas; build OK |
| 2026-08-12 | 4.13 | Prompt 5: Bootstrap out (−153 KB CSS); lazy chunks; Facilities 2 slides; Contact→WA |
| 2026-08-12 | 4.13 | Cierre 0.4 + 1.4: breakpoints nav=1000; CSS duplicado (stars, container mobile) → common.css |

---

## Fase 1 — Consistencia (sin rediseño)

### 1.1 Tokens de diseño
- [x] Crear variables CSS de marca en `common.css` (o `tokens.css`), p. ej.:
  - `--color-mint: #92D2C7`
  - `--color-cta: #FABE15`
  - `--color-pink: #EAA9CB`
  - `--color-blue: #99BFE5`
  - `--color-coral: #F98F8A`
  - `--color-cream: #FFF8F0`
  - `--color-text: #3B3937`
  - spacing / title size / breakpoints (ideal: 768 y 1024)
- [x] Reemplazar hex sueltos por variables **sin cambiar valores**
- [x] Unificar `.section-title` (hoy ~48px en casi todo; Testimonials a 30px — decidir y documentar)
- [x] Unificar variantes de botón via `Button.js` + clases en `common.css` (mismos colores actuales)
- [x] Revisar `.section-title { margin-top: 140px !important }` y `section { font-size: 3rem }` en `index.css`

### 1.2 Bootstrap → grid mínimo
- [x] Inventariar usos reales: `container`, `row`, `col-md-auto`, `table`, `justify-content-*`
- [x] Sustituir por CSS propio equivalente (mismo layout) en `common.css`
- [x] Quitar `bootstrap.min.css` de `index.html` (archivo eliminado, ~153 KB)
- [x] Quitar resto púrpura / estilos huérfanos (p. ej. `#6a0dad` en `testimonials.css`)

### 1.3 Estructura de producto (opcional pero recomendado)
- [x] Facilities: quitar slides duplicados (solo 2 imágenes únicas)
- [x] AboutDetails: no repetir la misma foto 4× (CSS `background-image` una URL)
- [ ] Valorar fusionar Contact + TableContactInfo (horarios/mapa) en una sección — **diferido** (riesgo layout; ver parking lot)
- [x] `React.lazy` para Testimonials / Facilities / Appointment
- [x] Formulario Contact: Enviar → WhatsApp prellenado (mismo número que CTAs)

### 1.4 Checklist de cierre Fase 1
- [x] Misma identidad visual en desktop y mobile (sin rediseño; tokens + layouts de sección)
- [x] Breakpoints coherentes (nav JS + CSS alineados a **1000px**; `NAV_BREAKPOINT` en Header.js)
- [x] Menos CSS duplicado entre `public/css/*.css` (viñetas estrella + `.container` mobile en `common.css`; home usa `var(--font-*)`)

---

## Fase 2 — Tailwind (opcional, solo si hace falta)

**No iniciar** hasta cerrar Fase 0 + tokens/Bootstrap de Fase 1.

- [ ] Integrar Tailwind en CRA **sin eject** (CRACO o equivalente) + PostCSS
- [ ] Mapear tokens de marca en `tailwind.config.js` (mismos colores)
- [ ] Migrar **una sección por PR** (ej. Header → Home → Services…)
- [ ] Al migrar una sección: borrar su CSS en `public/css/` y su `<link>` en `index.html`
- [ ] Al final: cero Bootstrap, cero doble sistema CSS

**Qué no hacer en Fase 2**
- Tailwind encima de Bootstrap + 14 CSS globales
- Rediseño genérico / cambiar paleta de marca

---

## Issues ejecutables (orden sugerido)

Usar como tickets concretos; marcar al completar. Prompts listos abajo (copiar/pegar en el agente).

1. [x] **Hero video** → [Prompt 1](#prompt-1--hero-video)
2. [x] **Higiene assets** → [Prompt 2](#prompt-2--higiene-de-assets)
3. [x] **Dead weight CSS/deps** → [Prompt 3](#prompt-3--dead-weight-css--deps)
4. [x] **Design tokens** → [Prompt 4](#prompt-4--design-tokens)
5. [x] **Bootstrap out + lazy** → [Prompt 5](#prompt-5--bootstrap-out--lazy-secciones)

---

## Prompts listos para ejecutar

Copiar el bloque completo de un prompt por chat. Ejecutar en orden 1 → 5. Al terminar, marcar el issue en este archivo y anotar métricas si aplica.

### Prompt 1 — Hero video

```
Repo: Ncéntrika (CRA). Objetivo: reducir peso del hero SIN cambiar el look.

Contexto:
- `src/components/Home.js` monta el mismo `resources/videos/homeVideo.mp4` DOS veces (clases `.responsive` y `.destock`).
- Video actual ~3.5 MB en `public/resources/videos/homeVideo.mp4`.
- Estilos en `public/css/home.css`. Breakpoint mobile ~1000px.

Tareas:
1. Dejar UN solo `<video>` y controlar desktop/mobile solo con CSS (no dos elementos).
2. Añadir `poster` WebP ligero (mismo aspecto visual del frame actual). Si generas el poster, guárdalo en `public/resources/images/` y referéncialo.
3. Comprimir/reencode el MP4 si hay herramienta disponible (ffmpeg); meta ~800KB–1MB sin que se vea “roto”. Si no hay ffmpeg, deja el código listo y documenta el comando exacto en un comentario o en TASKS.md.
4. Mantener autoplay muted loop; valorar carga diferida solo si no rompe el comportamiento actual.
5. No cambiar tipografía, colores, slogan ni CTAs.

Al final: resume archivos tocados, tamaño video antes/después, y marca en TASKS.md el issue 1 + checkboxes 0.1 relevantes.
```

### Prompt 2 — Higiene de assets

```
Repo: Ncéntrika (CRA). Objetivo: bajar peso de imágenes SIN cambiar el diseño.

Contexto:
- Hay `public/resources/images/IMG_*.PNG` y `IMG_2219.JPEG` (~12.8 MB) NO referenciados en `src/`.
- Imágenes usadas pesadas: `3.webp` (~669KB), `6.webp` (~527KB), `doctora.webp` (~496KB).
- `acordion1.png` (~334KB) vs `acordion1.webp` (~29KB); el código usa el webp en `AboutDetails.js`.
- `5.gif` se usa en `InnovationList.js`.

Tareas:
1. Confirmar con búsqueda qué imágenes están referenciadas. NO commitear/usar los IMG_* crudos salvo que el usuario diga que deben entrar al sitio.
2. Si IMG_* no se usan: déjalos fuera del flujo de deploy (no los copies a build de forma accidental; si están untracked, no los agregues; documenta en TASKS.md la decisión pendiente).
3. Recomprimir/redimensionar `3.webp`, `6.webp`, `doctora.webp` a un peso razonable manteniendo calidad visual aceptable para web.
4. Eliminar `acordion1.png` solo si no hay referencias.
5. Añadir `loading="lazy"` y dimensiones (width/height o CSS aspect-ratio) a imgs below-the-fold en About, InnovationList, Facilities, AboutDetails, Footer (no al logo del header si afecta LCP).
6. No cambiar layout ni CSS de marca.

Al final: tabla antes/después de tamaños, archivos tocados, y marca issue 2 + 0.2 en TASKS.md.
```

### Prompt 3 — Dead weight CSS / deps

```
Repo: Ncéntrika (CRA). Objetivo: quitar peso muerto de CSS y dependencias SIN cambiar estilos visibles.

Contexto (evidencia previa):
- `public/index.html` carga `font-awesome.min.css` pero no hay clases `fa-` en el código; `public/fonts/` no existe.
- `react-scroll-parallax` está en package.json y no se importa en src.
- `src/service-worker.js` solo usa: workbox-core, workbox-expiration, workbox-precaching, workbox-routing, workbox-strategies. El resto de workbox-* en package.json sobra.
- OpenSans está en TTF (~254KB) vía `@font-face` en `public/css/common.css`.
- Dead code: `src/App.css` (boilerplate no importado), `src/components/navigations.js` (react-router, no usado), import unused `Facilities` en `Innovation.js`.

Tareas:
1. Quitar link de Font Awesome en index.html (y el archivo CSS si ya no se necesita).
2. Remover `react-scroll-parallax` y workbox no usados; actualizar package-lock con npm uninstall.
3. Convertir OpenSans a woff2 si hay herramienta (o documentar comando); actualizar @font-face. Mantener mismos font-family names usados en CSS.
4. Limpiar dead code listado (App.css, navigations.js si es basura CRA, import Facilities).
5. No tocar Bootstrap en este prompt (va en prompt 5). No cambiar colores/look.

Al final: `npm run build` debe pasar; anotar tamaño build; marcar issue 3 + 0.3 en TASKS.md.
```

### Prompt 4 — Design tokens

```
Repo: Ncéntrika (CRA). Objetivo: unificar el sistema visual en CSS SIN rediseñar (mismos colores y tipografía).

Contexto:
- Estilos en `public/css/*.css` + `src/index.css`. No hay tokens centrales.
- Colores de marca a preservar exactamente:
  #92D2C7, #FABE15, #EAA9CB, #99BFE5, #F98F8A, #FFF8F0, #3B3937
- Tipografía: OpenSans-Bold / OpenSans-Regular
- Títulos de sección ~48px (Testimonials ~30px). Botones base en `common.css` + overrides por sección.
- Breakpoints mezclados: 900/990/1000/1120/1180/1200. Header JS usa width > 1000.
- Problemas: `.section-title { margin-top: 140px !important }` en common.css; `section { font-size: 3rem }` en index.css; posible #6a0dad huérfano en testimonials.css.

Tareas:
1. Crear variables CSS (:root) en common.css o tokens.css linkeado desde index.html.
2. Reemplazar hex de marca por var(--...) en los CSS de public/css SIN cambiar valores.
3. Unificar .section-title en un solo lugar; documentar si Testimonials queda más chico a propósito.
4. Normalizar variantes de botón (home/header/contact/footer) vía clases + Button.js, mismo look actual.
5. Alinear breakpoints principales a 2 (sugerido: 768 y 1024) SOLO donde no rompa el layout; si un cambio es riesgoso, déjalo y anótalo.
6. Revisar margin 140px !important y font-size 3rem en section: corregir solo si no altera el espaciado percibido de forma drástica; si lo hace, ajustar con cuidado o dejar nota.
7. Quitar #6a0dad u otros colores fuera de marca si no se usan visualmente.

NO migrar a Tailwind. NO quitar Bootstrap todavía.

Al final: lista de tokens, archivos tocados, y marca issue 4 + 1.1 en TASKS.md.
```

### Prompt 5 — Bootstrap out + lazy secciones

```
Repo: Ncéntrika (CRA). Objetivo: quitar Bootstrap y aligerar el árbol de secciones SIN cambiar el look.

Prerrequisito ideal: prompts 1–4 hechos (tokens listos).

Contexto:
- Bootstrap solo se usa de forma superficial: container, row, col-md-auto, table, justify-content-md-center en Services, InnovationList, Contact, About, AboutDetails, Appointment, Footer, TableContactInfo.
- `public/css/bootstrap.min.css` ~153KB linkeado en index.html.
- App.js monta todo eager: TopHeader, Header, Home, Services, Innovation, Facilities, About, AboutDetails, Contact, TableContactInfo, Testimonials, Appointment, Footer.
- Facilities.js duplica slides (mismas 2 imágenes × 2). AboutDetails repite acordion1.webp 4 veces.
- Contact form no tiene submit real.

Tareas:
1. Inventariar clases Bootstrap usadas; reemplazar por CSS propio mínimo (mismo layout visual).
2. Cuando no queden clases Bootstrap, quitar bootstrap.min.css de index.html.
3. React.lazy + Suspense para Testimonials, Facilities y Appointment (al menos).
4. Facilities: solo 2 slides únicos.
5. AboutDetails: evitar 4× la misma imagen pesada (reusar una, o quitar imgs decorativas redundantes) sin romper el accordion.
6. NO fusionar Contact + TableContactInfo a menos que el layout quede idéntico; si es riesgoso, solo documentar propuesta en TASKS.md.
7. Formulario Contact: si no hay backend, convertir “Enviar” a flujo WhatsApp o mailto sin inventar APIs; no dejes un botón muerto si es fácil de arreglar.

No introducir Tailwind. Preservar colores/marca.

Al final: build OK, tamaño build, checklist visual breve, marcar issue 5 + 1.2/1.3 en TASKS.md.
```

---

## Decisiones / parking lot

| Tema | Decisión | Fecha |
|------|----------|-------|
| ¿Usar los `IMG_*.PNG` nuevos? | ⬜ Sí (comprimidos) / ⬜ No (fuera del repo/deploy) — hoy en `assets-raw/` (gitignore), no en `public/` ni build | 2026-08-12 |
| ¿Migrar a Tailwind? | ⬜ Sí (Fase 2) / ⬜ No (quedarse en CSS + tokens) | |
| ¿Fusionar Contact + horarios + mapa? | ❌ No por ahora — layouts distintos (form+info vs tabla+iframe); fusionar rompería secciones; revisar solo si se rediseña Contact | 2026-08-12 |
| Testimonials `.section-title` 30px | ✅ Intencional (título largo); token `--title-size-sm` | 2026-08-12 |
| Breakpoints → 768/1024 | ✅ Estándar de sitio = **1000px** (nav + secciones). 768/1024 solo grid. Secundarios: 1180 header, 1200 contact/innovation | 2026-08-12 |
| `section { font-size: 3rem }` | ✅ Conservado (legacy; hijos override); no tocar sin QA visual | 2026-08-12 |
| `.section-title` margin 140px !important | ✅ Conservado vía `--space-section-title` (Bootstrap/heading resets) | 2026-08-12 |

---

## Log breve

| Fecha | Qué se hizo |
|-------|-------------|
| | Diagnóstico inicial (sin implementar). Creado este archivo. |
| | Añadidos 5 prompts ejecutables (issues 1–5). |
| 2026-08-12 | Prompt 1 Hero video: 1× `<video>`, poster WebP 13 KB, MP4 3.5 MB → 379 KB (1080 CRF26), IO + preload=none. |
| 2026-08-12 | Prompt 2 Higiene assets: IMG_* → `assets-raw/` (~12.8 MB fuera de deploy); `acordion1.png` eliminado; 3/6/doctora reencode; lazy+dims en About/InnovationList/AboutDetails/Footer. Facilities usa `background-image` (lazy N/A). Pendiente opcional: 1/2/4.webp siguen ~4K. |
| 2026-08-12 | Prompt 3 Dead weight: quitado Font Awesome + CSS; `react-scroll-parallax` + 7 workbox-* no usados; OpenSans Bold/Regular TTF→woff2 (130→58 KB c/u, TTF borrados); eliminados `App.css`, `navigations.js`; import Facilities en Innovation. `npm run build` OK — build/ **4.25 MB**. |
| 2026-08-12 | Prompt 4 Design tokens: `:root` en `common.css`; hex de marca → `var(--…)`; `.section-title` unificado (48px; Testimonials 30px a propósito); variantes botón en `common.css`; `#6a0dad` → CTA; breakpoints 990/1000/1180/1200 dejados (Header.js = 1000); `section{font-size:3rem}` y margin 140px !important conservados con nota. |
| 2026-08-12 | Prompt 5 Bootstrap out + lazy: grid mínimo en `common.css` (mismas clases); quitado `bootstrap.min.css`; `React.lazy` Facilities/Testimonials/Appointment; Facilities 2 slides; AboutDetails sin 4× `<img>`; Contact Enviar→WhatsApp; merge Contact+tabla diferido. `npm run build` OK — build/ **4.13 MB**. Checklist visual: home/servicios/innovación/contacto/footer sin cambio de marca; accordion AboutDetails con foto vía CSS. |
| 2026-08-12 | Cierre Fase 0.4 + 1.4 (sin prompt nuevo): build **4.13 MB**; preview local OK; 990/900/1120 → **1000** (alineado Header); duplicados innovation/appointment (stars + container) y media testimonials 1120 consolidados en `common.css` / un solo `@media 1000`. |
