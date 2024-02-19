import AboutPage from './pages/AboutPage/AboutPage';
import './App.css';
import Footer from './pages/Footer/Footer';
import Hero from './pages/Hero/Hero';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Menu from './pages/Menu/Menu';
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
