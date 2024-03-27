import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import React, { useContext } from 'react'
import { PizzaContext } from '../context/ApiContext'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavbarPizza () {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')
  const { carro } = useContext(PizzaContext)

  return (
    <>
      <Navbar expand='lg' bg='dark'>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        {' - '}
        <NavLink className={setActiveClass} to='/carrito' />carro
        <>🛒<sup>{carro.length}</sup></>
      </Navbar>
    </>
  )
}
