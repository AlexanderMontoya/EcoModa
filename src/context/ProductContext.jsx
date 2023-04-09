import {createContext, useState, useEffect} from 'react'
import {ropas} from '../data/ropa'
export const ProductContext= createContext();
export function ProductContextProvider(props){
    const [products , setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
      setProducts(ropas)
    }, [])
    function searchProduct(product){
        const tempSearchTerm = product.toLowerCase();

        if (tempSearchTerm === "") {
            setProducts(ropas);
        } else {
            const filteredRecords = ropas.filter((record) =>
            record.nombre.toLowerCase().includes(tempSearchTerm)
            );
            setProducts(filteredRecords);
        }

        setSearchTerm(tempSearchTerm);
    }
    return (
        <ProductContext.Provider value={{
            products,
            searchProduct 
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}