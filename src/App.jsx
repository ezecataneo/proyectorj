import './App.css'
import './styles/styles.scss'
import { NavBar } from './components/Navbar/NavBar'
import { ItemListConteiners } from './components/Itemlistconteiners/ItemListConteiners'



function App() {

  return(
    <>
        < NavBar/>
        < ItemListConteiners props="Productos Disponibles"/>
      </>
  )
  
}

export default App
