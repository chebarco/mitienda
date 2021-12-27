import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function Footer() {
    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nombre y Apellido</Form.Label>
    <Form.Control type="datos" placeholder="Nombre y apellido" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" className="input"/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Suscribirse
  </Button>
</Form>
        </div>
    )
}

export default Footer
