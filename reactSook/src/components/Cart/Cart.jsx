import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useEffect, useState} from "react"
import { db } from "../../../db/firebase-config"
import { CartContext } from "../../contexts/CartContext"



const Cart = () => {

    const {cart} = useContext(CartContext)
    const {precio} = useContext(CartContext)
    
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("0")
    const [mailUno, setMailUno] = useState("")
    const [mailDos, setMailDos] =useState("")
    const [emailConfirmado, setEmailConfirmado] = useState("")

let emailReal


useEffect(()=>{
    if(mailUno === mailDos){
        emailReal = mailUno
        setEmailConfirmado(emailReal)
    } else{
        console.log("No")
    }
},[mailDos, mailUno])
    


    const order = {
    cliente: {
        name: {nombre},
        lastName: {apellido},
        phone: {telefono},
        mail: {emailConfirmado}
    },

    compra: {
        productos: cart.map(productos => ({id: productos.id, nombre: productos.nombre, precio: productos.precio, cantidad: productos.quantity})),
        total:{precio}
    }
}

    const prevent = (e) => {
        e.preventDefault()
        if (emailConfirmado){
            const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order)
        .then(({id})=>console.log(id)) 
        }
    }

        

    return (
        <div>
            <h1 className="text-center">Check-out</h1>
            <h3>Tus compras:</h3>
            {cart.map((prod)=>(
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <p>{prod.quantity}</p>
                </div>
                
            ))}
            <h3>Total de compra: ${precio}</h3>
            <form action="">
                <input type="text" placeholder="Nombre" required onChange={(e)=> setNombre(e.target.value)} />
                <input type="text" name="apellido" id="apellido" placeholder="Apellido" required onChange={(e)=> setApellido(e.target.value)} />
                <input type="number" name="telefono" id="telefono" placeholder="Telefono" required onChange={(e)=> setTelefono(e.target.value)}/>
                <input type="email" name="emailUno" id="emailUno" placeholder="Email" required onChange={(e)=> setMailUno(e.target.value)}/>
                <input type="email" name="emailDos" id="emailDos" placeholder="Confirmación email" required onChange={(e)=> setMailDos(e.target.value)}/>
                <input type="submit" value="Enviar" onClick={prevent}/>
            </form>
        </div>
    )
}

export default Cart
