import { createContext, useState, useEffect } from 'react'
import json from './pizzas.json'
import { toast } from 'react-toastify'
import axios from 'axios'

export const PizzaContext = createContext()

// eslint-disable-next-line react/prop-types
const JsonProvider = ({ children }) => {
  const [data, setData] = useState(json)
  const [carro, setCarro] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(json)
      setData(response.data)
    }
    fetchData()
  }, [])

  const notify = (pizza) => toast(`Agregaste una🍕 ${pizza}`, {
    autoClose: 1000,
    pauseOnHover: true,
    theme: 'light'
  })

  const handleAddPizza = (ide) => {
    const priceData = data.find(p => p.id === ide)
    const nuevaPizza = { id: ide, cantidad: 1, total: priceData.price }
    const updatedData = [...carro]
    const updatedCarro = updatedData.concat(nuevaPizza)
    setCarro(updatedCarro)
    notify(priceData.name)
  }

  const addPizza = (ide) => {
    const priceData = data.find(p => p.id === ide)
    const carroData = carro.find(pizza => pizza.id === ide)
    carroData.cantidad += 1
    carroData.total = carroData.cantidad * priceData.price
    setCarro([...carro])
    notify(priceData.name)
  }
  const subtractPizza = (ide) => {
    const priceData = data.find(p => p.id === ide).price
    const carroData = carro.find(pizza => pizza.id === ide)
    carroData.cantidad -= 1
    carroData.total = carroData.cantidad * priceData
    setCarro([...carro])
    if (carroData.cantidad === 0) {
      deletePizza(ide)
    }
  }
  const deletePizza = (ide) => {
    const updatedCarro = carro.filter(pizza => pizza.id !== ide)
    setCarro(updatedCarro)
  }
  const deleteCarro = () => {
    setCarro([])
  }

  const findPizza = (ide) => {
    const carroData = carro.find(pizza => pizza.id === ide)
    return carroData.cantidad
  }

  return (
    <PizzaContext.Provider value={{ subtractPizza, addPizza, handleAddPizza, data, carro, findPizza, deletePizza, deleteCarro }}>
      {children}
    </PizzaContext.Provider>
  )
}
export default JsonProvider
