import { Link } from "react-router-dom"
import styles from "../Item/item.module.css"

const Item = ({producto}) => {
    return (
        <Link to={`productos/${producto.id}`} className="col-md-3 text-center">
            <img src={producto.imagen} className={styles.imagen} alt="" />
            <h3>{producto.nombre}</h3>
            <h5>{producto.categoria}</h5>
            <p>${producto.precio}</p>
        </Link>
    )
}

export default Item
