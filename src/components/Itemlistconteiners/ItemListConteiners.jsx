import {useState, useEffect} from "react"
import { pedirDatos } from "../../utils/utils"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"



export const ItemListConteiners = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()


    useEffect (() => {
        pedirDatos()
        .then ((data) => {
            const items = categoryId
                            ? data.filter( prod => prod.category === categoryId )
                            : data
            setProductos (items)
        })
    }, [categoryId])
    


    return (
        < ItemList productos = {productos} />
    )
} 