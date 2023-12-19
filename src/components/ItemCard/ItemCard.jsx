import { Link } from "react-router-dom"

export const ItemCard = ({item}) => {
    
    return (
        <div>
            <article className="card" key={item.id}>
                <img className="imagen" src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <p className="precio-producto">${item.precio}</p>
                <p className="descripcion">{item.description}</p>
                <button className="btn-vermas">
                    <Link to={`/item/${item.id}`} >ver mas</Link>
                </button>
            </article>
        </div>
    )
}