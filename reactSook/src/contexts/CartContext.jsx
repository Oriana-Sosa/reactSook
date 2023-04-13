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
        setCart([...newCart])
    }

    const onAdd = (item, quantity) => {
        addProduct(item, quantity)
    }

    const eliminarCarrito = () => {
        setCart([])
    }

    const eliminar = () =>{
        const buscado = cart.find(producto => producto.id === item.id)
        const newCarrito = cart.filter(producto => producto.id !== buscado.id)
        setCart([...newCarrito])
    }

    function recuperarDatos(info){
        cart.forEach((info)=>{
        console.log(info)
    })
    }
    

return(
    <CartContext.Provider value={{cart, onAdd, eliminarCarrito, eliminar, recuperarDatos}}>
        {props.children}
    </CartContext.Provider>
)
}

export {CartContext, CartProvider}
