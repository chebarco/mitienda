import {useState} from 'react'
// import { CartContext } from '../../context/CartContext';
import ItemCount from "./ItemCount";
import { Col, Row } from "react-bootstrap"
import { useCartContext } from '../../context/CartContext';
import  "./detail.css"


function ItemDetail({prod}) {
    const [count, setCount] = useState(0)

    const {cartList ,agregarAlCarrito}= useCartContext()

    function onAdd (cant){
        console.log(cant)
        agregarAlCarrito( {...prod, cantidad:cant} ) 
        // agregarAlCarrito( prod, cant ) 
    }
    
    console.log(cartList);
    return (
        
        <Row >
            <Col>                
                <div className='card w-50'>
                    <div className="container">
                        <label>{prod.title}</label>
                    </div>
                    <div className="container">
                        <img  src={prod.imagenes}  alt="foto" width="300px" />
                    </div>
                    <div className="container">
                        <p>{prod.price}</p>
                    </div>
                </div>
            </Col>
            <Col>                
                <ItemCount onAdd={onAdd} stock={10}/>      
            </Col>                           
        </Row>

       
    )
}

export default ItemDetail
