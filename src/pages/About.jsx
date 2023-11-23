import { Link } from "../components/Link"

const AboutPage = () =>{
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/57783942?v=4" alt="Foto de Leider" />
        <p>!Hola¡ Me llamo Leider Galindo y estoy crenado un clon de React Router </p>
        <Link to='/'>Ir a la home</Link>
      </div>
    </>
  )
}

export default AboutPage