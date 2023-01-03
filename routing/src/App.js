import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import Home from './components/Home';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Privacy from './components/Privacy';
import NotFound from './components/NotFound';
function App() {
  return (
    
    <Router>
    <div >
      <TopMenu />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>} />
        <Route path="contact-us" element={<ContactUs/>} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
