import DashBoardPage from "../Container/AdminTemplate/DashBoardPage";
import CinemaSeatPage from "../Container/HomeTemplate/CinemaSeatPage";
import DetailCinemaPage from "../Container/HomeTemplate/DetailCinemaPage";
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
  {
    path: "/DetailCinema/:macumrap/:marap",
    exact: false,
    component: DetailCinemaPage,
  },
  {
    path: "/CinemaSeat/:id",
    exact: false,
    component: CinemaSeatPage,
  },
];
const RoutesAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: DashBoardPage,
  },
];

export { RoutesAdmin, routesHome };
