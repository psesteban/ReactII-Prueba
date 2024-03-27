import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JsonProvider from './context/ApiContext'
import Carrito from './views/Carrito'
import Pizza from './views/Pizza'
import Home from './views/Home'
import NotFound from './views/Notfound'
import './App.css'
import NavbarPizza from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <JsonProvider>
          <NavbarPizza />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/carrito'
              element={<Carrito />}
            />
            <Route
              path='/pizza/:name'
              element={<Pizza />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </JsonProvider>
      </BrowserRouter>

    </>
  )
}
export default App
