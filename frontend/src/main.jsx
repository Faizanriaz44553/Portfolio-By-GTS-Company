import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ThemeContext } from './context/themeContext/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <StrictMode>
    <App />
  </StrictMode>,

)
