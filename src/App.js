import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page404 from "./Container/Page404";
import HomeTemplate from "./Container/HomeTemplate";
import AdminTemplate from "./Container/AdminTemplate";
import { RoutesAdmin, routesHome } from "./Routes/index";
import LogInPage from "./Container/LoginPage";
import SignUp from "./Container/SignUpPage";

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
  const renderRoutesAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
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
        {renderRoutesAdmin(RoutesAdmin)}
        <Route path="/signUp" component={SignUp} />
        <Route path="/login" component={LogInPage} />
        <Route path="" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
