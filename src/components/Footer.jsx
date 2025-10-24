import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const textColor = theme == "dark" ? "light" : "dark";
  const year = new Date().getFullYear();
  return (
    <footer
      className={`bg-${theme} text-center text-${textColor} border-top border-body`}
    >
      <div className="container p-4">
        <section className="mb-4">
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="bi bi-google"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3">
        © {year} Tüm Hakları Saklıdır:
        <a className={`text-${textColor}" href="#!"`}> Filmkolik</a>
      </div>
    </footer>
  );
}
