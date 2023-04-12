import { doc, getDoc } from "firebase/firestore"
import {createContext, useContext, useEffect, useState } from "react"
import { db } from "../../db/firebase-config"
import { useParams } from "react-router-dom";
import { ItemContext } from "./ItemContext";


const CartContext = createContext()


function CartProvider(props){
    const {item} = useContext(ItemContext)
    const [cart, setCart] = useState([])

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({...item, quantity: newQuantity})
        setCart(newCart)
    }

    const onAdd = () => {
        addProduct(item, quantity)
    }

    const [quantity, setQuantity] = useState(0)

    const resta = () => {
        setQuantity (quantity -1)
    }

    const suma = () => {
        setQuantity (quantity +1)
    }


return(
    <CartContext.Provider value={{cart, onAdd, quantity, resta, suma}}>
        {props.children}
    </CartContext.Provider>
)
}

export {CartContext, CartProvider}
