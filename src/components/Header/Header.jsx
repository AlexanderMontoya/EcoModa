import {Contactos} from '../Contactos'
import {Navbar} from './Navbar'
import './Header.css'
export function Header(){
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__head">
                    <div className="logo">
                        <a href="#" className="logo__link">
                            <img src="/logo.png/" alt="logo ECOMODA" className="logo__image" width={50}/>
                            <h1 className="logo__title">EcoModa</h1>
                        </a>
                        <span className="logo__slogan">Unimos Moda y cuidamos el medio Ambiente</span>
                    </div>
                    <Contactos/>
                </div>
                <Navbar/>
            </nav>
        </header>
    )
}