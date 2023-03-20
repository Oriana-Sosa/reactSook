import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { categoria } = useParams()
    
    useEffect(() => {
        fetch(`../../src/products/productos.json`)
        .then((res) => res.json())
        .then((data) => {
            const obj = data.filter(x => x.categoria === (categoria))
            setProducto(obj)
        })
    }, [categoria]);

    
    return (
        <div>
            {producto.map ((producto)=>
                <h3>{producto.nombre}</h3>
            )}
        </div>
    )
}

export default ItemDetailContainer
