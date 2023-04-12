import { useContext } from "react"
import { QuantityContext } from "../../contexts/QuantitySelectorContext"
import { collection, doc, getDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../db/firebase-config"


const ButtonAdd = () => {

    const [productos, setProductos] = useState([])

    const addProductos = async (id) =>{
        const productRef = doc(db, "productos", id)
        const productSnap = await getDoc(productRef)
        if(productSnap.exists()){
            const obj = productos.find(x => x.id === (id))
            setProductos(...productos, id)
        } 
    }

        console.log(productos)
    return (
        <div>
            <button onClick={addProductos}>Agregar al carrito</button>
        </div>
    )
}

export default ButtonAdd
