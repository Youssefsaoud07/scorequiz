import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Landing from './components/landing';
import Heros from './components/heros';
import Champs from './components/champs';
import Gardians from './components/gardians';
import Howworks from './components/howworks';
import Contrib from './components/contributors';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
     <Header />
     <Landing />
     <Heros />
     <Champs />
     <Gardians />
     <Howworks />
     <Contrib />
     <Footer />

    </div>
  );
}

export default App;
