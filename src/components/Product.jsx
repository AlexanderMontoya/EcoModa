function Product({props}){
    return (
        <div className='product'>
            <div className="product__content_img">
                <img src={props.imagen} alt="" className='product__img' width={200}/>
            </div>
            <div className="product__details">
                <span className='product__name'>{props.nombre}</span>
                <span className='product__price'>S/. {props.precio}</span>
                <button className='product__add'>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default Product