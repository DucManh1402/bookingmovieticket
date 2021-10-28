import React, { useState, useEffect } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default function Cinemas() {
  return (
    <>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane
          tab={
            <div
              className="bg-cover"
              style={{
                width: 60,
                height: 60,
                backgroundImage: `url(https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png)`,
              }}
            ></div>
          }
          key="1"
        >
          <Tabs tabPosition="left">
            <TabPane
              tab={
                <div className=" flex font-sans">
                  <div
                    className=" bg-cover"
                    style={{
                      width: 60,
                      height: 60,
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png)`,
                    }}
                  ></div>
                  <div className="pl-5 flex-col">
                    <div className="text-sm font-medium">
                      BHD Star - Bitexco
                    </div>
                    <div className="text-sm">
                      L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                    </div>
                  </div>
                </div>
              }
              key="1"
            >
              Không có xuất chiếu
            </TabPane>
            <TabPane
              tab={
                <div className=" flex font-sans">
                  <div
                    className=" bg-cover"
                    style={{
                      width: 60,
                      height: 60,
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png)`,
                    }}
                  ></div>
                  <div className="pl-5 flex-col">
                    <div className="text-sm font-medium">
                      BHD Star - Vincom Thảo Điền
                    </div>
                    <div className="text-sm">
                      L5-Megamall, 159 XL Hà Nội, Q.2
                    </div>
                  </div>
                </div>
              }
              key="2"
            >
              Content of Tab 2
            </TabPane>
            <TabPane
              tab={
                <div className=" flex font-sans">
                  <div
                    className=" bg-cover"
                    style={{
                      width: 60,
                      height: 60,
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png)`,
                    }}
                  ></div>
                  <div className="pl-5 flex-col">
                    <div className="text-sm font-medium">
                      BHD Star Vincom 3/2
                    </div>
                    <div className="text-sm">
                      L5-Vincom 3/2, 3C Đường 3/2, Q.10
                    </div>
                  </div>
                </div>
              }
              key="3"
            >
              Content of Tab 3
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane
          tab={
            <div
              className="bg-cover"
              style={{
                width: 60,
                height: 60,
                backgroundImage: `url(https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png)`,
              }}
            ></div>
          }
          key="2"
        ></TabPane>
        <TabPane
          tab={
            <div
              className="bg-cover"
              style={{
                width: 60,
                height: 60,
                backgroundImage: `url(https://s3img.vcdn.vn/123phim/2021/01/77807d96b5048f1d79f45d9d7d3f6a3a.png)`,
              }}
            ></div>
          }
          key="3"
        ></TabPane>
        <TabPane
          tab={
            <div
              className="bg-cover"
              style={{
                width: 60,
                height: 60,
                backgroundImage: `url(https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png)`,
              }}
            ></div>
          }
          key="4"
        ></TabPane>
      </Tabs>
    </>
  );
}
