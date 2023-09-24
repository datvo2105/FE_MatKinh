const Notfound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="empty-page-content text-center">
              <h1>404 Page Not Found</h1>
              <p>The page you requested does not exist.</p>
              <p>
                <a
                  href="http://annimexweb.com/"
                  className="btn btn--has-icon-after"
                >
                  Continue shopping{" "}
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
