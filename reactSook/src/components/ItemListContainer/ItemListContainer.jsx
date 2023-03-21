import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "../Item/Item"


const ItemListContainer = ({products}) => {


    return (
        <div className="container-fluid ">
            <div className="row d-flex flex-wrap justify-content-around"> 
            {products.map((producto)=>(
                <Item key={producto.id} producto={producto}/>
            ))}
            </div>
        </div>
    )
}

export default ItemListContainer
