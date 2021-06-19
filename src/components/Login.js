import { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

function Login(props) {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")


    function handleLogin() {
        if(!email || !password ) {
            alert("Please enter correct credentials")
        }else{
            const user = JSON.parse(localStorage.getItem("user"))
            if(email !== user.email || password !== user.password) {
                return alert("email/password is incorrect")
            }
            props.history.push(`/dashboard/${user.firstname}`)
        }
    } 


    return (
        <div>
            <h1>{props.person}</h1>
            <div>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>  
            <div>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div> <br />

            <button onClick={handleLogin}>Login</button><br /><br />
            <Link to="/"> Go Back</Link>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        person: state.userReducer.name
    }
}
export default connect(mapStateToProps)(Login)