import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { ItemsProvider } from './contexts/itemsContext'

ReactDOM.createRoot(document.getElementById('root')).render(

<ItemsProvider>
    <BrowserRouter>
    <App />
</BrowserRouter>
</ItemsProvider>

)
