import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../Context'

const Logout = () => {
    const context = useContext(UserContext)
    const history = useHistory()

    const [user, setUser] = useState('')
    const loggedIn = false

    const logIn = (user) => {
        setUser({
            //we got user.user so we need ...(destruct)
            ...user,
            user: loggedIn ? true : false
        })
    }

    const logOut = () => {
        context.logOut()
        document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        setUser({
            loggedIn: false
        })
        history.push('/')
    }



    return (
        logIn,
        logOut
        // onclick={logOut}
    )

}

export default Logout