import { Route } from "react-router-dom";
import { mainRoutes } from "./routes/MainRoutes";
import NavList from "./components/navigation/NavList";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";

// const Test = (props) => {
//   console.log(props);
//   return <h1>Test title</h1>;
// };

// const Test = withRouter((props) => {
//   console.log(props);
//   return <h1>Test title</h1>;
// });

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <NavList />
        <LanguageSwitcher />
      </header>

      {/* <Test /> */}

      <main>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} component={component} exact={exact} key={path} />
        ))}
      </main>
    </div>
  );
};

export default App;
