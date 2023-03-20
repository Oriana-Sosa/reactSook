import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`../../src/products/productos.json`)
        .then((res) => res.json())
        .then((data) => {
            const obj = data.find(x => x.id === parseInt(id))
            setProducto(obj)
        })
    }, []);


    return (
        <div>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt="" />
            <h5>{producto.categoria}</h5>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p>{producto.color}</p>
        </div>

    )
}

export default ItemDetail
