import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layouts content={<Homepage />} />} />
      <Route path="/shop" element={<Layouts content={<Shoppage />} />}></Route>
      <Route path="/blog" element={<Layouts content={<Blogpage />} />}></Route>
      <Route
        path="/single"
        element={<Layouts content={<SingleProduct />} />}
      ></Route>
      <Route path="/cart" element={<Layouts content={<Cart />} />}></Route>
      <Route
        path="/checkout"
        element={<Layouts content={<Checkout />} />}
      ></Route>
      <Route
        path="/single-blog"
        element={<Layouts content={<SingleBlog />} />}
      ></Route>

      <Route path="/login" element={<Layouts content={<Login />} />}></Route>
      <Route
        path="/register"
        element={<Layouts content={<Register />} />}
      ></Route>
      <Route path="/about" element={<Layouts content={<About />} />}></Route>
      <Route
        path="/contact"
        element={<Layouts content={<Contact />} />}
      ></Route>
      <Route path="/faqs" element={<Layouts content={<Faqs />} />}></Route>
      <Route path="*" element={<Layouts content={<Notfound />} />}></Route>
    </Routes>
  );
};

export default App;
