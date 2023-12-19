import './App.css';
import './styles/styles.scss';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListConteiners }   from './components/Itemlistconteiners/ItemListConteiners';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner';






function App() {

  return (

      <BrowserRouter>
        < NavBar/>
          <Routes>
            <Route path='/productos' element={< ItemListConteiners /> }/>
            <Route path='/productos/:categoryId' element={< ItemListConteiners /> }/>
            <Route path='/item/:itemId' element={< ItemDetailConteiner /> }/>
            
            <Route path='*' element={ <Navigate to='/productos'/>}/>
          </Routes>
      </BrowserRouter>
  )
  
}

export default App
