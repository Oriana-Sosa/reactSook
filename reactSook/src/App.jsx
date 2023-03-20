import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { useEffect, useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'


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
    </Routes>
    </>
  )
}

export default App
