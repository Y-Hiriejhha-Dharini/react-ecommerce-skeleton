import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import NotFound from './Pages/NotFound';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Categories from './Pages/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
