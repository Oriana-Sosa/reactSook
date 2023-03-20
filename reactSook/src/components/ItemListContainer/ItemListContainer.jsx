import Item from "../Item/Item"


const ItemListContainer = ({products}) => {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            <div className="row"> 
            {products.map((producto)=>(
                <Item key={producto.id} producto={producto}/>
            ))}
            </div>
        </div>
    )
}

export default ItemListContainer
