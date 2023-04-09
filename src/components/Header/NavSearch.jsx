import { useContext } from 'react';
import Cart  from '../Cart'
import { ProductContext } from '../../context/ProductContext';
import { FaSearch } from "react-icons/fa";
export function NavSearch(){
    const {searchProduct} = useContext(ProductContext)
    return (
        <div className="nav__search">
            <div className="input__content">
                <input type="text" placeholder={'Buscar'} name="nav__input" id="nav__input" onChange={(e)=>searchProduct(e.target.value)} className='nav__input'/>
                <FaSearch className='input__icon'/>
            </div>
            
            <Cart/>
        </div>
    )
}