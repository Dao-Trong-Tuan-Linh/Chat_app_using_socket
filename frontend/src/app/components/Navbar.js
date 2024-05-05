"use client"
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { deleteToken, deleteUser, getUser } from '../util/localstorage'

export default function Navbar() {
  const [currentUser,setCurrentUser] = useState(null)
  
  const router = useRouter()

  useEffect(() => {
    const userData = JSON.parse(getUser())
    if(userData) setCurrentUser(userData)
  },[])

  const handleLogout = () => {
    setCurrentUser(null)
    deleteUser()
    deleteToken()
    router.push('/dang-nhap')
  }
  return (
    <div className='navbar'>
      <span className="logo">TL02 Chat</span>
      <div className="user">
        <img src={currentUser?.avatar ? currentUser.avatar : ''} alt="" />
        <span>{currentUser?.name ? currentUser.name : ''}</span>
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    </div>
  )
}
