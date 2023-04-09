import { FaShoppingCart } from "react-icons/fa";
import { useState,useContext } from "react";
import { CartContext } from "../context/CartContext";
function Cart(){
    const [viewCart, setViewCart] = useState(false);
    const {cart}= useContext(CartContext);

    const ContentCart = ()=>{
        return (
            <>
                <div className="cart__products">
                    {
                        cart.map((element) => (
                            <div className="cart__product" key={element.id_ropa}>
                                <img src={element.imagen} alt="" width={50} className="cart__img"/>
                                <span className="cart__name">{element.nombre}</span>
                                <span className="cart__price">S/. {element.precio}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="cart__details">
                    Aqui iran los precios
                </div>
            </>
            
        )
    }

    return (
        <div className="cart">
            <button className="cart__button" onClick={()=>{setViewCart(!viewCart)}}>
                <FaShoppingCart/>
                <div className="cart__counter">{cart.length}</div>    
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