import Products from "./components/products/Products";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";

function App() {
 
  return (
    <div>
    <Router>
     <Navbar/>
    <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/product/:productId" element={<ProductPage/>} />
      </Routes> 
      <Footer/>
  </Router> 
    </div> 
  );
}

export default App;
