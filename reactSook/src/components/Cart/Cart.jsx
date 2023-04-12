import { useContext, useEffect} from "react"
import { CartContext } from "../../contexts/CartContext"


const Cart = () => {

    const {cart} = useContext(CartContext)
    const {getCart} = useContext(CartContext)
    
    useEffect(()=> {
        getCart()
    }, [])


    return (
        <div>
            <h1 className="text-center">Check-out</h1>
            <h3>Tus compras:</h3>
            <h3>Total de compra: $</h3>
            
        </div>
    )
}

export default Cart
