import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

export default function MenuPosts({ withImage }){
  return (
    <div className={styles.items}>
    
      <Link href="/" className={styles.item}>
    
        <div className={styles.textContainer}>
          
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.date}> 10.03.2023</span>
            <span className={styles.category}>
              <span className={styles.tag}>#food</span>
              <span className={styles.tag}>#quality</span>
              <span className={styles.tag}>#food</span>
            </span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
    
        <div className={styles.textContainer}>
          
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.date}> 10.03.2023</span>
            <span className={styles.category}>
              <span className={styles.tag}>#food</span>
              <span className={styles.tag}>#quality</span>
              <span className={styles.tag}>#food</span>
            </span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
    
        <div className={styles.textContainer}>
          
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.date}> 10.03.2023</span>
            <span className={styles.category}>
              <span className={styles.tag}>#food</span>
              <span className={styles.tag}>#quality</span>
              <span className={styles.tag}>#food</span>
            </span>
          </div>
        </div>
      </Link>
      
    </div>
  );
};
