import { FaShoppingBag } from "react-icons/fa";
import { BiX} from "react-icons/bi";
import { useState,useContext } from "react";
import { CartContext } from "../context/CartContext";
function Cart(){
    const [viewCart, setViewCart] = useState(false);
    const {cart, contProducts, totalCart, deleteProduct, emptyCart}= useContext(CartContext);

    const ContentCart = ()=>{
        return (
            <>
                <div className="cart__products">
                    {
                        cart.map((element) => (
                            <div className="cart__product" key={element.id_ropa}>
                                <span className="cart__quantity">{element.cantidad}</span>
                                <span className="cart__name">{element.nombre}</span>
                                <span className="cart__price">S/. {element.precio_total}</span>
                                <button type="button" className="cart__btnDelete" onClick={()=>{deleteProduct(element)}}><BiX/></button>
                            </div>
                        ))
                    }
                </div>
                <div className="cart__details">
                    Total: S/.{totalCart}
                </div>
                <button type="button" className="cart__btnEmpty" onClick={()=>{emptyCart()}}>Vaciar carrito</button>
            </> 
            
        )
    }

    return (
        <div className="cart">
            <button className="cart__button" onClick={()=>{setViewCart(!viewCart)}}>
                <FaShoppingBag/>
                <div className="cart__counter">{contProducts}</div>
            </button>
            <div className={!viewCart?"cart__content":"cart__content view"}>
                <div className="cart__title">Mi pedido</div>
                <div className="cart__container">
                    {cart.length==0?<div className="cart__message">Cuando agregues productos se verán aquí</div>:<ContentCart/>}
                </div>
            </div>
        </div>
    )
}

export default Cart