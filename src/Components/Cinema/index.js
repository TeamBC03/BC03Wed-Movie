import React from "react";
import "./css.css";

export default function Cinema() {
  return (
    <div>
      <section class="cinema container">
        <div class="row">
          <div class="col-2">
            <div
              class="nav flex-column "
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="v-pills-bhd-tab"
                data-toggle="pill"
                href="#v-pills-bhd"
                role="tab"
                aria-controls="v-pills-bhd"
                aria-selected="true"
              >
                <img src="./images/BHD-cinema.png" />
              </a>
              <a
                class="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <img src="./images/BHD-cinema.png" />
              </a>
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <img src="./images/BHD-cinema.png" />
              </a>
              <a
                class="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <img src="./images/BHD-cinema.png" />
              </a>
              <a
                class="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <img src="./images/BHD-cinema.png" />
              </a>
              <a
                class="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <img src="./images/BHD-cinema.png" />
              </a>
              <a
                class="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <img src="./images/BHD-cinema.png" />
              </a>
            </div>
          </div>
          <div class="col-10">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-bhd"
                role="tabpanel"
                aria-labelledby="v-pills-bhd-tab"
              >
                <div class="row">
                  <div class="col-md-4 cinema-list">
                    <div class="flex-column">
                      <div class="cinema-item row">
                        <div class="col-md-3 cinema-item__image">
                          <img
                            src="./images/bhd-star-bitexco-16105952137769.png"
                            style={{width: `50px`}}
                          />
                        </div>
                        <div class="col-md-9 cinema-item__info">
                          <span>
                            <span class="brand-name">BHD Star</span>- Bitexco
                          </span>
                          <p class="address">
                            L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                          </p>
                          <a href="#">[chi tiết]</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 cinema-session text-center">
                    Không có suất chiếu
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
