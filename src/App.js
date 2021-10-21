import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { AuthProvider } from './context/Context';
import { createTheme,ThemeProvider } from '@material-ui/core/styles';
import SignInSide from './pages/sign';
import Home from './pages/home';
import PrivateRoute from './routes/privateRoute';

import LandingPage from './pages/LandingPage';
import Course from './pages/Course';
import Quiz from './pages/Quiz';
import Auth from './pages/auth';
import CourseStart from './pages/CourseStart';
import Blog from './pages/blog';
import CoursePage from './pages/coursepage';
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Courses from './pages/Courses';
const stripePromise = loadStripe('pk_test_51JgVuGLev35dWdL1Dq58DWoGiPNRpCD0AvjnTra9tsb96VrIdP6MsrR1m6LkbDskK8f5uAakFYsGHmu4wcyV8mLz00vL6hTACi');


const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#f44336',
    },
  },
});


function App() {
  return (
    
      <Elements stripe={stripePromise}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
     
     <Router>
    <div className="App">
    <Switch>
    <PrivateRoute exact path="/welcome" component={Home} />
    <Route exact path="/login" component={SignInSide} />
    <PrivateRoute exact path="/course" component={CoursePage} />
    <Route exact path="/" component={LandingPage} />
    <PrivateRoute exact path="/Courses" component={CourseStart} />
    <PrivateRoute exact path="/blog" component={Blog} />
    <PrivateRoute exact path="/learn" component={Courses} />
    
    </Switch>
   </div> 
    
     </Router> 
     {/* <Quiz /> */}
    
     </AuthProvider>
    </ThemeProvider>
    </Elements>
    
  );
}

export default App;
