import DetailMoviePage from "../Container/HomeTemplate/DetailMoviePage";
import HomePage from "../Container/HomeTemplate/HomePage/index";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/detailMovie/:id",
    exact: false,
    component: DetailMoviePage,
  },
];
const RoutesAdmin = [{}];

export { RoutesAdmin, routesHome };
