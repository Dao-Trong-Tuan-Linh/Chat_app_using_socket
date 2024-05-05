"use client";
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import axiosClient from "../api/axiosConf";
import { decodeToken } from "../util/localstorage";

export default function Search() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const { id } = decodeToken();

  const searchQuery = useDebounce(name, 600);

  const handleSearch = async () => {
    try {
      const { data } = await axiosClient.get(
        `/user/searchUser?name=${searchQuery}`
      );
      const { result } = data;
      const { users } = result;
      setUsers(users);
      console.log(users);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  const handleSelect = async (user) => {
    console.log("id:", id);
    const combinedId = id > user._id ? id + user._id : user._id + id;
    try {
      const { data } = await axiosClient.get(`/chat/checkUserChat/${id}`);
      const { isCreated } = data;
      if (!isCreated) {
        await axiosClient.post(`/chat/createChat`, { combinedId });
        await axiosClient.post(`/chat/createUserChat`, {
          id,
          combinedId,
          user,
        });
      } else {
        await axiosClient.post(`/chat/createUserChatWithUserId`, {
          id,
          combinedId,
          user,
        });
        const { data } = await axiosClient.get(`/chat/checkUserChat/${id}`);
        const { isCreated } = data;
        if(!isCreated) {
          await axiosClient.post(`/chat/createChat`, {combinedId});
        } 
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);
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
      {name && users.length == 0 && <span>User not found!</span>}
      {users.length > 0 &&
        users.map((user) => (
          <div
            key={user._id}
            onClick={() => handleSelect(user)}
            className="userChat"
          >
            <img src={user.avatar} alt="avatar" />
            <div className="userChatInfo">
              <span>{user.name}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
