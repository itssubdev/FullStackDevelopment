import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CounterProvider from './learn/ContextApi/CounterProvider.jsx'
import CartProvider from './learn/ContextApi/AddTOCArt/CartProvider.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <CartProvider >
                <CounterProvider >
                    <App />
                </CounterProvider>
            </CartProvider>
        </BrowserRouter>
    </QueryClientProvider>
)
