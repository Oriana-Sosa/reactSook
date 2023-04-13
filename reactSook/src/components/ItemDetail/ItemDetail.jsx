import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../ItemDetail/itemDetail.module.css"
import { db } from "../../../db/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { ItemContext } from "../../contexts/ItemContext";
import { CartContext } from "../../contexts/CartContext";
import { QuantityContext } from "../../contexts/QuantityContext";



const ItemDetail = () => {
    
    const {item} = useContext(ItemContext)
    const {getItem} = useContext(ItemContext)
    const {eliminarCarrito} = useContext(CartContext)
    const { id } = useParams()


    
    useEffect(()=> {
        getItem(id)
    },[id])

    //Cart
    
    const {cart} = useContext(CartContext)
    const {onAdd} = useContext(CartContext)
    const {eliminar} = useContext(CartContext)
    const {resta} = useContext(QuantityContext)
    const {suma} = useContext(QuantityContext)
    const {quantity} = useContext(QuantityContext)
   
    const {precio} = useContext(CartContext)
    const {calcularTotalCompra} = useContext(CartContext)
    console.log(cart)

    const {getContador} = useContext(CartContext)
    const {contador}= useContext(CartContext)
    console.log(contador)

    const agregarAlCarrito = () =>{
        onAdd(item, quantity)
        getContador(quantity)
    }



calcularTotalCompra()

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex">
                    <div className="col-md-6">
                        <img src={item.imagen} className={styles.imagen} alt="" />
                    </div>
                    <div className="d-flex flex-column col-md-6 my-5">
                        <h3>{item.nombre}</h3>
                        <p>${item.precio}</p>
                        <p>{item.descripcion}</p>
                        <p>{item.color}</p>
                        <button onClick={resta}>-</button>
                        <p>{quantity}</p>
                        <button onClick={suma}>+</button>
                        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
                        <button onClick={eliminarCarrito}>Eliminar Carrito</button>
                        <button onClick={eliminar}>Eliminar</button>
                        <h3>{precio}</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail
