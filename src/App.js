import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
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
