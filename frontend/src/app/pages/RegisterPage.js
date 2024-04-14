import React from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TL02 Chat</span>
        <span className="title">Đăng ký</span>
        <form>
          <input required type="text" placeholder="Nhập tên ..." />
          <input required type="email" placeholder="Nhập email..." />
          <input required type="password" placeholder="Nhập mật khẩu..." />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={'/addAvatar.png'} alt="" />
            <span>Thêm avatar</span>
          </label>
          <button>Đăng ký</button>
        </form>
        <p>
          Bạn đã có tài khoản? <Link href="/dang-nhap">Đăng nhập</Link>
        </p>
      </div>
    </div>
  )
}
