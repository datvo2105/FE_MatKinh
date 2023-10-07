import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layouts = ({ content }) => {
  return (
    <>
      <ToastContainer />
      <div className={`template-collection belle`}>
        <div className="template-index belle template-index-belle">
          {/* <div id="pre-loader">
        <img src="assets/images/loader.gif" alt="Loading..." />
      </div> */}
          <div className="pageWapper">
            <Header />
            <div id="page-content">{content}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layouts;

Layouts.propTypes = {
  content: PropTypes.element,
};
