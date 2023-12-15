
export const ItemCard = ({item}) => {
    
    return (
        <article className="card" key={item.id}>
            <img className="imagen" src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.precio}</p>
            <p>{item.description}</p>
            <button>ver mas</button>
        </article>
    )
}