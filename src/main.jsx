import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from "./contexts/productContext.jsx";
import SideBarProvider from "./contexts/sideBarContext.jsx"
import CartProvider from "./contexts/cartContext.jsx";
import 'react-slideshow-image/dist/styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <SideBarProvider>
        <CartProvider>
            <ProductProvider>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>,
            </ProductProvider>
        </CartProvider>
    </SideBarProvider>
)
