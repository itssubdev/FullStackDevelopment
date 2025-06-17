import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CounterProvider from './learn/ContextApi/CounterProvider.jsx'
import CartProvider from './learn/ContextApi/AddTOCArt/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CartProvider >
            <CounterProvider >
                <App />
            </CounterProvider>
        </CartProvider>
    </BrowserRouter>
)
