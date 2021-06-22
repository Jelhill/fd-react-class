export function getFirstname(value) {
    return {
        type: "UPDATE_FIRSTNAME",
        value
    }
}

export function getLastname(value) {
    return {
        type: "UPDATE_LASTNAME",
        value
    }
}

export function getEmail(value) {
    return {
        type: "UPDATE_EMAIL",
        value
    }
}

export function getPassword(value) {
    return {
        type: "UPDATE_PASSWORD",
        value
    }
}
