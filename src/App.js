import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import MovieDetailsView from "./views/MovieDetailsView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";

// const linkStyles = {
//   base: {
//     color: "black",
//   },
//   active: {
//     color: "red",
//   },
// };

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            // style={linkStyles.base}
            // activeStyle={linkStyles.active}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/movies" component={MoviesView} />
        <Route path="/movies/:movieId" component={MovieDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
};

export default App;
