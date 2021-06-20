import React, { useEffect } from "react";
import { connect } from "react-redux";
import { nowListMovieFectch } from "./Modules/action";
import "./css.css";

function NowListPage(props) {
  useEffect(() => {
    props.fetchNowList();
    console.log("Effect chay do ");
  }, []);
  const renderList = (data) => {
    return data.map((item) => {
      return (
        <div className="card col-md-2 m-4 card-seeAll ">
          <img className="card-img-top card-image" src={item.hinhAnh} alt />
          <div className="card-body center">
            <h4 className="card-title">{item.tenPhim}</h4>
            {/* <p className="card-text">{item.moTa}</p> */}
            <button
              className="btn btn-danger"
              onClick={() => {
                clickBooking(item.maPhim);
              }}
            >
              Chi tiết
            </button>
          </div>
        </div>
      );
    });
  };
  const clickBooking = (id) => {
    props.history.replace("/detailMovie/" + id);
  };
  if (props.loading) {
    return <div>dang loading</div>;
  }

  return (
    <div>
      {console.log(props.data)}
      <h3 className="header-seeAll">PHIM ĐANG CHIẾU</h3>
      <div className=" container-seeAll">
        <div className="container container-seeAll">
          <div className="row list-seeAll">{renderList(props.data)}</div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchNowList: () => {
      dispatch(nowListMovieFectch());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.nowMovieReducer.loading,
    data: state.nowMovieReducer.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NowListPage);
