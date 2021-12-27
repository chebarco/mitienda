import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import {collection, doc, getDoc, getFirestore, getDocs} from "firebase/firestore"

function ItemListContainer( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)


    const [bool, setBool] = useState(true)
    // const [items, setItems] = useState([])

    const { idCate } = useParams() 
    
    
    //useEffect(() => {
       // if (idCate) {
       //     getFetch
       //     .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate))) 
       //     .catch(err => console.log(err))
       //     .finally(()=>setLoading(false))            
       // } else {
       //     getFetch
        //    .then(resp => setProductos(resp)) 
        //    .catch(err => console.log(err))
       //     .finally(()=>setLoading(false))               
       // }
    //}, [idCate]) 
    
    
useEffect(() =>{
    const db = getFirestore ()
    const queryCollection = collection (db, "item")
    getDocs(queryCollection)
    .then(resp => setProductos(resp.docs.map( prod=> ({id: prod.id, ...prod.data()}))))
    .finally(()=> setLoading(false))
}, [])
    
    
    
    return (
        <div>
          
               <ItemList productos={productos} />
        
            
        </div>
    )
}

export default ItemListContainer
