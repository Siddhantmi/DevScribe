import Image from "next/image";
import styles from "./card.module.css"
import Link from "next/link";

const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };
  

export default async function Card(){
    const { topics } = await getTopics();
    return (
        <>
        {topics.map((t) => (
        <div className={styles.container} >
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill/>

            </div>
            <div className={styles.textContainer} key={t._id}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2022 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                <h1>{t.title}</h1>
                </Link>
                <p>
                {t.description}
                </p>
                <Link href="/">Read More </Link>
            </div>
        </div>
        ))}
        </>
    )
}
