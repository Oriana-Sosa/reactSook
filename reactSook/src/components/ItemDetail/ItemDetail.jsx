import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../ItemDetail/itemDetail.module.css"

const ItemDetail = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        fetch("../../src/products/productos.json")
        .then((res) => res.json())
        .then((data) => {
            const obj = data.find(x => x.id === parseInt(id))
            setProducto(obj)
        })
    }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="d-flex">
                    <img src={producto.imagen} className={styles.imagen} alt="" />
                    <div className="d-flex flex-column my-5">
                        <h3>{producto.nombre}</h3>
                        <h5>{producto.categoria}</h5>
                        <p>${producto.precio}</p>
                        <p>{producto.descripcion}</p>
                        <p>{producto.color}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail
