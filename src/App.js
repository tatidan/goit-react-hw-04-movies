import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFoundPage from "./views/NotFoundPage";
import NavList from "./components/navigation/NavList";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <NavList />
        <LanguageSwitcher />
      </header>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movie.id" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
