import { useContext, useEffect } from "react"
import Item from "../Item/Item"
import { ItemsContext } from "../../contexts/itemsContext"


const ItemListContainer = () => {

    const {items} =useContext(ItemsContext)
    const {conseguirItems} = useContext(ItemsContext)


    useEffect(()=>{
    conseguirItems()
    }, [] )


    return (
        <div className="container-fluid ">
        <div className="row d-flex flex-wrap justify-content-around">
            {items.map((producto)=>(
                <Item key={producto.id} producto={producto}/>
                
            ))}
        </div>
    </div>
    )
}

export default ItemListContainer
