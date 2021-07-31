import { Route, Switch, withRouter } from "react-router-dom";
import { Suspense } from "react";
import { mainRoutes } from "./routes/MainRoutes";
import NavList from "./components/navigation/NavList";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";

const App = () => {
  return (
    <>
      <header className="header">
        <NavList />
        <LanguageSwitcher />
      </header>

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
