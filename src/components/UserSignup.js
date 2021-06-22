import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getFirstname, getLastname, getEmail, getPassword } from "../store/actions/userActions"

function UserSignup(props) {
    function handleSignup() {

    }

    return (
        <div>
            <div>
                <h1>{props.firstname}</h1>
                <label>Firstname</label>
                <input type="text" name="firstname" onChange={(e) => props.getFirstname(e.target.value)}></input>
            </div>  
            <div>
                <label>Lastname</label>
                <input type="text" name="lastname" onChange={(e) => props.getLastname(e.target.value)}></input>
            </div>  
            <div>
                <label>Email</label>
                <input type="email" name="email" onChange={(e) => props.getEmail(e.target.value)}></input>
            </div>  
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={(e) => props.getPassword(e.target.value)}></input>
            </div> <br />
            <button onClick={handleSignup}>Signup</button><br /><br />

            <Link to="/"> Go Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { userReducer } = state
    
    return {
        firstname: userReducer.firstname,
        lastname: userReducer.lastname,
        email: userReducer.email,
        password: userReducer.password,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFirstname: (value) => dispatch(getFirstname(value)),
        getLastname: (value) => dispatch(getLastname(value)),
        getEmail: (value) => dispatch(getEmail(value)),
        getPassword: (value) => dispatch(getPassword(value)),
    }
}   


export default connect(mapStateToProps, mapDispatchToProps)(UserSignup)