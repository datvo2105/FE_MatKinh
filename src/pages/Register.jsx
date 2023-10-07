import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthRegister } from "../services/auth.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authLogin, authSelector } from "../features/authSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth } = authSelector();
  const dispatch = useDispatch();

  const handleRegister = async (ev) => {
    ev.preventDefault();
    try {
      await AuthRegister({
        user_name: username,
        email,
        password,
      }).then(() => {
        toast.success("Đăng ký thành công tài khoản");
        dispatch(authLogin({ user_name: username, password }));
      });
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      toast.error(message);
    }
  };

  if (isAuth != null) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Tạo tài khoản</h1>
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
                onSubmit={handleRegister}
              >
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="FirstName">User Name</label>
                      <input
                        type="text"
                        name="customer[first_name]"
                        required
                        placeholder=""
                        id="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoFocus=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CustomerEmail">Email</label>
                      <input
                        type="email"
                        className="customer[email]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        id="CustomerEmail"
                        autoCorrect="off"
                        autoCapitalize="off"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="CustomerPassword">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="customer[password]"
                        id="CustomerPassword"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="submit" className="btn mb-3" value="Đăng ký" />
                    <p className="mb-4">
                      Bạn đã có tài khoản?
                      <Link
                        to="/login"
                        className="ml-1"
                        id="customer_register_link"
                        style={{ fontWeight: 600 }}
                      >
                        Đăng Nhập.
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

export default Register;
