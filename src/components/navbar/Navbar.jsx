'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import AuthLinks from '../authlinks/AuthLinks'

import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {

  const loggedIn = false

  return (
    <div className={styles.container}>

      <div className={styles.logo}>
        <Link href="/">Devscribe</Link>
      </div>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/contact-us" className={styles.link}>Contact us</Link>
        <Link href="/about-us" className={styles.link}>About us</Link>
       
      <ThemeToggle/>
      <AuthLinks/>
      </div>

    </div>
  )
}

export default Navbar