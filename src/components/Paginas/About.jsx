import mision from '../../assets/img/mision.png'
import valores from '../../assets/img/valores.png'
import vision from '../../assets/img/vision.png'
import './Inicio.css';
export function About(){
    return (
        <section className='section about'>
            <div className="about__content_title">
                <h2 className='about__title'>¿QUIÉNES SOMOS?</h2>
            </div>
            <div className="about__info">
                <h3 className='about__subtitle'>Reseña</h3>
                <p className="about__paragraph">
                    En la actualidad, Perú se ubica como el sexto país más innovador de América Latina. Los peruanos tenemos un espíritu emprendedor, lo cual nos permite innovar en cualquier rubro. Cuatro amigos licenciados de la carrera de administración, se reúnen para dialogar respecto a la poca importancia que se le da a la ecología en el país. Siendo así que los 4 se proyectan crear una empresa innovadora, y de esta manera nace Eco- Moda, como respuesta a la moda sostenible (sostenibilidad ecológica) y necesidades en el rubro textil, ofreciendo una gran variedad de productos y servicios para llegar a unos consumidores más especializados y exigentes en precios, calidad y cumplimiento. Ofrecemos una variedad de prendas tanto para niños (as) y adultos (as), Estas prendas son parte de las líneas de ropa deportiva, casual y formal.
                </p>
            </div>
            <div className="about__info">
                <img src={mision} width="60" alt="" className='about__image'/>
                <h3 className='about__subtitle'>Misión</h3>
                <p className="about__paragraph">
                    Ofrecer a nuestros clientes prendas de calidad, buenos precios, y ropa con la moda actual, y a la vez innovar cuidando al medio ambiente. Eco-Moda cuenta con un personal que tiene vocación de servicio, y listo para brindarles la mejor atención. 
                </p>
            </div>
            <div className="about__info">
                <img src={vision} width="60" alt="" className='about__image'/>
                <h3 className='about__subtitle'>Visión</h3>
                <p className="about__paragraph">
                    Ser una empresa líder en el mercado nacional del rubro textil y moda sostenible en el Perú. Reconocida por ser innovadora, brindar calidad y buen servicio a nivel nacional; para crecer de manera sustentable satisfaciendo las expectativas de nuestros clientes.
                </p>
            </div>
            <div className="about__info">
                <img src={valores} width="60" alt="" className='about__image'/>
                <h3 className='about__subtitle'>Valores</h3>
                <ul className="about__paragraph">
                    <li className='about__value'>Compromiso</li>
                    <li className='about__value'>Trabajo en equipo</li>
                    <li className='about__value'>Excelencia</li>
                    <li className='about__value'>Vocación de servicio</li>
                    <li className='about__value'>Puntualidad</li>
                </ul>
            </div>
        </section>
    )
}