import React, { useContext } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Publication from './pages/publications'
// import ShareTender from './pages/share-tender'
import Sign_up_Page from './pages/sign_up'
// import Sign_in_Page from './pages/sign_in'
// import ProfilePage from './pages/pubclication'
import UserContext from './Context'

const Navigation = () => {
    // const context = useContext(UserContext)
    // const loggedIn = context.user.loggedIn

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publication} />
             
                <Route path="/sign_up" >
                    <Sign_up_Page />
                </Route>

                {/* <Route path="/sign_in" >
                    <Sign_in_Page />

                </Route> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation
