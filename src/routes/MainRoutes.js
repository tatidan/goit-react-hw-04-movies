import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
// import NotFoundPage from "../pages/NotFoundPage";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    name: "movies",
    path: "/movies",
    exact: true,
    component: MoviesPage,
  },
  {
    name: "movieDetails",
    path: "/movies/:movie.id",
    exact: false,
    component: MovieDetailsPage,
  },

  // {
  //   name: "NotFoundPage",
  //   path: "",
  //   exact: false,
  //   component: NotFoundPage,
  // },
];
