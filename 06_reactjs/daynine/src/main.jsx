import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CounterProvider from './learn/ContextApi/CounterProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CounterProvider >
            <App />
        </CounterProvider>
    </BrowserRouter>
  
)
