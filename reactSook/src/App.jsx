import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { useEffect, useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../src/products/productos.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer products={products} /> } />
      <Route path='productos/:id' element={<ItemDetail/>} />
      <Route path='categoria/:categoria' element={<ItemDetailContainer/>} />
    </Routes>
    </>
  )
}

export default App
