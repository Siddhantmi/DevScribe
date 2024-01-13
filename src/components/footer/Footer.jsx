import React from 'react'
import styles from './footer.module.css'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
     <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          {/* <Image src="/logo.png" alt="lama blog" width={50} height={50} /> */}
          <h1 className={styles.logoText}>Devscribe</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
       
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
         
          <Link href="/">Home</Link>
          <Link href="about-us">About us</Link>
          <Link href="contact-us">Contact us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className={styles.list}>
          
          <Link href="createblog">Write Blogs</Link>
          <Link href="/allblogs">All Blog</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Featured</Link>
        </div>
       
       
        <div className={styles.list}>
          <span className={styles.listTitle}></span>

          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
   
        </div>
      </div>
    </div>
  )
}

export default Footer