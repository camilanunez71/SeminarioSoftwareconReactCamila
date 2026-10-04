import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

const tema = createTheme({
  palette: {
    primary: { main: '#6a1b9a' },
    background: { default: '#f3e5f5' },
  },
  shape: { borderRadius: 10 },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)