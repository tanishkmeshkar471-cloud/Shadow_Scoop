import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <body style={{backgroundColor:"black",color:"white",fontFamily:"Barlow Condensed"}}>
    <App />
    </body>
    </BrowserRouter>
  </StrictMode>,
)
