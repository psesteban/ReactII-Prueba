import { useContext, useState } from 'react'
import { PizzaContext } from '../context/ApiContext'
import { Container, Row, Col, Card, ListGroup, Button, Image } from 'react-bootstrap'
import Swal from 'sweetalert2'
import giff from '../assets/giphy.gif'

const Carrito = () => {
  const { carro, subtractPizza, addPizza, deletePizza, findPizza, data, deleteCarro } = useContext(PizzaContext)
  const [succesPay, setSuccesPay] = useState(false)
  const handlePay = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra realizada con éxito',
      showConfirmButton: false,
      timer: 2000
    })
    deleteCarro()
    setSuccesPay(true)
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2 className='m-3'>Carrito de compras</h2>
          {carro.length === 0
            ? (<p>Tu carrito está: {succesPay ? <p> Llegando a tu casa <Image src={giff} /></p> : <p>Vacio😮 <a href='/' className='btn btn-primary'> Comprar unas Pizzas</a></p>} </p>)
            : (
              <Card>
                <ListGroup variant='flush'>
                  {carro.map((pizza) => (
                    <ListGroup.Item key={pizza.id}>
                      <Row>
                        <Col xs={2}>
                          <img src={data.find(p => p.id === pizza.id).img} alt={pizza.id} width='100%' />
                        </Col>
                        <Col xs={7}>
                          {data.find(p => p.id === pizza.id).name}
                          <br />
                          sub {carro.find(p => p.id === pizza.id).total.toLocaleString('es-CL', {
                            style: 'currency',
                            currency: 'CLP'
                          })}
                        </Col>
                        <Col xs={3}>
                          <Button variant='warning' onClick={() => subtractPizza(pizza.id)}>-</Button>
                          {findPizza(pizza.id)}
                          <Button variant='success' onClick={() => addPizza(pizza.id)}>+</Button>
                          <Button variant='danger' onClick={() => deletePizza(pizza.id)}>✖️</Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Card.Footer>
                  <Row>
                    <Col className='pay' xs={6}>
                      <strong>Total: </strong> 💳{carro.reduce((sum, pizza) => sum + pizza.total, 0).toLocaleString('es-CL', {
                        style: 'currency',
                        currency: 'CLP'
                      })}
                      <Button className='m-2' variant='info' onClick={handlePay}>Pagar</Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              )}
        </Col>
      </Row>
    </Container>
  )
}
export default Carrito
