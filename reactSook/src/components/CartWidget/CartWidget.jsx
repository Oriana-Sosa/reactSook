import Cart from "../../../public/shopping.svg"
import styles from "../CartWidget/cartwidget.module.css"

const CartWidget = () => {
    return (
        <div className="d-flex">
            <img src={Cart} alt="" className={styles.carrito} />
            <p>1</p>
        </div>
    )
}

export default CartWidget
