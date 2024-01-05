"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {

  const status = "authenticated"

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (<div className={styles.write}>
        <textarea placeholder="Write a comment .... " className={styles.input} />
        <button className={styles.button}>Send</button>
      </div>) : (<Link href="/login">Login to write a comment</Link>)}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}

            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Siddhant Mishra</span>
              <span className={styles.userInfo}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quae iste magni sit nihil ipsum voluptatibus, quasi sapiente quisquam dicta tempora ducimus soluta omnis sequi id fugiat laborum cumque? Eos mollitia odio id impedit ut aliquam, laudantium quae explicabo illo?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
