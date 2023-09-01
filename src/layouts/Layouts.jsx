import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Layouts = ({ content }) => {
  return (
    <div className="template-collection belle">
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
  );
};

export default Layouts;
