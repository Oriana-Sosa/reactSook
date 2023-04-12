import { useContext } from "react"
import { QuantityContext } from "../../contexts/QuantitySelectorContext"
import { collection, doc, getDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../db/firebase-config"


const ButtonAdd = ({id}) => {

    const ButtonAdd = ({ productId }) => {
        console.log("product id", productId);
    
        const [productos, setProductos] = useState([])
    
        const addProductos = async () =>{
            const productRef = doc(db, "productos", productId)
            const productSnap = await getDoc(productRef)
            if(productSnap.exists()){
                const obj = productos.find(x => x.id === (productId))
                setProductos(...productos, productId)
            } 
        }
    
            console.log(productos)
        return (
            <div>
                <button onClick={addProductos}>Agregar al carrito</button>
            </div>
        )
    }
    
}

export default ButtonAdd
