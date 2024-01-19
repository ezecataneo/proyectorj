import {useState, useEffect} from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"



export const ItemListConteiners = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()


    useEffect (() => {
        const productosRef = collection(db, 'productos')
        const docRef = categoryId
                    ? query (productosRef, where('category', '==', categoryId))
                    :productosRef

        getDocs(docRef)
            .then ((querySnapshot) => {
                const docs = querySnapshot.docs.map( doc=> {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }) 

                setProductos(docs)
            })
    }, [categoryId])
    


    return (
        < ItemList productos = {productos} />
    )
} 