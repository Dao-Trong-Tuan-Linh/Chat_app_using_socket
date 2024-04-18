import Image from 'next/image'
import styles from './page.module.css'
import HomePage from './pages/HomePage'
import { getToken } from './util/localstorage'

export default function Home() {
  return (
    <HomePage/>
  )
}
