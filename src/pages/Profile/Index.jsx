import React, { useState } from 'react'
import { NavLink, Outlet, Navigate } from 'react-router-dom'
import ProfileCoin from './ProfileCoin'
import ProfileCourse from './ProfileCourse'
import ProfilePayment from './ProfilePayment'
import ProfileProject from './ProfileProject'

export default function Profile() {
    // const login =false
  return (
    <main className="profile" id="main">
      {/* {
        !login && <Navigate to="/"/>
      } */}
        <section>
          <div className="top-info">
            <div className="avatar">
              {/* <span class="text">H</span> */}
              <img src="img/avatar-lg.png" alt="" />
              <div className="camera" />
            </div>
            <div className="name">trần nghĩa</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="container">
            <div className="tab">
              <div className="tab-title">
                <NavLink to="/ca-nhan" end > Thông tin tài khoản </NavLink>
                <NavLink to="/ca-nhan/khoa-hoc-cua-ban">Khóa học của bạn</NavLink>
                <NavLink to="/ca-nhan/du-an-da-lam">Dự án đã làm</NavLink>
                <NavLink to="/ca-nhan/lich-su-thanh-toan">Lịch sử thanh toán</NavLink>
                <NavLink to="/ca-nhan/quan-ly-coin">Quản lý COIN của tôi</NavLink>
              </div>
              <div className="tab-content">
               <Outlet/>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
