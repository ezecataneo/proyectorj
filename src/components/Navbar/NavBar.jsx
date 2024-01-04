import { Link } from "react-router-dom"
import { Cartwidget } from "./Cartwidget"




export const NavBar = () => {

    return (
        <header className="header">
            <div className="conteiner_header">
                <img className="logo" src="/images/logoe.jpg" alt="logo" />
                    <nav className="navbar">
                        <Link className="nav_link" to="/productos">Home</Link>
                        <Link className="nav_link" to="/productos/Celulares">Celulares</Link>
                        <Link className="nav_link" to="/productos/Televisores">Televisores</Link>
                        <Link className="nav_link" to="productos/Notebooks">Notebooks</Link>
                    </nav>
                    <Cartwidget/>
                </div>
        </header>
    )
    
}

