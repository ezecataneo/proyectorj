import { ItemCard } from "../ItemCard/ItemCard";



export const ItemList = ({productos}) => {

    return (
    <>
        <h1 className="title_item">Productos Electronicos</h1>
        <hr/>
            <section className="conteiner_item">
            
            
            
            { productos.map((item) => (
                <ItemCard item={item}/>
            ))}
            </section>
    </>
    );
};

