import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export default function Featured() {
    return (
        <div className={styles.container} >
            <h1 className={styles.title}>

                <b>Welcome to Devscribe!</b>
                <br />
                Explore the world of simplified web learning and be a <strong>Devscriber</strong>.
                <span>We're on a quest to transform long and challenging tutorials into short, simplified formats.</span>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum color sit smejt aline const sdjfsl iosdjf</h1>
                    <p className={styles.psotdesc}>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum obcaecati possimus velit mollitia cum recusandae illum quas enim voluptate porro dolore saepe, natus quos inventore tempora accusamus adipisci eum maxime dolorem neque nulla odit earum? Nam incidunt odio deleniti, veritatis cumque hic expedita inventore necessitatibus facilis assumenda saepe velit! Itaque adipisci quia qui soluta numquam incidunt, dicta laborum cumque.
                    </p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    )
}
