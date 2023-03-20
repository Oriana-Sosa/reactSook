import styles from "../Item/item.module.css"

const Item = ({producto}) => {
    return (
        <div className="col-md-3 text-center">
            <img src={producto.imagen} className={styles.imagen} alt="" />
            <h3 className="">{producto.nombre}</h3>
            <h5>{producto.categoria}</h5>
            <p>${producto.precio}</p>
        </div>
    )
}

export default Item
