import { useContext} from "react"
import { QuantityContext } from "../../contexts/QuantitySelectorContext"


const ItemQuantitySelector = () => {

    const {number} = useContext(QuantityContext)
    const {add} = useContext(QuantityContext)
    const {reduce} = useContext(QuantityContext)


    return (
        <div className="d-flex justify-content-around">
            <button onClick={reduce}>-</button>
            <div>{number}</div>
            <button onClick={add}>+</button>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemQuantitySelector
