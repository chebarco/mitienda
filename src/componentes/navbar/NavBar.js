import { Link, NavLink } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import  Nav from "react-bootstrap/Nav"
import  Container from "react-bootstrap/Container"
import  NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from './CartWidget'
import Logo from "../imagenes/mitienda.png"
import  "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
    return (
        <>
        <Navbar className="nav" expand="lg">
    <Container>
    <Link to="/"> <Navbar.Brand><img width="70px" height="auto" className="img-responsive" src={Logo}  alt="logo"></img> </Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item> <Link className='' to="/categoria/blancos">Chocolates Blancos</Link></NavDropdown.Item> 

<NavDropdown.Item>    <NavLink className="" activeClassName='' to="/categoria/leche">Chocolate con Leche</NavLink>      </NavDropdown.Item>   

<NavDropdown.Item>   <NavLink className="" activeClassName='' to="/categoria/especiales">Chocolate con Especiales</NavLink>      </NavDropdown.Item>                  

            <NavDropdown.Divider />
            <Link to="/cart" >  <CartWidget /></Link> 
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
           
        </>
    )
}

export default NavBar
