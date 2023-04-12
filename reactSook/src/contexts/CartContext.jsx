import { collection, getDocs, doc } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../../db/firebase-config";

const CartContext = createContext()

function CartProvider (props) {
    const [cart, setCart] =useState([])
    const cartRef = collection(db, "cart")

    const getCart = async () =>{
        const cartCollection = await getDocs(cartRef)
        const compras = cartCollection.docs.map((doc)=>({...doc.data(), id:doc.id}))
        setCart(compras)
    } 

    return(
        <CartContext.Provider value={{cart, getCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}
