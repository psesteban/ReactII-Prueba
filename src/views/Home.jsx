import React, { useContext } from 'react'
import { PizzaContext } from '../context/ApiContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Container, Card, Col, Row, ListGroup, Button, Image } from 'react-bootstrap'
import homeImage from '../assets/OIG4.webp'

const Home = () => {
  const { data, handleAddPizza, carro, findPizza, subtractPizza, addPizza } = useContext(PizzaContext)
  const navigate = useNavigate()

  const handleFeatureClick = (pizza) => {
    navigate(`/pizza/${pizza.name}`)
  }

  return (
    <Container>
      <Image className='home' src={homeImage} fluid />
      <Row>
        {data.map((pizza) => (
          <Col className='p-2' xs={6} md={2} key={pizza.id}>
            <Card>
              <Card.Img variant='top' src={pizza.img} />
              <Card.Body>
                <Card.Title className='text-center'>{pizza.name}</Card.Title>
                <ListGroup variant='flush'>
                  <strong>🍴Ingredientes:</strong>
                  {pizza.ingredients.map((ing) => (
                    <ListGroup.Item className='p-0' key={ing}>🍕{ing}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>
                  <h1 className='price'>
                    Precio:🏷️{pizza.price.toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP'
                  })}
                  </h1>
                </ListGroup.Item>
                <ListGroup.Item className='buttons'>
                  <Button variant='primary' onClick={() => handleFeatureClick(pizza)}>
                    Detalles
                  </Button>
                  {carro.some(p => p.id === pizza.id)
                    ? <span> <Button variant='danger' onClick={() => subtractPizza(pizza.id)}>-</Button>{findPizza(pizza.id)}<Button variant='success' onClick={() => addPizza(pizza.id)}>+</Button></span>
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
