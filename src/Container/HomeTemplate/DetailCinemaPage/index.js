import React from "react";
import DetailCinema from "../../../Components/DetailCinema/index";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailCinemaFectch } from "./modules/action";
import Loading from "../../../Components/Loading/index";

export default function DetailCinemaPage(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DetailCinemaReducer.data);
  const loading = useSelector((state) => state.DetailCinemaReducer.loading);

  useEffect(() => {
    dispatch(
      detailCinemaFectch(props.match.params.macumrap, props.match.params.marap)
    );
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <DetailCinema dataList={data} />
    </div>
  );
}
