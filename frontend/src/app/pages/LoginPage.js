import React from 'react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TL02 Chat</span>
        <span className="title">Đăng nhập</span>
        <form>
          <input type="email" placeholder="Nhập email..." />
          <input type="password" placeholder="Nhập mật khẩu..." />
          <button>Đăng nhập</button>
          
        </form>
        <p>Bạn chưa có tài khoản ? <Link to="/dang-ky">Đăng ký</Link></p>
      </div>
    </div>
  )
}
