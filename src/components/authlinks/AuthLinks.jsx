'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./authLinks.module.css"

import { signIn, signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {

    const { data: session } = useSession()
    const [open, setOpen] = useState(false);
    const loggedIn = false

    return (
        <>
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {
                session?.user
                    ? (
                        <>
                            
                            <Link href='/create-blog' className={styles.link}>Write</Link>

                            <div onClick={() => { signOut() }} className={styles.link} style={{ backgroundColor: 'red', padding: '10px' }}>Logout</div>

                            {open && (
                                <div className={styles.responsiveMenu}>
                                    <Link href="/">Homepage</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>
                                    <Image src={person} width='45' height='45' />

                                    <Link href='/create-blog' className={styles.link}>Write</Link>

                                    <div onClick={() => { signOut() }} className={styles.link} style={{ backgroundColor: 'red', padding: '7px', borderRadius: '5px' }}>Logout</div>

                                </div>
                            )}
                        </>

                    )
                    : (
                        <>
                            <div onClick={() => { signIn() }} className={styles.link} style={{ backgroundColor: 'green', padding: '10px' }}>Login</div>

                            <Link href='/register' style={{ backgroundColor: 'blue', padding: '10px' }}>Register</Link>

                            {open && (
                                <div className={styles.responsiveMenu}>
                                    <Link href="/">Homepage</Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Contact</Link>
                                    <div onClick={() => { signIn() }} className={styles.link} style={{ backgroundColor: 'green', padding: '10px' }}>Login</div>

                                    <Link href='/register' style={{ backgroundColor: 'blue', padding: '10px' }}>Register</Link>

                                </div>
                            )}
                        </>
                    )
            }
        </>
    )
}

export default AuthLinks