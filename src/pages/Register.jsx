import { useState } from "react";
import { AuthRegister } from "../services/auth.service";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (ev) => {
    ev.preventDefault();
    const res = await AuthRegister({
      user_name: username,
      email,
      password,
    });
    const message = res?.error?.message;
    if (message) alert(message);
  };

  return (
    <>
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Create an Account</h1>
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
                        name="customer[email]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        id="CustomerEmail"
                        className=""
                        autoCorrect="off"
                        autoCapitalize="off"
                        autoFocus=""
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
                        name="customer[password]"
                        placeholder=""
                        id="CustomerPassword"
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                    <input
                      type="submit"
                      className="btn mb-3"
                      defaultValue="Create"
                    />
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
