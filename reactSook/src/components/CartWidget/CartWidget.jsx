import { Link } from "react-router-dom"
import Cart from "../../../public/shopping.svg"
import styles from "../CartWidget/cartwidget.module.css"

const CartWidget = () => {
    return (
        <Link to="/cart" className="d-flex">
            <img src={Cart} alt="" className={styles.carrito} />
            <p>1</p>
        </Link>
    )
}

export default CartWidget
