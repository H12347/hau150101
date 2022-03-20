import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Sidebar() {
    const close = () => {
      document.body.classList.toggle('menu-is-show')
    }
  return (
    <>
    <nav className="nav">
    <ul>
      <li className="li_login">
        <NavLink to="/dang-nhap" >Đăng Ký/ Đăng Nhập</NavLink>
      </li>
      <li>
          <NavLink to="/"> Trang Chủ</NavLink>
      </li>
      <li>
          <NavLink to="/thanh-vien"> CFD Team</NavLink>
      </li>
      <li>
          <NavLink to="/khoa-hoc"> Khoá Học</NavLink>
      </li>
      <li>
          <NavLink to="/lien-he"> Liên Hệ</NavLink>
      </li>
    </ul>
  </nav>
  <div onClick={close} className="overlay_nav"/>
  </>
  )
}
