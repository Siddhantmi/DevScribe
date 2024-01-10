import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export default function Featured() {
    return (
        <div className={styles.container} >
            <h1 className={styles.title}>
            On a quest to <b> create the coolest and shortest </b> tech tutorials ever. Get ready for a quick and easy learning ride!  
            </h1>
            <div className={styles.post}>
            <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum color sit smejt aline const sdjfsl iosdjf</h1>
                    <p className={styles.psotdesc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt vel blanditiis repudiandae unde suscipit doloribus sunt voluptates nihil. Omnis inventore harum culpa voluptatibus porro! Id soluta deserunt error magnam sequi? Placeat architecto consequuntur accusamus repellat, tenetur maxime deserunt eum officiis?
                    </p>
                    <button className={styles.button}>Read more</button>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill />
                </div>
               
            </div>
            

        </div>
    )
}
