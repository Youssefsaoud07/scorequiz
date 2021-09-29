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
    
      
    <ThemeProvider theme={theme}>
      <AuthProvider>
     
     <Router>
    <div className="App">
    <Switch>
    <PrivateRoute exact path="/welcome" component={Home} />
    <Route exact path="/login" component={SignInSide} />
    <Route exact path="/" component={LandingPage} />
    <PrivateRoute exact path="/Courses" component={CourseStart} />
    </Switch>
   </div> 
    
     </Router> 
     {/* <Quiz /> */}
    
     </AuthProvider>
    </ThemeProvider>
    
  );
}

export default App;
