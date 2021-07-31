import { Route, Switch, withRouter } from "react-router-dom";
import { Suspense } from "react";
import { mainRoutes } from "./routes/MainRoutes";
import AppBar from "./components/AppBar/AppBar";

const App = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {mainRoutes.map(({ path, exact, component }) => (
              <Route
                path={path}
                component={component}
                exact={exact}
                key={path}
              />
            ))}
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default withRouter(App);

// const Test = (props) => {
//   console.log(props);
//   return <h1>Test title</h1>;
// };

// const Test = withRouter((props) => {
//   console.log(props);
//   return <h1>Test title</h1>;
// });

// <Test />
