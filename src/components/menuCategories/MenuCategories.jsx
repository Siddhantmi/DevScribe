import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

export default function MenuCategories(){
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        #Style
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
   
    </div>
  );
};

