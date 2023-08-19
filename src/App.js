import Navbar from "./component/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./component/home";
import Product from "./component/Product/product";
import Contact from "./component/contact";
import About from "./component/Product/about";
import Electronics from "./component/Product/Electronics";
import Jewelery from "./component/Product/Jewelery";
import MensClothing from "./component/Product/mensClothing";
import WomenClothing from "./component/Product/mensClothing";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>

        <Route path="" element={<Navigate to='electronics'/>}/>
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="mensClothing" element={<MensClothing />} />
          <Route path="womensClothing" element={<WomenClothing />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
