import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from "../../helpers/getFetch"
import ItemList from "../ItemList/ItemList"

function ItemListContainer( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    const [bool, setBool] = useState(true)
    // const [items, setItems] = useState([])

    const { idCate } = useParams() 
    
    
    useEffect(() => {
        if (idCate) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate))) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))            
        } else {
            getFetch
            .then(resp => setProductos(resp)) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))               
        }
    }, [idCate]) 
    
    
   //ejemplo de evento
   const handleClick=(e)=>{
        e.preventDefault() 
        setBool(!bool)
    }

    const handleAgregar=()=>{
        setProductos([
            ...productos,
            { id: "8", name: "Gorra 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
        ])
    }
    
    console.log('itemListContainer')
    console.log(productos)
    console.log(bool)
    // [] => retorna otro array [<li>1</li>,....]
    
    return (
        <div>
          
               <ItemList productos={productos} />
        
            
        </div>
    )
}

export default ItemListContainer
