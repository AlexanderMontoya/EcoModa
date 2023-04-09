import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContextProvider } from './context/CartContext'
import { ProductContextProvider } from './context/ProductContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
)
