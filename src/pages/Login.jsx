import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const email = useRef();
  const password = useRef();

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(values);
  }
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Giriş Yap</h1>
            </div>
            <form onSubmit={handleFormSubmit} action="">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Şifre
                  </label>
                  <input
                    type="password"
                    value={values.password}
                    onChange={handleInputChange}
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <button className={`btn btn-outline-${btnColor}`}>Giriş</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
