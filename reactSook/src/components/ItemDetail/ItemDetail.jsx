import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../ItemDetail/itemDetail.module.css"
import { db } from "../../../db/firebase-config";
import { doc, getDoc } from "firebase/firestore";


const ItemDetail = () => {
    
    const [item, setItem] = useState({})
    const { id } = useParams()

    const getItem = async () =>{
        const docRef = doc(db, "productos", id)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            setItem(docSnap.data())
        } else {
            console.log("No such document!")
        }
    }

    useEffect(()=> {
        getItem()
    },[id])

    //Cart
    const [cart, setCart] = useState([])

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({...item, quantity: newQuantity})
        setCart(newCart)
    }

    const onAdd = (quantity) => {
        addProduct(item, quantity)
    }


    const [quantity, setQuantity] = useState(0)

    const resta = () => {
        setQuantity (quantity -1)
    }

    const suma = () => {
        setQuantity (quantity +1)
    }
console.log(cart, quantity)

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
