import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import json from './pizzas.json'

export const PizzaContext = createContext()

// eslint-disable-next-line react/prop-types
const JsonProvider = ({ children }) => {
  const [data, setData] = useState(json)
  const [carro, setCarro] = useState([])

  const handleAddPizza = (ide) => {
    const priceData = data.find(p => p.id === ide).price
    const nuevaPizza = { id: ide, cantidad: 1, total: priceData }
    const updatedData = [...carro]
    const updatedCarro = updatedData.concat(nuevaPizza)
    setCarro(updatedCarro)
    console.log(carro)
  }

  const addPizza = (ide) => {
    const priceData = data.find(p => p.id === ide).price
    const carroData = carro.find(pizza => pizza.id === ide)
    carroData.cantidad += 1
    carroData.total = carroData.cantidad * priceData
    setCarro([...carro])
  }
  const subtractPizza = (ide) => {
    const priceData = data.find(p => p.id === ide).price
    const carroData = carro.find(pizza => pizza.id === ide)
    carroData.cantidad -= 1
    carroData.total = carroData.cantidad * priceData
    setCarro([...carro])
    if (carroData.cantidad === 0) {
      const updatedCarro = carro.filter(pizza => pizza.id !== ide)
      setCarro(updatedCarro)
    }
  }

  const findPizza = (ide) => {
    const carroData = carro.find(pizza => pizza.id === ide)
    return carroData.cantidad
  }

  return (
    <PizzaContext.Provider value={{ subtractPizza, addPizza, handleAddPizza, data, carro, findPizza }}>
      {children}
    </PizzaContext.Provider>
  )
}
export default JsonProvider
