import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">TL02 Chat</span>
      <div className="user">
        {/* <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span> */}
        <button>Đăng xuất</button>
      </div>
    </div>
  )
}
