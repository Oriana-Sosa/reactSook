import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path='productos/:id' element={<ItemDetail/>} />
      <Route path='categoria/:categoria' element={<ItemDetailContainer/>} />
      <Route path='categoria/:categoria/:id' element={<ItemDetail/>} />
    </Routes>
    

    </>
  )
}

export default App
