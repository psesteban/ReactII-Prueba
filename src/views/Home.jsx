import React, { useContext } from 'react'
import { PizzaContext } from '../context/ApiContext'
import { useNavigate } from 'react-router-dom'
import { Container, Card, Col, Row, ListGroup, Button } from 'react-bootstrap'

const Home = () => {
  const { data, handleAddPizza, carro, findPizza, subtractPizza, addPizza } = useContext(PizzaContext)
  const navigate = useNavigate()

  const handleFeatureClick = (pizza) => {
    navigate(`/pizza/${pizza.name}`)
  }

  return (
    <Container>
      <Row>
        {data.map((pizza) => (
          <Col className='p-2' xs={6} md={3} key={pizza.id}>
            <Card>
              <Card.Img variant='top' src={pizza.img} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text> <strong>Ingredientes:</strong></Card.Text>
                <ListGroup variant='flush'>
                  {pizza.ingredients.map((ing) => (
                    <ListGroup.Item key={ing}>🍕{ing}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>{pizza.price}</ListGroup.Item>
                <ListGroup.Item>
                  <Button variant='primary' onClick={() => handleFeatureClick(pizza)}>
                    Detalles👀
                  </Button>
                  {carro.some(p => p.id === pizza.id)
                    ? <span> <Button variant='light' onClick={() => subtractPizza(pizza.id)}>-</Button>{findPizza(pizza.id)}<Button variant='light' onClick={() => addPizza(pizza.id)}>+</Button></span>
                    : <Button variant='success' onClick={() => handleAddPizza(pizza.id)}>
                      Agregar
                      </Button>}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
