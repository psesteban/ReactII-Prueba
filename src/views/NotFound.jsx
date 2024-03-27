import errorImage from '../assets/error404.jpg'

const NotFound = () => {
  return (
    <div className='container text-center'>
      <h1>¡Oh, no!</h1>
      <p>Parece que la página que estás buscando no existe aún.</p>
      <img src={errorImage} alt='404 pokemon' width='350' />
      <p>No te preocupes, puedes volver a la página principal y empezar de nuevo.</p>
      <a href='/' className='btn btn-primary'>Volver a casa</a>
    </div>
  )
}

export default NotFound
