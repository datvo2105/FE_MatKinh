import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Information from "./pages/Information";
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
import SingleProduct from "./components/Product/Product";
import ScrollToTop from "./hooks/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layouts content={<Homepage />} />} />
        <Route
          path="/product"
          element={<Layouts content={<Shoppage />} />}
        ></Route>
        <Route
          path="/blog"
          element={<Layouts content={<Blogpage />} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<Layouts content={<SingleProduct />} />}
        ></Route>
        <Route path="/cart" element={<Layouts content={<Cart />} />}></Route>
        <Route
          path="/checkout"
          element={<Layouts content={<Checkout />} />}
        ></Route>
        <Route
          path="/blog/:id"
          element={<Layouts content={<SingleBlog />} />}
        ></Route>

        <Route path="/login" element={<Layouts content={<Login />} />}></Route>
        <Route
          path="/register"
          element={<Layouts content={<Register />} />}
        ></Route>
        <Route
          path="/information"
          element={<Layouts content={<Information />} />}
        ></Route>
        <Route path="/about" element={<Layouts content={<About />} />}></Route>
        <Route
          path="/contact"
          element={<Layouts content={<Contact />} />}
        ></Route>
        <Route path="/faqs" element={<Layouts content={<Faqs />} />}></Route>
        <Route path="*" element={<Layouts content={<Notfound />} />}></Route>
      </Routes>
    </>
  );
};

export default App;
