import React from 'react'

const UserContext = React.createContext({
    email: null,
    logIn: () => {},
    logOut: () => {}
})

export default UserContext