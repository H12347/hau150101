import React from 'react'
import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ }) 
  const [errors, setErrors] = useState({})
  const btnClick = (ev) => {
    ev.preventDefault();
    const errorsObj = {}
    if (!form.username) {
      errorsObj.username = "Username là bắt buộc"
    }
    if (!form.phone) {
      errorsObj.phone = "Số đt là bắt buộc"
    }
    if (!form.email) {
      errorsObj.email = "Email là bắt buộc"
    }
     if (!form.facebook) {
      errorsObj.facebook = "FB url là bắt buộc"
    }
      setErrors( errorsObj )
  }

  return (
    <main className="register-course" id="main">
    <section>
      <div className="container">
        <div className="wrap container">
          <div className="main-sub-title">ĐĂNG KÝ</div>
          <h1 className="main-title">Thực chiến front-end căn bản </h1>
          <div className="main-info">
            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
          </div>
          <form className="form">
            <label>
              <p>Họ và tên<span>*</span></p>
              <input onChange={ev => form.username = ev.target.value} type="text" placeholder="Họ và tên bạn" />
            </label>
            {
            errors.username ? <p className='error-text'>{errors.username}</p> : null
            }
            <label>
              <p>Số điện thoại<span>*</span></p>
              <input onChange={ev => form.phone = ev.target.value} type="text" placeholder="Số điện thoại" />
            </label>
            <label>
              <p>Email<span>*</span></p>
              <input onChange={ev => form.email = ev.target.value} type="text" placeholder="Email của bạn" />
            </label>
            <label>
              <p>URL Facebook<span>*</span></p>
              <input onChange={ev => form.facebook = ev.target.value} type="text" placeholder="https://facebook.com" />
            </label>
            <label className="disable">
              <p>Sử dụng COIN</p>
              <div className="checkcontainer">
                Hiện có <strong>300 COIN</strong>
                {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                {/* Cần ít nhất 200 COIN để giảm giá */}
                <input type="checkbox" defaultChecked="checked" />
                <span className="checkmark" />
              </div>
            </label>
            <label>
              <p>Hình thức thanh toán</p>
              <div className="select">
                <div className="head">Chuyển khoản</div>
                <div className="sub">
                  <a href="#">Chuyển khoản</a>
                  <a href="#">Thanh toán tiền mặt</a>
                </div>
              </div>
            </label>
            <label>
              <p>Ý kiến cá nhân</p>
              <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
            </label>
            <button  className="btn main rect" onClick={btnClick}>đăng ký</button>
          </form>
        </div>
      </div>
    </section>
    
  </main>
  )
}


