import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Welcome to Landing Page</h1>
            <h4>Please click any of the below</h4>
            <Link to="/signup">Signup</Link><br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home