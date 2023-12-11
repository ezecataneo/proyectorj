import {useState, useEffect} from "react"

const MOCK_DATA = [
    {
        id: 1,
        name: 'producto 1',
        img : "",
        precio: 270.000,
        description : 'SMART LED TV SAMSUNG 43 PULGADAS FULL HD UN43T5300AGCZB'
    }
    
]  


export const ItemListConteiners = ({props}) => {

    const [productos, setProductos] = useState([])

    

    const pedirDatos = () => {
        return promesa = new Promise ((resolve,reject) => {
            setTimeout (() => {
                resolve (MOCK_DATA)
        
            },3000)
    })

}

    pedirDatos()
        .then ((data) => {
            productos (data)
        })


    return (
        <section className="conteiner_item">
            <h1 className="title_item">{props}</h1>
            <hr/>
            <p>{productos.length > 0 &&productos[0].name}</p>
        </section>
    )
} 