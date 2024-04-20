import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { useRouter } from "next/navigation";
import { decodeToken, deleteUser } from '../util/localstorage';

export default function HomePage() {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
