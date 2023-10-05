import { useState } from "react";
import { authSelector } from "../features/authSlice";
import { updateProfile } from "../services/user.service";
import { Navigate } from "react-router-dom";

const Information = () => {
  const { userData } = authSelector();
  const [email, setEmail] = useState(userData.email);
  const [address, setAddress] = useState(userData.address);
  const [redirect, setRedirect] = useState(false);

  const handleRegister = async (ev) => {
    ev.preventDefault();
    const res = await updateProfile({
      email,
      address,
    });
    setRedirect(true);
    const message = res?.error?.message;
    if (message) alert(message);
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <>
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Thông Tin Người Dùng</h1>
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
                      <label htmlFor="FirstName">Username</label>
                      <input
                        type="text"
                        name="customer[first_name]"
                        placeholder=""
                        id="Username"
                        defaultValue={userData.user_name}
                        disabled
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
                      <label htmlFor="Address">Địa Chỉ</label>
                      <input
                        type="text"
                        name="customer[address]"
                        placeholder=""
                        id="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        autoFocus=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                    <input
                      type="submit"
                      className="btn mb-3"
                      value="Cập Nhập"
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

export default Information;
