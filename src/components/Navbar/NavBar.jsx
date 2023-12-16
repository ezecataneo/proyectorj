import { Link } from "react-router-dom"
import { Cartwidget } from "./Cartwidget"



export const NavBar = () => {

    return (
        <header className="header">
            <div className="conteiner_header">
                <img className="logo" src="/images/logoe.jpg" alt="logo" />
                    <nav className="navbar">
                        <Link className="nav_link" to="/">Home</Link>
                        <Link className="nav_link" to="/Celulares">Celulares</Link>
                        <Link className="nav_link" to="/Televisores">Televisores</Link>
                        <Link className="nav_link" to="/Notebooks">Notebooks</Link>
                    </nav>
                    <Cartwidget/>
                </div>
        </header>
    )
    
}

