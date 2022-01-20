import "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetails from "./pages/MovieDetails";
import { languageContext } from "./contexts/langContext";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <Router>
      <languageContext.Provider value={{ lang, setLang }}>
        <div dir={lang === "en" ? "ltr" : "rtl"}>
          <Navbar />
          <Switch>
            <Route path={"/movies/:num"} component={Home} exact />
            <Route path={"/favourites"} component={Favourites} exact />
            <Route path={"/search/:queryString"} component={SearchPage} exact />
            <Route path={"/login"} component={Login} exact />
            <Route path={"/register"} component={Register} exact />
            <Route path={"/:id/movie_details"} component={MovieDetails} exact />
          </Switch>
        </div>
      </languageContext.Provider>
    </Router>
  );
}

export default App;
