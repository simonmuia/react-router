import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import  Home  from './Pages/homepage/Home';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
