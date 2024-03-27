import { useContext } from 'react'
import { PizzaContext } from '../context/ApiContext'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

const Carrito = () => {
  const { carro, subtractPizza, addPizza } = useContext(PizzaContext)
  const navigate = useNavigate()

  return (
    <Container />
  )
}
export default Carrito
