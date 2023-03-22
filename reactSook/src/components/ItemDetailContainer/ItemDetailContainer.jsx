import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "../ItemDetailContainer/itemDetailContainer.module.css"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const { categoria } = useParams()
    
    useEffect(() => {
        fetch("../../src/products/productos.json")
        .then((res) => res.json())
        .then((data) => {
            const obj = data.filter(x => x.categoria === (categoria))
            setProducto(obj)
        })
    }, [categoria]);


    return (
        <div className="container-fluid">
            <div className="row">
                {producto.map ((item)=>(
                    <div className="col-md-3 text-center">
                    <img src={item.imagen} className={styles.imagen} alt="" />
                    <h3>{item.nombre}</h3>
                    <h5>{item.categoria}</h5>
                    <p>${item.precio}</p>
                    </div>))}  
            </div>
        </div>                
    )
}

export default ItemDetailContainer
