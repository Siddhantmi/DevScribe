import React from 'react'
import styles from "./categoryList.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryList(){
    return (
        <div className={styles.container} >
            <h1 className={styles.title}>Browse by Tags</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" className={styles.category}>

                   
                    #Style
                </Link>
                <Link href="/blog?cat=style" className={styles.category}>

                 
                    #Fashion
                </Link>
                <Link href="/blog?cat=style" className={styles.category}>

                
                    #Coding 
                </Link>
                <Link href="/blog?cat=style" className={styles.category}>

                 
                    #Culture
                </Link>
                <Link href="/blog?cat=style" className={styles.category}>
                    #Culture
                </Link>

            </div>
        </div>


    )
}
