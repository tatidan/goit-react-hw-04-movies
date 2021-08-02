import { Route, Switch } from "react-router-dom";
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

export default App;
