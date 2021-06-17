import DetailMoviePage from "../Container/HomeTemplate/DetailMoviePage";
import HomePage from "../Container/HomeTemplate/HomePage/index";
import InfoUser from "../Container/HomeTemplate/InforUser";
import NowListPage from "../Container/HomeTemplate/NowlistPage";

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
  {
    path: "/user",
    exact: false,
    component: InfoUser,
  },
  {
    path: "/NowList",
    exact: false,
    component: NowListPage,
  },
];
const RoutesAdmin = [{}];

export { RoutesAdmin, routesHome };
