import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"



export const Cartwidget = () => {
    
    const { itemsInCart } = useContext (CartContext)

    return (
        < Link to="/cart" className="num" href="#"><img className="carrito" src="/images/carrito.png" alt="carrito" />{itemsInCart()}</Link>
    )
}