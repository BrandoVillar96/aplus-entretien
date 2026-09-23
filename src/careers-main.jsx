import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CareersApp from './CareersApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CareersApp />
  </StrictMode>,
)
