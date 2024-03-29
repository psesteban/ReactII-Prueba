import { useContext } from 'react'
import { PizzaContext } from '../context/ApiContext'
import { Button, Container, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Pizza = () => {
  const { data, subtractPizza, findPizza, addPizza, carro, handleAddPizza } = useContext(PizzaContext)
  const navigate = useNavigate()
  const { name } = useParams()
  const newSearch = () => {
    navigate('/')
  }
  const pizzaData = data.find(pizza => pizza.name === name)

  return (
    <Container>
      <Card className='flex-row m-3'>
        <Card.Img variant='top' src={pizzaData.img} />
        <Card.Body>
          <Card.Title className='text-center'>{name}</Card.Title>
          <Card.Text>{pizzaData.desc}</Card.Text>
          <div className='pizza-choice'>
            {carro.some(p => p.id === pizzaData.id)
              ? <span> <Button variant='danger' onClick={() => subtractPizza(pizzaData.id)}>-</Button>{findPizza(pizzaData.id)}<Button variant='success' onClick={() => addPizza(pizzaData.id)}>+</Button></span>
              : <Button variant='success' onClick={() => handleAddPizza(pizzaData.id)}>
                Agregar
                </Button>}
          </div>
          <Button variant='primary' onClick={newSearch}>
            Seguir comprando
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
export default Pizza
