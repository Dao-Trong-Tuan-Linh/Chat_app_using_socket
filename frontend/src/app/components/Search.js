"use client"
import React,{useEffect, useState} from 'react'
import useDebounce from '../hooks/useDebounce'
import axios from 'axios'
import axiosClient from '../api/axiosConf'

export default function Search() {
  const [name,setName] = useState("")
  const [users,setUsers] = useState([])
  const [err,setErr] = useState(false)

  const searchQuery = useDebounce(name,600)

  const handleSearch = async () => {
    try {
      const {data} = await axiosClient.get(`/user/searchUser?name=${searchQuery}`)
      const {result} = data
      const {users} = result
      setUsers(users)
      console.log(users)
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  }

  useEffect(() => {
    handleSearch()
  },[searchQuery])
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Tìm người dùng..."
        //   onKeyDown={handleKey}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      {name &&users.length == 0&&<span>User not found!</span>}
      {users.length > 0 && users.map(user => (
        <div className="userChat">
        <img src={user.avatar} alt="avatar" />
        <div className="userChatInfo">
          <span>{user.name}</span>
        </div>
      </div>
      ))}
    </div>
  )
}
