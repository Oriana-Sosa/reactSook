import { doc, getDoc } from "firebase/firestore"
import {createContext, useContext, useEffect, useState } from "react"
import { db } from "../../db/firebase-config"
import { useParams } from "react-router-dom";
import { ItemContext } from "./ItemContext";


const CartContext = createContext()


function CartProvider(props){
    
    const [cart, setCart] = useState([])

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({...item, quantity: newQuantity})
        setCart([...newCart])
    }

    const onAdd = (item, quantity) => {
        addProduct(item, quantity)
    }



return(
    <CartContext.Provider value={{cart, onAdd}}>
        {props.children}
    </CartContext.Provider>
)
}

export {CartContext, CartProvider}
