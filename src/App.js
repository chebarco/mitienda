import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar'
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './componentes/itemdetailcontainer/ItemDetailContainer'
import CartContextProvider from "./context/CartContext"
import Cart from "./componentes/cart/Cart"
import Footer from './componentes/Footer/Footer'



function App() { 
    
    return (
        <CartContextProvider>
            <BrowserRouter>
                <center>
                    <NavBar/>
                    <Routes>
                        <Route 
                            exact
                            path="/" 
                            element={ <ItemListContainer/>} 
                        />
                        <Route 
                            exact
                            path="/categoria/:idCate" 
                            element={ <ItemListContainer/>} 
                        />                  
                        <Route 
                            exact
                            path="/detalle/:id" 
                            element={ <ItemDetailContainer></ItemDetailContainer> } 
                        />                  
                        <Route 
                            exact
                            path="/cart" 
                            element={ <Cart></Cart>} 
                        />   
                    
                        
                    </Routes> 
                    <Footer></Footer>          
                </center>
            </BrowserRouter>
        </CartContextProvider>          
       
    )
}

export default App
