import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`../../products/productos.json/${id}`)
        .then((res) => res.json())
        .then((data) => setProducto(data));
    }, []);


    return (
        <div>
            <h3>1</h3>
        </div>
    )
}

export default ItemDetail
