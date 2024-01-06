import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

export default function Navbar(){
    return (
        <div className={styles.container} >
            
            <div className={styles.logo}>Devscribe</div>
            <div className={styles.links}>
                
                <Link href="/" className={styles.link}>Homepage</Link>
                <Link href="/" className={styles.link}>Contact us</Link>
                <Link href="/" className={styles.link}>About us</Link>
                {/* <AuthLinks/> */}
                <ThemeToggle/>
            </div>
        </div>
    )
}
