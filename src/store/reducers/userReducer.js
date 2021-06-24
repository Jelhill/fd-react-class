const initialState = {
    name: "Jude",
    firstname: "",
    lastname: "",
    email: "", 
    password: ""
}


function userReducer(state = initialState, action){
    const newState = { ...state }

    if(action.type === "UPDATE_FIRSTNAME") {
        console.log(action.value)
        newState.firstname = action.value
        console.log(newState.firstname)
    }
    if(action.type === "UPDATE_LASTNAME") {
        newState.lastname = action
    }
    if(action.type === "UPDATE_EMAIL") {
        newState.email = action.value
    }
    if(action.type === "UPDATE_PASSWORD") {
        newState.password = action.value
    }

    return newState
}

export default userReducer
