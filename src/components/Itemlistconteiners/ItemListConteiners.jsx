import {useState, useEffect} from "react"
import { pedirDatos } from "../../utils/utils"
import { ItemList } from "../ItemList/ItemList"


export const ItemListConteiners = () => {

    const [productos, setProductos] = useState([])

    useEffect (() => {
        pedirDatos()
        .then ((data) => {
            setProductos (data)
        })
    }, [])
    


    return (
        < ItemList productos = {productos} />
    )
} 