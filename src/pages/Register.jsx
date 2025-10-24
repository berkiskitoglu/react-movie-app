import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Register() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("repassword"));
    console.log(formData.getAll("hobbies"));
    const hobies = formData.getAll("hobbies");
    const data = Object.fromEntries(formData.entries());
    data.hobbies = hobbies;
    console.log(data);
  }
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Kayıt Ol</h1>
            </div>
            <form onSubmit={handleFormSubmit} action="">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Ad
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Şifre
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="repassword" className="form-label">
                        Şifre Onay
                      </label>
                      <input
                        type="password"
                        name="repassword"
                        id="repassword"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="hobbies" className="form-label">
                      Hobiler
                    </label>
                    <div className="card card-body">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="hobbies"
                          id="cars"
                          className="form-check-input"
                        />
                        <label htmlFor="cars" className="form-check-label">
                          Arabalar
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="hobbies"
                          id="books"
                          className="form-check-input"
                        />
                        <label htmlFor="books" className="form-check-label">
                          Kitaplar
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="hobbies"
                          id="movies"
                          className="form-check-input"
                        />
                        <label htmlFor="movies" className="form-check-label">
                          Filmler
                        </label>
                      </div>
                    </div>
                  </div>
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
