import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export function Contactos({clase}){
    return (
        <div className="contactos">
            <span className='contactos__phone'><FaPhoneAlt/> Llamanos: +51 933 379 761</span>
            <div className="contactos__links">
                <a href="#" className="contactos__link">
                    <MdEmail/>
                </a>
                <a href="#" className="contactos__link">
                    <FaFacebookF/>
                </a>
                <a href="#" className="contactos__link">
                    <FaTwitter/>
                </a>
                <a href="#" className="contactos__link">
                    <FaYoutube/>
                </a>
                <a href="#" className="contactos__link">
                    <FaInstagram/>
                </a>
            </div>
        </div>
    )
}