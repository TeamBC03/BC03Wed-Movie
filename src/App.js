import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page404 from "./Container/Page404";
import HomeTemplate from "./Container/HomeTemplate";
import { routesHome } from "./Routes/index";

function App() {
  const renderHomeTemplate = (routes) => {
    if (routes && routes.length > 0) {
      console.log("da chay");
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {renderHomeTemplate(routesHome)}
        {console.log("luan22")}
        <Route path="" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
