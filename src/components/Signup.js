import { Link } from "react-router-dom"
import react, { useState, useEffect } from "react"


function Signup() {

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error))
    }, [])

    const [users, setUsers] = useState([])
    const [ firstname, setFirstname ] = useState('')
    const [ lastname, setLastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    function handleSignup() {
        if(!firstname || !lastname || !email || !password) {
            alert("All field is compulsory")
        }else{
            let user = { firstname, lastname, email, password }
            localStorage.setItem("user", JSON.stringify(user))
            alert("User has been updated successfuly")
        }
    }

    return (
        <div>
            <div>
                <label>Firstname</label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)}></input>
            </div>  
            <div>
                <label>Lastname</label>
                <input type="text" onChange={(e) => setLastname(e.target.value)}></input>
            </div>  
            <div>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>  
            <div>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div> <br />
            <button onClick={handleSignup}>Signup</button><br /><br />

            <Link to="/"> Go Back</Link>
        </div>
    )
}

export default Signup