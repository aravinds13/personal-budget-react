import AboutPage from './AboutPage/AboutPage';
import './App.css';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import Menu from './Menu/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className='mainContainer'>
        <Routes>
          <Route path='/about' element={ <AboutPage/> }/>
          <Route path='/login' element= { <LoginPage/> }/>
          <Route path='/' element = { <HomePage/> }/>
        </Routes>
      </div>
      <Footer/> 
    </Router>
  );
}

export default App;
