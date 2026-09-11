# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Site-Pessoal-v2 is Felipe Maciel's personal portfolio: a single-page React 19 + TypeScript + Vite 7 app styled entirely with styled-components. The page has one route with five anchor-linked sections: Sobre, Experiência, Tecnologias, Projetos, Contato.

## Commands

- `npm run dev` — start Vite dev server with HMR (default http://localhost:5173)
- `npm run build` — type-check (`tsc -b`) then production build (`vite build`) into `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the whole project (no per-file/test script exists; there is no test suite)

Requires Node 20.19+ or 22.12+ (Vite 7 requirement).

## Architecture

- `src/main.tsx` — entry point. Wraps the app in styled-components' `ThemeProvider` (theme from `src/styles/theme.ts`) and renders `GlobalStyles` (`src/styles/global.ts`) before the single page component `Home`.
- `src/pages/home/index.tsx` — the entire page markup, one component (`Home`) containing every section (Header, Hero, About, Experience, Technologies, Projects, Contact, Footer) inline. There is no router and no sub-page structure; new sections are added directly inside this file in the existing section order.
- `src/pages/home/styles.ts` — every styled-component used by `index.tsx`, one file, matching the section order of `index.tsx`. When adding markup to `index.tsx`, add the corresponding styled-component(s) here rather than using inline styles or a new stylesheet.
- `src/styles/theme.ts` — the single source of truth for colors (`COLORS`) and font sizes (`FONT_SIZES`). Reference `theme.COLORS.*` / `theme.FONT_SIZES.*` inside styled-components rather than hardcoding values.
- `src/styles/styled.d.ts` — extends styled-components' `DefaultTheme` with the shape of `theme.ts` so `theme.COLORS.X` is typed in every styled-component.
- `src/styles/deviceBreakpoints.ts` — named breakpoints (`XS`–`XL`) for responsive styles; use these constants in media queries instead of hardcoded pixel values.
- `src/styles/global.ts` — global CSS reset and base element styles (body, links, buttons, headings, `.container`, `section` padding, and a mobile breakpoint override) applied app-wide via `createGlobalStyle`.
- `src/assets/` — images used directly in `index.tsx` (profile photo, institution/company logos, project screenshots) imported as ES modules.

## Conventions

- All styling goes through styled-components and the theme; no CSS/SCSS files or inline `style` props (inline styles were previously removed in favor of centralizing styling in styled-components — keep it that way).
- Section text content (Sobre, Experiência, etc.) is in Portuguese; keep new copy consistent with that.
