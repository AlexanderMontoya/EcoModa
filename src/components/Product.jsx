import { useContext } from "react"
import { CartContext } from "../context/CartContext"
function Product({props}){
    const {addProduct}=useContext(CartContext);
    return (
        <div className='product'>
            <div className="product__content_img">
                <img src={props.imagen} alt="" className='product__img' width={200}/>
            </div>
            <div className="product__details">
                <span className='product__name'>{props.nombre}</span>
                <span className='product__price'>S/. {props.precio}</span>
                <button className='product__add' onClick={
                        function () {
                            addProduct({
                                id_ropa: props.id_ropa,
                                nombre: props.nombre,
                                imagen: props.imagen,
                                precio: props.precio,
                                cantidad: 1,
                                precio_total: props.precio
                            })
                        }
                }>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default Product