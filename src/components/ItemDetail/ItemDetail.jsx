import { useState } from "react"
import { QuantitySelector } from "./QuantitySelector"
import { ColorSelector } from "./ColorSelector"

export const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState (1)
    const [color, setColor] = useState ("")


    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
            color
        }
    }
    
    return (
        <div className="conteiner-render">
            <article className="card" key={item.id}>
                <img className="imagen" src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <p className="precio-producto">${item.precio}</p>
                <p className="descripcion">{item.description}</p>
                <QuantitySelector
                cantidad={cantidad}
                stock={item.stock}
                setCantidad={setCantidad}
                />
                <ColorSelector setColor={setColor}/>
                
                <button onClick={handleAgregar} className="btn-carrito">Agregar al carrito</button>
            </article>
        </div>
    )

    
}