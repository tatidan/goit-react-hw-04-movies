import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChuckName: "HomePage"*/)
    ),
  },
  {
    name: "movieDetails",
    path: "/movies/:movieId",
    exact: false,
    component: lazy(() =>
      import(
        "../pages/MovieDetailsPage" /* webpackChuckName: "MovieDetailsPage"*/
      )
    ),
  },
  {
    name: "movies",
    path: "/movies",
    exact: true,
    component: lazy(() =>
      import("../pages/MoviesPage" /* webpackChuckName: "MoviesPage"*/)
    ),
  },

  // {
  //   name: "NotFoundPage",
  //   path: "",
  //   exact: false,
  //   component: NotFoundPage,
  // },
];
