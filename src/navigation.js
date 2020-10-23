import React, { useContext } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import "./components/fontAwesomeIcons"

import Publication from './pages/publications'
import MakePostPage from './pages/make-post'
import Sign_up_Page from './pages/sign_up'
import Sign_in_Page from './pages/sign_in'
import ProfilePage from './pages/profile'
import UserContext from './Context'

import Logout from './pages/logout'

const Navigation = () => {
    const context = useContext(UserContext)
    const loggedIn = context.user.loggedIn

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publication} />

                <Route path="/logout/:userid">
                    {loggedIn ? (<Logout />) : (<Redirect to="/sign_in" />)} 
                </Route>

                <Route path="/make_post">
                    {loggedIn ? (<MakePostPage />) : (<Redirect to="/sign_in" />)}
                </Route>

                <Route path="/sign_up" >
                    {loggedIn ? (<Redirect to="/" />) : (<Sign_up_Page />)}
                </Route>

                <Route path="/sign_in" >
                    {loggedIn ? (<Redirect to="/" />) : (<Sign_in_Page />)}
                </Route>

                <Route path="/profile/:userid">
                    {loggedIn ? (<ProfilePage />) : (<Redirect to="sign_in" />)}
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation
