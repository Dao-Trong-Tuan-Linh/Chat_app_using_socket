"use client"
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { useRouter } from "next/navigation";
import { decodeToken, deleteUser } from '../util/localstorage';
import useTokenChecker from '../hooks/useTokenChecker';

export default function HomePage() {
  useTokenChecker()
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
