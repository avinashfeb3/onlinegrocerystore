import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About} from "./pages/About/About";
import { Product} from "./pages/Product/Product";
import { Gallery} from "./pages/Gallery/Gallery";
import { Contact} from "./pages/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

          {/* Other routes for your application */}
        <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
