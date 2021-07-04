import React from "react";
import "./index.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 first-box">
            <p className="title">TIX</p>
            <div className="row">
              <div className="col-sm-6">
                <a href="#">FAQ</a>
                <a href="#">Brand Guidelines</a>
              </div>
              <div className="col-sm-6">
                <a href="#">Thỏa thuận sử dụng</a>
                <a href="#">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <p className="title">ĐỐI TÁC</p>
            <div className="row col-sm-12 line-partner">
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
            </div>
            <div className="row col-sm-12 line-partner">
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
            </div>
            <div className="row col-sm-12 line-partner">
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
            </div>
            <div className="row col-sm-12 line-partner">
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
              <a href="#">
                <img src="./img/cgv.png" />
              </a>
            </div>
          </div>
          <div className="col-sm-4 row">
            <div className="col-md-6">
              <p className="title">MOBILE APP</p>
              <a href="#">
                <img className="iconApp" src="./img/apple-logo.png" />
              </a>
              <a href="#">
                <img className="iconApp" src="./img/android-logo.png" />
              </a>
            </div>
            <div className="col-md-6">
              <p className="title">SOCIAL</p>
              <a href="#">
                <img className="iconApp" src="./img/facebook-logo.png" />
              </a>
              <a href="#">
                <img className="iconApp" src="./img/zalo-logo.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="row footer-contact">
          <div className="col-sm-1 logoZion">
            <img className="imgZion" src="img/zion-logo.jpg" />
          </div>
          <div className="col-sm-8 info-footer">
            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </span>
            <span>Số Điện Thoại (Hotline): 1900 545 436 </span>
            <span>
              Email: <a href="#"> support@tix.vn </a>
            </span>
          </div>
          <div className="col-sm-3 text-right">
            <a href="#">
              <img className="imgBoCo" src="./img/bo-cong-thuong.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
