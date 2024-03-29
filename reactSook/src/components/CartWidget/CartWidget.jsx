import { Link } from "react-router-dom"
import Cart from "../../../public/shopping.svg"
import styles from "../CartWidget/cartwidget.css"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

const CartWidget = () => {
    const {contador} = useContext(CartContext)
    return (
        <Link to="/cart" className="d-flex linkContador">
            <img src={Cart} alt="" className={styles.carrito} />
            <p className={styles.contador}>{contador}</p>
        </Link>
    )
}

export default CartWidget
