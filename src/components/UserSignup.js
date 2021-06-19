import { Link } from "react-router-dom"
import react, { useState, useEffect } from "react"
import { connect } from "react-redux"

function UserSignup(props) {
    function handleSignup() {

    }

    return (
        <div>
            <h2>{props.person}</h2>
            <div>
                <label>Firstname</label>
                <input type="text" ></input>
            </div>  
            <div>
                <label>Lastname</label>
                <input type="text" ></input>
            </div>  
            <div>
                <label>Email</label>
                <input type="email"></input>
            </div>  
            <div>
                <label>Password</label>
                <input type="password" ></input>
            </div> <br />
            <button onClick={handleSignup}>Signup</button><br /><br />

            <Link to="/"> Go Back</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { userReducer } = state
    return {
        person: userReducer.name
    }
}

const mapDispatchToProps = () => {
    return {

    }
}   


export default connect(mapStateToProps, mapDispatchToProps)(UserSignup)