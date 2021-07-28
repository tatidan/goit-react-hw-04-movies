import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import MovieDetailsView from "./views/MovieDetailsView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";
import sprite from "./icons/sprite.svg";
import NavList from "./components/navigation/NavList";

const App = () => {
  return (
    <div className="App">
      <NavList />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/movies" component={MoviesView} />
        <Route path="/movies/:movie.id" component={MovieDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
};

export default App;
