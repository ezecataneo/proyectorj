import './App.css';
import './styles/styles.scss';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListConteiners }   from './components/Itemlistconteiners/ItemListConteiners';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner';
import { CartProvider } from './context/CartContext';
import { CartView } from './components/CartView/CartView';



function App() {

  return (

    <CartProvider>
      <BrowserRouter>
        < NavBar/>
          <Routes>
            <Route path='/productos' element={< ItemListConteiners /> }/>
            <Route path='/productos/:categoryId' element={< ItemListConteiners /> }/>
            <Route path='/cart' element={< CartView /> }/>
            <Route path='/item/:itemId' element={< ItemDetailConteiner /> }/>
            
            <Route path='*' element={ <Navigate to='/productos'/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>

  )
  
}

export default App
