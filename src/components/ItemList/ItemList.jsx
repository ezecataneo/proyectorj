import { ItemCard } from "../ItemCard/ItemCard";



export const ItemList = ({productos}) => {

    return (
        <section className="conteiner_item">
            <h1 className="title_item">Productos Electronicos</h1>
            <hr/>
            
            { productos.map((item) => (
                <ItemCard item={item}/>
            ))}
        </section>
    );
};

