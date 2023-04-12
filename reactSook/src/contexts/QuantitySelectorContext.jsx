import { createContext, useState } from "react"

const QuantityContext = createContext()

function QuantityProvider(props) {
    const [number, setNumber] =useState(0)

    const add = () =>{
        setNumber (number + 1)
    }

    const reduce = () => {
        if (number >= 1){
            setNumber (number - 1)
        }
    }

    return(
        <QuantityContext.Provider value= {{number, add, reduce}}>
            {props.children}
        </QuantityContext.Provider>
    )
}

export {QuantityContext, QuantityProvider}


