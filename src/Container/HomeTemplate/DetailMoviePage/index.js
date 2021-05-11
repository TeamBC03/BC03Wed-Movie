import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import { detailMovieFectch } from "./Modules/action";
import {} from "css-percentage-circle";
function DetailMoviePage(props) {
  const [data, setdata] = useState();
  useEffect(() => {
    props.fetchDetail(props.match.params.id);
    console.log(props.data);
  }, []);
  // useEffect(() => {
  //    setdata()
  // }, []);
  // useEffect(() => {
  //   setdata(props.data);
  //   console.log(data);
  // }, [props.data]);
  if (props.loading) {
    return <div>Đang Loading</div>;
  }

  return (
    <div className="DetailMovieContainer">
      {console.log("render")}
      <div className="DetailMovieContainer-top">
        <img src={props.data.hinhAnh} />
        <div className="DetailMovieContainer-top-content">
          <div className="DetailMovieContainer-top-content-left">
            <img src={props.data.hinhAnh} />
            <div className="detailContentMovie">
              <p>30.4.2021</p>
              <h4>{props.data.tenPhim}</h4>
              <p>100 phút - 0 IMDb - 2D/Digital</p>
              <button className="btn btn-danger">Mua vé</button>
            </div>
          </div>
          <div className="DetailMovieContainer-top-content-right"></div>
        </div>
      </div>
      <div className="DetailMovieContainer-centerLinear" />
      <div className="DetailMovieContainer-bot">
        <div className="DetailMovieContainer-bot-link">
          <a href="#">
            <h4>Thông Tin</h4>
          </a>
          <a href="#">
            <h4>Đánh Giá</h4>
          </a>
        </div>
        <div className="content">
          <div className="DetailMovieContainer-bot-content">
            <div className="row">
              <div className="col-md-6">
                <div className="row rowleft">
                  <p>Ngày Công Chiếu</p>
                  <p>30.4.2021</p>
                </div>
                <div className="row rowleft">
                  <p>Đạo diễn</p>
                  <p>Võ Thành Luân</p>
                </div>
                <div className="row rowleft">
                  <p>Diễn Viên</p>
                  <p>Võ Thành Luân</p>
                </div>
                <div className="row rowleft">
                  <p>Thể Loại</p>
                  <p>Võ Thành Luân</p>
                </div>
                <div className="row rowleft">
                  <p>Định Dạng</p>
                  <p>Võ Thành Luân</p>
                </div>
                <div className="row rowleft">
                  <p>Quốc Gia</p>
                  <p>Võ Thành Luân</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row contentNd">
                  <p>Nội Dung</p>
                  <p>{props.data.moTa}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetail: (id) => {
      dispatch(detailMovieFectch(id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.DetailMovie.loading,
    data: state.DetailMovie.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
