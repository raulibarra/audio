import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import './css/styles.css'
// import './css/heading.css'
// import './css/body.css'
// import './css/anims.css'
import App from './App.jsx'

console.log('Mounting React App...');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
