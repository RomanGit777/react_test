# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# 🎬 React Movies App

## 🛠 Run locally
npm run dev

## 🧱 Tech stack
- React
- TypeScript
- Vite
- React Router
- TanStack Query

## 📁 Project structure
- components – reusable UI components
- containers – pages (MoviesPage, MovieDetailsPage, SearchPage)
- hooks – custom hooks (useDebounce, usePagination)
- queries – TanStack Query hooks
- api – TMDB requests

## 🔍 Search
- Search by movie title or part of title
- Debounced input (300ms)
- Suggestions dropdown (limited to 5 results)
- Separate Search Page with pagination

## 🧭 Routing
- / – movies list
- /movie/:id – movie details
- /search?query= – search results

⚠️ API keys are included for educational/test purposes only.
API Keys:
VITE_TMDB_API_KEY=acaf5d95b786adebe6571ed065536914
VITE_TMDB_READ_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2FmNWQ5NWI3ODZhZGViZTY1NzFlZDA2NTUzNjkxNCIsIm5iZiI6MTc2MzM5MTE2MS4wMzEwMDAxLCJzdWIiOiI2OTFiMzZiOTExN2MwZTQ3ZDIxNzVlNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0GeKgy1y3_v5DzelZDZ_OOtDdfMoohfs65-2xBxwu-I
