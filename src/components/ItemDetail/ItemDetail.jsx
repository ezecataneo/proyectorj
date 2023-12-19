
export const ItemDetail = ({item}) => {
    
    return (
        <div className="cards">
            <article className="card" key={item.id}>
                <img className="imagen" src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <p>${item.precio}</p>
                <p>{item.description}</p>
                <button className="btn-carrito">Agregar al carrito</button>
            </article>
        </div>
    )

    
}