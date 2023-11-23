import { Link } from "../components/Link"

const Page404 = () => {
    return (
        <>
            <div>
                <h1>This is NOT fine</h1>
                <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Gif del perro de this is fine quemándose" />
            </div>

            <Link to='/'>Volver a la Home</Link>
        </>
    )
}
export default Page404