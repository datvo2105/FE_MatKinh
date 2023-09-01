import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/FAQs";
import Notfound from "./pages/Notfound";
import Layouts from "./layouts/Layouts";

import Homepage from "./components/Home/Home";
import Blogpage from "./components/Blog/ListBlog";
import SingleBlog from "./components/Blog/SingleBlog";
import Shoppage from "./components/Shop/Shop";
import SingleProduct from "./components/Shop/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts content={<Homepage />} />}></Route>
        <Route
          path="/shop"
          element={<Layouts content={<Shoppage />} />}
        ></Route>
        <Route
          path="/blog"
          element={<Layouts content={<Blogpage />} />}
        ></Route>
        <Route
          path="/single"
          element={<Layouts content={<SingleProduct />} />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/single-blog"
          element={<Layouts content={<SingleBlog />} />}
        ></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
