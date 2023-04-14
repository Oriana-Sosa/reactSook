import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";


const QuantityContext = createContext()

function QuantityProvider(props){
    const [quantity, setQuantity] = useState(0)


    const resta = () => {
        if (quantity > 0){
            setQuantity (quantity -1)
        }
    }

    const suma = () => {
        setQuantity (quantity +1)
    }


    return(
        <QuantityContext.Provider value={{resta, suma, quantity}}>
            {props.children}
        </QuantityContext.Provider>
    )
}

export {QuantityContext, QuantityProvider}