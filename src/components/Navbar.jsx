import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { useContext } from 'react'
import { PizzaContext } from '../context/ApiContext'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavbarPizza () {
  const { carro } = useContext(PizzaContext)

  return (
    <Nav variant='pills' defaultActiveKey='/'>
      <strong>🍕Pizzería Mamma Mia! <i>to the hoi polloi style</i></strong>
      <Nav.Item>
        <NavLink to='/'>
          <strong>Home</strong>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/carrito'>
          {carro.reduce((sum, pizza) => sum + pizza.total, 0).toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP'
          })}  🛒<sup>{carro.reduce((sum, pizza) => sum + pizza.cantidad, 0)}</sup>!
        </NavLink>
      </Nav.Item>

    </Nav>

  )
}
