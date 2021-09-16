import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from './context/Context';
import { createTheme,ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import SignInSide from './pages/sign';
import Home from './pages/home';
import PrivateRoute from './routes/privateRoute';
import Auth from './pages/auth';
import LoginPage from './components/loginPage';
import Landing from './components/landing';
import LandingPage from './pages/LandingPage';

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
    <AuthProvider>
      
    <ThemeProvider theme={theme}>
    
    
    
    <Router>
    <div className="App">
    <PrivateRoute exact path="/" component={Home} />
    <Route exact path="/login" component={SignInSide} />
    <Route exact path="/welcome" component={LandingPage} />
   </div>
     </Router>
     
    </ThemeProvider>
   
    </AuthProvider>
  );
}

export default App;
