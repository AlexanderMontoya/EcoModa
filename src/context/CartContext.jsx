import {createContext, useState, useEffect} from 'react'
export const CartContext= createContext();
export function CartContextProvider(props){
    const [cart , setCart] = useState([])
    function addProduct(product){
        setCart([...cart,{
            id_ropa: product.id_ropa,
            nombre: product.nombre,
            imagen: product.imagen,
            precio: product.precio
        }])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addProduct 
        }}>
            {props.children}
        </CartContext.Provider>
    )
}