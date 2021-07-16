import React,{useContext} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {AuthContext} from '../context/authContext'

function Privateroute({component:Component, ...rest}) {

    const {currentUser} = useContext(AuthContext)

    return (
        <Route {...rest} render={props => {
          return currentUser ? <Component {...props} /> : <Redirect to='/login' />
        }}>
        </Route>
    )
}

export default Privateroute
