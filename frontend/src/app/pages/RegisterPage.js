"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import {getDownloadURL,ref,uploadBytes} from "firebase/storage"
import { storage } from '../firebase/firebase'
import {v4 as uuid} from "uuid"
import axiosClient from '../api/axiosConf'
import { useRouter } from 'next/navigation'


export default function RegisterPage() {
  const router = useRouter()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [img,setImg] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name,email,password,img)
    try {
      const storageRef = ref(storage,`user/${uuid()}`)
      uploadBytes(storageRef,img).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          const result = await axiosClient.post('/signup',{name,email,password,avatar:url})
          if(result) router.push('/dang-nhap')
        })
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TL02 Chat</span>
        <span className="title">Đăng ký</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Nhập tên ..." value={name} onChange={(e) => setName(e.target.value)} />
          <input required type="email" placeholder="Nhập email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input required type="password" placeholder="Nhập mật khẩu..." value={password} onChange={(e) => setPassword(e.target.value)} />
          <input required style={{ display: "none" }} type="file" id="file" onChange={(e) => setImg(e.target.files[0])}/>
          <label htmlFor="file">
            <img src={'/addAvatar.png'} alt="" />
            <span>Thêm avatar</span>
          </label>
          <button disabled={!name&&!email&&!password&&!img}>Đăng ký</button>
        </form>
        <p>
          Bạn đã có tài khoản? <Link href="/dang-nhap">Đăng nhập</Link>
        </p>
      </div>
    </div>
  )
}
