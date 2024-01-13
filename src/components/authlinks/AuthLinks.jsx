'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from "./authLinks.module.css"
import { CgMenu } from "react-icons/cg";
import { signIn, signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {

    const { data: session } = useSession();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const menuElement = document.querySelector(`.${styles.responsiveMenu}`);
            const burgerElement = document.querySelector(`.${styles.burger}`);

            if (open && menuElement && !menuElement.contains(event.target) && !burgerElement.contains(event.target)) {
                setOpen(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [open]);

    return (
        <>
            <div className={styles.burger} onClick={() => setOpen(!open)}>

                <CgMenu style={{ color: 'var(--textColor)', background: 'var(--bg)', border: 'none' }} />
            </div>
            {
                session?.user
                    ? (
                        <>

                            <Link href='/createblog' className={`${styles.link} ${styles.desktopOnly}`}>Write</Link>

                            <div onClick={() => { signOut() }} className={`${styles.link} ${styles.desktopOnly}`} style={{ backgroundColor: 'red', padding: '10px' }}>Logout</div>

                            {open && (
                                <div className={styles.responsiveMenu}>
                                    <Link href="/">Home</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>
                                    <Link href='/createblog' className={styles.link}>Write</Link>
                                    <div onClick={() => { signOut() }} className={styles.link} style={{ backgroundColor: 'red', padding: '7px', borderRadius: '5px' }}>Logout</div>

                                </div>
                            )}
                        </>

                    )
                    : (
                        <>
                            <div onClick={() => { signIn() }} className={`${styles.link} ${styles.desktopOnly}`} >Login</div>

                            <Link href='/register' className={`${styles.link} ${styles.desktopOnly}`} >Register</Link>

                            {open && (
                                <div className={styles.responsiveMenu}>
                                    <Link href="/">Home</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>
                                    <div onClick={() => { signIn() }} className={`${styles.link} ${styles.login}`}>Login</div>
                                    <Link href='/register' className={`${styles.link} ${styles.register}`}>Register</Link>
                                </div>
                            )}
                        </>
                    )
            }
        </>
    )
}

export default AuthLinks