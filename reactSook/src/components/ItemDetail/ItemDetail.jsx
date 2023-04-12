import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../ItemDetail/itemDetail.module.css"
import { db } from "../../../db/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { ItemContext } from "../../contexts/ItemContext";
import { CartContext } from "../../contexts/CartContext";



const ItemDetail = () => {
    
    const {item} = useContext(ItemContext)
    const {getItem} = useContext(ItemContext)
    const { id } = useParams()

    
    useEffect(()=> {
        getItem(id)
    },[id])

    //Cart
    
    const {cart} = useContext(CartContext)
    const {onAdd} = useContext(CartContext)
    const {quantity} = useContext(CartContext)
    const {resta} = useContext(CartContext)
    const {suma} = useContext(CartContext)

console.log(cart)
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
                        <button onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail
