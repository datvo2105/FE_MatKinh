import React from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../components/Home/Content';

const Home = () => {
  return (
    <div className="template-index belle template-index-belle">
      {/* <div id="pre-loader">
        <img src="assets/images/loader.gif" alt="Loading..." />
      </div> */}
      <div className="pageWapper">
        <Header />
        <Content />
        <Footer/>
      </div>
    </div>
  );
}

export default Home
