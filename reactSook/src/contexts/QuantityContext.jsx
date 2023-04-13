import { createContext, useContext, useState } from "react";


const QuantityContext = createContext()

function QuantityProvider(props){
    const [quantity, setQuantity] = useState(0)


    const resta = () => {
        setQuantity (quantity -1)
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