import React, { useEffect } from "react";
import "./css.css";
import { connect } from "react-redux";
import { listTheaterFectch } from "./Modules/action";

function DetailTicketMovie(props) {
  useEffect(() => {
    props.fetchTheater();
  }, []);
  if (props.loading) {
    return <div>Dang Loading</div>;
  }
  console.log(props.data);
  const renderTheater = () => {
    return props.data.map((item) => {
      return (
        <li>
          <img src={item.logo} />
          <span>{item.tenHeThongRap}</span>
        </li>
      );
    });
  };
  console.log(renderTheater);
  return (
    <div className="dateMovieContainer">
      <div className="dateMovieContainer-left">
        <ul>{renderTheater()}</ul>
      </div>
      <div className="dateMovieContainer-right">
        <div className="dateMovieContainer-right-top">
          <ul>
            <li>Thứ 2</li>
            <li>Thứ 2</li>
            <li>Thứ 2</li>
            <li>Thứ 2</li>
            <li>Thứ 2</li>
            <li>Thứ 2</li>
            <li>Thứ 2</li>
            <li>Thứ 2</li>
          </ul>
        </div>
        <div className="dateMovieContainer-right-bot">Không có suất chiếu</div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTheater: () => {
      dispatch(listTheaterFectch());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.DetailTicketMovie.loading,
    data: state.DetailTicketMovie.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailTicketMovie);
