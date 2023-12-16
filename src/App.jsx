import './App.css';
import './styles/styles.scss';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListConteiners }   from './components/Itemlistconteiners/ItemListConteiners';
import { Televisores }  from './components/Televisores/Televisores';
import { Notebooks } from './components/Notebooks/Notebooks';
import { Celulares } from './components/Celulares/Celulares';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';





function App() {

  return (

      <BrowserRouter>
        < NavBar/>
          <Routes>
            <Route path='/' element={< ItemListConteiners /> }/>
            <Route path='/productos/:categoryId' element={< ItemListConteiners /> }/>
            <Route path='/Televisores' element={< Televisores /> }/>
            <Route path='/Notebooks' element={< Notebooks /> }/>
            <Route path='/Celulares' element={< Celulares /> }/>
            <Route path='*' element={ <Navigate to='/'/>}/>
          </Routes>
      </BrowserRouter>
  )
  
}

export default App
