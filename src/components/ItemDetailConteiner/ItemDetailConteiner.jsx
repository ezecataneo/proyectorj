import {useState, useEffect} from "react"
import { pedirDatos } from "../../utils/utils"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailConteiner = () => {

    const [item, setItem] = useState([])

    const  {itemId} = useParams ()

    useEffect (() => {
        pedirDatos()
        .then ((data) => {
            setItem (data.find(prod => prod.id === Number(itemId)))
            //setProductos (item)
        })
    }, [])

    return (
        < ItemDetail item= {item} />
    )
}