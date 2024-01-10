import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";


export default function Menu(){
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Trending"}</h2>
      <h1 className={styles.title}>Popular Uploads</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Top tags</h2>
      <h1 className={styles.title}>Browse by Category</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

