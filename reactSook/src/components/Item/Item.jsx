import { Link } from "react-router-dom"
import styles from "../Item/item.css"

const Item = ({producto}) => {
    return (
        <Link to={`productos/${producto.id}`} className="col-md-3 text-center link">
            <img src={producto.imagen} className="img" alt="" />
            <h3>{producto.nombre}</h3>
            <h5>{producto.categoria}</h5>
            <p>${producto.precio}</p>
        </Link>
    )
}

export default Item
