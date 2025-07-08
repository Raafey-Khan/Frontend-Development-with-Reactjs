import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
console.log(import.meta.env.MODE); // should output "development"

createRoot(document.getElementById('root')).render(
    
  <App />
  
  
)
