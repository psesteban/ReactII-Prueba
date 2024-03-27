import { useContext } from 'react'
import { PizzaContext } from '../context/ApiContext'
import { Button, Container, Card, ListGroup } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Pizza = () => {
  const { data } = useContext(PizzaContext)
  const navigate = useNavigate()
  const { name } = useParams()
  const newSearch = () => {
    navigate('/')
  }
  const pizzaData = data.find(pizza => pizza.name === name)

  return (
    <Container>
      <Card className='flex-row'>
        <Card.Img variant='top' src={pizzaData.img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{pizzaData.desc}</Card.Text>
          <Button variant='primary' onClick={newSearch}>
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
export default Pizza
