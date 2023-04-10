import {createContext, useState, useEffect} from 'react'
export const CartContext= createContext();
export function CartContextProvider(props){
    const [cart , setCart] = useState([])
    const [totalCart , setTotalCart] = useState(0)
    const [contProducts, setContProducts] = useState(0)
    /*Esta es mi rama 1 */
    function addProduct(product){
        if(cart.find(item =>item.id_ropa === product.id_ropa)){
            const verifyProduct = cart.map( pro=>
                    pro.id_ropa===product.id_ropa
                        ?{...pro, cantidad: pro.cantidad+1, precio_total: pro.precio * (pro.cantidad+1)}
                        :pro
            );
            setContProducts(contProducts+1)
            setTotalCart(totalCart + product.precio);
            return setCart([...verifyProduct]);
        }
        setTotalCart(totalCart + product.precio);
        setContProducts(contProducts+1)
        setCart([...cart,product]);
    }
    function deleteProduct(product){
        setContProducts(contProducts - product.cantidad);
        setTotalCart(totalCart-product.precio*product.cantidad)
        setCart(cart.filter(element=>element.id_ropa != product.id_ropa))
    }
    function emptyCart(){
        setContProducts(0);
        setTotalCart(0);
        setCart([]);
    }
    return (
        <CartContext.Provider value={{
            cart,
            contProducts,
            totalCart,
            addProduct,
            deleteProduct,
            emptyCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}