import { Link } from "../components/Link"

const HomePage = () => {
  return (
    <>
      <h1>Router</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  )
}

export default HomePage