import Image from "next/image";
import styles from "./card.module.css"
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill/>

            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2022 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, neque.</h1>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate nemo sit, consequuntur maiores laboriosam sint, fugiat quibusdam dolore officia earum. Optio dolorem voluptatibus nam labore nobis, fugiat sunt molestias excepturi a necessitatibus adipisci praesentium dolores culpa laborum deleniti aliquam.
                </p>
                <Link href="/">Read More </Link>
            </div>
        </div>
    )
}

export default Card;