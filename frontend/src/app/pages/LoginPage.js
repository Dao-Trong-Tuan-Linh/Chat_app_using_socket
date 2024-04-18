"use client";
import React, { useState } from "react";
import Link from "next/link";
import { setToken, setUser } from "../util/localstorage";
import { useRouter } from "next/navigation";
import axiosClient from '../api/axiosConf'

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('loading')
    try {
      const {data} = await axiosClient.post("/auth/login", { email, password });
      const {result} = data
    
      if (result) {
        console.log(result)
        const token = JSON.stringify(result.token)
        setToken(token);
        const user = JSON.stringify({ name: result.name,avatar:result.avatar})
        setUser(user);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TL02 Chat</span>
        <span className="title">Đăng nhập</span>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Nhập email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={!email && !password}>
            Đăng nhập
          </button>
        </form>
        <p>
          Bạn chưa có tài khoản ? <Link href="/dang-ky">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
}
