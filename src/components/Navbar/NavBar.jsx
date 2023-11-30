import { Cartwidget } from "./Cartwidget"

export const NavBar = () => {

    return (
        <header className="header">
            <div className="conteiner_header">
                <img className="logo" src="/images/logoe.jpg" alt="logo" />
                    <nav className="navbar">
                        <a className="nav_link" href="">Home</a>
                        <a className="nav_link" href="">Productos</a>
                        <a className="nav_link" href="">Ofertas</a>
                    </nav>
                    <Cartwidget/>
                </div>
        </header>
    )
    
}

