
export const ItemDetail = ({item}) => {
    
    return (
        <div className="conteiner-render">
            <article className="card" key={item.id}>
                <img className="imagen" src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <p className="precio-producto">${item.precio}</p>
                <p className="descripcion">{item.description}</p>
                <button className="btn-carrito">Agregar al carrito</button>
            </article>
        </div>
    )

    
}