import { collection, getDocs } from "firebase/firestore"
import {createContext, useState } from "react"
import { db } from "../../db/firebase-config"


const ItemsContext = createContext()

function ItemsProvider (props) { 
    const [items, setItems] = useState([])
    const algunosItems = collection (db, "productos")

    const conseguirItems = async () => {
        const itemsColeccion = await getDocs (algunosItems)
        const items = itemsColeccion.docs.map ((doc) => ({...doc.data(), id: doc.id}))
        setItems(items)
    }
    
    return(
    <ItemsContext.Provider value ={{items, conseguirItems}}>
        {props.children}
    </ItemsContext.Provider>
)
}



export {ItemsContext, ItemsProvider}