import React,{useState,useEffect,useContext} from 'react'
import SignInSide from '../pages/sign';
import Home from '../pages/home';
import PrivateRoute from './privateRoute';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import Course from '../pages/Course';
import Auth from '../pages/auth';
import { AuthContext } from '../context/Context';

const RouteCore = () => {
    const {currentUser}= useContext(AuthContext)
    
  const [user, setUser] = useState(currentUser);
  console.log('fireuser',user)
  //fetch user

  useEffect(() => {
       
    if (currentUser) {
      var uid = currentUser.uid;
      console.log(`User has signed in with UID: ${uid}`)
      setUser(currentUser)
      
    } else {
      // User is signed out
      console.log('User is not signed in.')
      setUser(null)
    }
  
}, [])
    return (
        
     <Router>
      
      <div >
      <Auth user={user}/>
      <div className="Content">
      <Switch>
      <PrivateRoute exact path="/welcome" component={Home} />
      <Route exact path="/login" component={SignInSide} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/courses" component={Course} />
      </Switch>
      </div>
     </div>
       </Router>
        
    )
}

export default RouteCore
