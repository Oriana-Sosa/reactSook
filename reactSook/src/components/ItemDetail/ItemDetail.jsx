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
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail
