import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="empty-page-content text-center">
              <h1>Lỗi 404</h1>
              <p>Trang không tồn tại</p>
              <p>
                <Link to="/product" className="btn btn--has-icon-after">
                  Tiếp tục mua hàng{" "}
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
