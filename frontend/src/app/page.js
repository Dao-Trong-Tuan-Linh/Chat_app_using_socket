"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HomePage from './pages/HomePage'
import useTokenChecker from './hooks/useTokenChecker'

export default function Home() {
  useTokenChecker()
  return (
    <HomePage/>
  )
}
