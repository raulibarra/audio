# React Portfolio App

This folder contains the source code for the React portfolio application.

## Development

To run the development server:

```bash
cd react-app
npm run dev
```

The dev server will run at `http://localhost:5173/`

## Building for Production

To build the application for deployment:

```bash
cd react-app
npm run build
```

**Important:** The build output is configured to deploy directly to the **root folder** of the repository. This is set up for GitHub Pages deployment.

The build process will:
- Generate optimized production files
- Output `index.html` to the root directory
- Output assets (CSS, JS) to the root `/assets` folder
- Output fonts to the root `/fonts` folder

## Project Structure

- `src/` - React source code
  - `components/` - React components
  - `data/` - Portfolio data
  - `App.jsx` - Main application component
  - `App.css` - Application styles
- `public/` - Static assets
- `vite.config.js` - Vite configuration (configured to build to parent directory)

## Deployment

After running `npm run build`, the root directory will contain all files needed for GitHub Pages:
- `index.html`
- `assets/` folder with bundled JS and CSS
- `fonts/` folder
- Other static assets

Simply commit and push to deploy to GitHub Pages.
