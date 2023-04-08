import {ropas} from '../../data/ropa'
import './Inicio.css'
export function Inicio(){
    return (
        <section className='section'>
            <div className="section__content_title">
                <h2 className='section__title'>Tienda - Ropa Ecologica</h2>
            </div>
            <div className="section__results">
                <span>Viendo 1-10 de 50 resultados</span>
            </div>
            <div className="section__products">
                {
                    ropas.map((ropa)=>(
                       <div className='product'>
                            <div className="product__content_img">
                                <img src={ropa.imagen} alt="" className='product__img' width={200}/>
                            </div>
                            <div className="product__details">
                                <span className='product__name'>{ropa.nombre}</span>
                                <span className='product__price'>{ropa.precio}</span>
                                <button className='product__add'>
                                    Agregar al Carrito
                                </button>
                            </div>
                       </div> 
                    ))
                }
            </div>
            <div className="pages">
                <div className="pages__number pages__number--check">1</div>
                <div className="pages__number">2</div>
                <div className="pages__number">3</div>
                <div className="pages__number">4</div>
                <div className="pages__number">5</div>
            </div>
        </section>
    )
}