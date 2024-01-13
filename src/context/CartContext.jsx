import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([])

    const addToCart = (item) => {
  setCart ([...cart, item])
   }

    const isInCart = (id) => {
    return cart.some (item => item.id === id)
   }

    const clearCart = () => {
    setCart ([])
   }

   const itemsInCart = () => {
    return cart.reduce( (acumulador, item) => acumulador + item.cantidad, 0 )
   }

   const totalCart = () => {
    return cart.reduce( (acumulador, item) => acumulador + (item.cantidad*item.precio), 0 )
   }



    return (
        <CartContext.Provider value={{
            cart,
            isInCart,
            addToCart,
            clearCart,
            itemsInCart,
            totalCart
        }}>

            {children}

        </CartContext.Provider>
    )
}