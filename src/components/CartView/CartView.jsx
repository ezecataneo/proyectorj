import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"
import { Link } from "react-router-dom"


export const CartView = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext)
    const user = useContext (UserContext)

    return (
        <section>
            <h2>Productos de tu compra</h2>
            <hr />
            <ul>
                {
                    cart.map((item) =>(
                        <li>
                            <img src={item.img} alt="imgproducto" />
                            <div>
                                <h3>{item.name}</h3>
                                <p>${item.precio} por unidad</p>
                                <p>cantidad : {item.cantidad}</p>
                                <hr />
                            </div>
                        </li>
                        
                    ))
                }
            </ul>
            <h4>TOTAL DE LA COMPRA: ${totalCart()}</h4>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to ="/checkout">Finalizar mi compra</Link>
        </section>
    )
}