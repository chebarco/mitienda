import { useCartContext } from "../../context/CartContext"
import "./cart.css"


function Cart() {

    const {  cartList, borrarCarrito  } = useCartContext()

    return (
        <div>
            {  cartList.map(prod=> <li>Cantidad {prod.cantidad} de {prod.title} </li>) }
            <button onClick={borrarCarrito} >Vaciar Carrito</button>
        </div>
    )
}

export default Cart
