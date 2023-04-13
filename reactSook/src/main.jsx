import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { ItemsProvider } from './contexts/itemsContext'

import { ItemProvider } from './contexts/ItemContext'
import {CartProvider } from './contexts/CartContext'
import { QuantityContext, QuantityProvider } from './contexts/QuantityContext'


ReactDOM.createRoot(document.getElementById('root')).render(

<ItemsProvider>
    <ItemProvider>
        <CartProvider>
            <QuantityProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
                </QuantityProvider>
        </CartProvider>
    </ItemProvider>
</ItemsProvider>

)
