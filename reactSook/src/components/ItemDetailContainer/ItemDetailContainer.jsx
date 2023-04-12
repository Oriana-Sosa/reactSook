import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "../ItemDetailContainer/itemDetailContainer.module.css"
import { db } from "../../../db/firebase-config"
import { collection, getDocs } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const ref = collection(db, "productos")
    const { categoria } = useParams()
    

    const getItems = async () => {
        const coll = await getDocs(ref)
        const productos = coll.docs.map ((doc)=> ({...doc.data(), id: doc.id})) 
        const obj = productos.filter(x => x.categoria === (categoria))
            setProducts(obj)
    }

    useEffect(() =>{
        getItems()
    }, [categoria])



    return (
        <div className="container-fluid">
            <div className="row">
                {products.map((producto)=>
                (
                    <Link to={`${producto.id}`} className="col-md-3 text-center">
                        <img src={producto.imagen} className={styles.imagen} alt="" />
                        <h3>{producto.nombre}</h3>
                        <p>${producto.precio}</p>
                    </Link>
                ))}
            </div>
        </div>           
    )
}

export default ItemDetailContainer
