import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import  Home  from './Pages/homepage/Home';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Posts from './Pages/blog/Posts';
import Post from './Pages/blog/Post';
import NotFound from './Pages/notfound/NotFound';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='blog' element={<Posts/>}/>
          {/* <Route path='blog/:id' element={<Post/>}/> */}
          {/* nested routes */}
          <Route path='/blog'>
            <Route path=':id' element={<Post/>}/>
            </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
