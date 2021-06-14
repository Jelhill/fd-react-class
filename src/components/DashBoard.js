import { Link } from "react-router-dom"

function DashBoard() {

    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div>
            <h1> Hello {user.firstname} Welcome to DashBoard Page</h1>
        </div>
    )
}

export default DashBoard