import { collection, getDocs, doc } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../../db/firebase-config";

const CartContext = createContext()

function CartProvider (props) {
    

}

export {CartContext, CartProvider}
