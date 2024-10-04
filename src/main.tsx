import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MailProvider } from './context/MailProvider.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MailProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MailProvider>
  </StrictMode>,
)
