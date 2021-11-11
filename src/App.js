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


import Courses from './pages/Courses';
import CoursePages from './pages/CoursePages';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';



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
    <PrivateRoute exact path="/course" component={CoursePages} />
    <Route exact path="/" component={LandingPage} />
    <PrivateRoute exact path="/Courses" component={Quiz} />
    <PrivateRoute exact path="/blog" component={Blog} />
    <PrivateRoute exact path="/learn" component={Courses} />
    <PrivateRoute exact path="/about-us" component={AboutUs} />
    <PrivateRoute exact path="/blog/id" component={BlogPage} />
    <PrivateRoute exact path="/course/:id" component={CoursePages} />
    
    </Switch>
   </div> 
    
     </Router> 
     {/* <Quiz /> */}
    
     </AuthProvider>
    </ThemeProvider>
   
    
  );
}

export default App;
