import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import { AuthContext } from '../context/Context'

const PrivateRoute = ({componenet: RouteComponent,...rest}) => {
    const {CurrentUser}=useContext(AuthContext)
    return (
        <Route 
        {...rest}
        render={routeProps=>
        !!CurrentUser?(
            <RouteComponent {...routeProps} />
        ):(
            <Redirect to={'/login'} />
        )
      }
        />
    )
}

export default PrivateRoute
