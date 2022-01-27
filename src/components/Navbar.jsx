import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { languageContext } from "../contexts/langContext";
import { en } from "../translation/en";
import { ar } from "../translation/ar";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const Navbar = () => {
  const favCount = useSelector((state) => state.favArr);
  let { lang, setLang } = useContext(languageContext);
  const history = useHistory();
  let navBarDirection = () => (lang === "en" ? "ms-auto" : "me-auto");
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-danger" to={"/movies/1"}>
          {lang === "en" ? en.app_name : ar.app_name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav ${navBarDirection()} mb-2 mb-lg-0`}>
            <li className="nav-item align-self-center mx-3">
              <span
                className="nav-link badge rounded-pill bg-danger text-white p-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  lang === "en" ? setLang("ar") : setLang("en");
                  console.log(lang);
                }}
              >
                {lang === "en" ? en.lang : ar.lang}
              </span>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center"
                to={"/favourites"}
              >
                {lang === "en" ? en.fav : ar.fav}
                <span className="badge bg-danger text-white mx-2">
                  {favCount.length}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                {lang === "en" ? en.login : ar.login}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>
                {lang === "en" ? en.register : ar.register}
              </Link>
            </li>
            <li>
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={(values) =>
                  history.push(`/Movies-App/search/${values.search}`)
                }
              >
                {(formik) => (
                  <Form>
                    <Field
                      className="form-control mx-3"
                      style={{ display: "inline-block", width: "auto" }}
                      name="search"
                      type="text"
                    />
                    <button
                      className="btn btn-danger"
                      name="submit"
                      type="submit"
                    >
                      {lang === "en" ? en.search : ar.search}
                    </button>
                  </Form>
                )}
              </Formik>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
