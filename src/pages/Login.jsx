import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { authLogin, authSelector } from "../features/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth } = authSelector();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(authLogin({ user_name: username, password }));
    const message = res?.error?.message;
    if (message) alert(message);
  };
  if (isAuth != null) return <Navigate to="/" />;

  return (
    <>
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Login</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
            <div className="mb-4">
              <form
                method="post"
                id="CustomerLoginForm"
                acceptCharset="UTF-8"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CustomerEmail">Username</label>
                      <input
                        type="text"
                        name="customer[email]"
                        placeholder=""
                        id="CustomerEmail"
                        autoCorrect="off"
                        autoCapitalize="off"
                        autoFocus=""
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CustomerPassword">Password</label>
                      <input
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        name="customer[password]"
                        placeholder=""
                        id="CustomerPassword"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="submit" className="btn mb-3" value="Sign In" />
                    <p className="mb-4">
                      <Link to="/register" id="customer_register_link">
                        Create account
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
