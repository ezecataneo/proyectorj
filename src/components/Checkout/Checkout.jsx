import { useContext, useState } from "react"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"

 export const Checkout = () => {

    const { cart, totalCart, clearCart } = useContext (cartContex)

    const [values, setValues] = useState ({
        nombre:"",
        direccion:"",
        email:""
    })

    const [ oredrId, setOrderId ] = useState(null)

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            cliente: values,
            item: cart,
            total: totalCart(),
            fecha: new Date()
        }

        const ordenRef = collection(db,"orden");
        addDoc(ordenRef,orden)
            .then( (doc) => {
                setOrderId(doc.id)
                clearCart()
            })
    }

    if (orderId) {
        return (
        <div>
            <h2>Gracias por tu compra</h2>
            <hr />
            <p>Tu codigo de orden es: {oredrId}</p>
        </div>
        )
    }



    return (
        <div>
        <h2>Checkout</h2>
        <hr />
        <h3>Ingresa tus datos</h3>
        <form onSubmit= {handleSubmit}>
            <input type="text" value={values.nombre} onChange={handleImputChange} name="nombre"  placeholder="Nombre" />

            <input type="text" value={values.direccion} onChange={handleImputChange} name="direccion"  placeholder="Direccion" />

            <input type="email" value={values.email} onChange={handleImputChange} name="email" placeholder="Email" />

            <button type="submit">Enviar</button>
        </form>
        </div>
    )
}