import { useState } from "react"
import { BsList } from "react-icons/bs";
import { BiX} from "react-icons/bi";
import {Outlet, Link} from "react-router-dom";
export function Navbar(){
    const [viewNavBar, setNavBar]=useState(false)
    return <>
        <ul className={!viewNavBar?"navbar":"navbar navbar--responsive"}>
            <li><Link to={'/Inicio'} className="navbar__link">Inicio</Link></li>
            <li><a href="#" className="navbar__link">Ropa para Hombre</a></li>
            <li><a href="#" className="navbar__link">Ropa para Mujer</a></li>
            <li><a href="#" className="navbar__link">Ropa para Niños</a></li>
            <li><a href="#" className="navbar__link">Deporte</a></li>
            <li><Link to={'/sobre-nosotros'} className="navbar__link">¿Quienes somos?</Link></li>
        </ul>
        <button onClick={()=>{setNavBar(!viewNavBar)}} className="nav__btn">{!viewNavBar?<BsList/>:<BiX/>}</button>
    </>
}