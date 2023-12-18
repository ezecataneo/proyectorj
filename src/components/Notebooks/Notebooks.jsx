export const Notebooks = ({productos}) => {

    return (
        <section className="conteiner_item">
            <h1 className="title_item">Notebooks</h1>
            <hr/>
            
            { productos.map((item) => (
                <ItemCard item={item}/>
            ))}
        </section>
    );
};