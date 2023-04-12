import { createContext, useState } from "react";
import { db } from "../../db/firebase-config";
import { doc, getDoc } from "firebase/firestore";

const ItemContext = createContext()

function ItemProvider(props){
    const [item, setItem] = useState({})

    const getItem = async (id) =>{
        const docRef = doc(db, "productos", id)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            setItem(docSnap.data())
        } else {
            console.log("No such document!")
        }
    }

    return(
        <ItemContext.Provider value={{item, getItem}}>
            {props.children}
        </ItemContext.Provider>
    )
        
}

export {ItemContext, ItemProvider}