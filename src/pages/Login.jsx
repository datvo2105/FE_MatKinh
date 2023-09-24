import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: "/auth/login",
        data: {
          user_name: username,
          password,
        },
      }).then((res) => {
        if (res.status == 200) return setRedirect(true);
      });
    } catch (error) {
      alert("Something worng. Can't login!");
    }
  };

  if (redirect) return <Navigate to="/" />;

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
                      <a href="#" id="RecoverPassword">
                        Forgot your password?
                      </a>{" "}
                      &nbsp; | &nbsp;
                      <a href="register.html" id="customer_register_link">
                        Create account
                      </a>
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
