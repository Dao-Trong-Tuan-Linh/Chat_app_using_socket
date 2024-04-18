import React,{useContext} from 'react'
import { UserContext } from '../context/userContext'

export default function Navbar() {
  const {user} = useContext(UserContext)
  
  return (
    <div className='navbar'>
      <span className="logo">TL02 Chat</span>
      <div className="user">
        <img src={user?.avatar ? user.avatar : ''} alt="" />
        <span>{user?.name ? user.name : ''}</span>
        <button>Đăng xuất</button>
      </div>
    </div>
  )
}
