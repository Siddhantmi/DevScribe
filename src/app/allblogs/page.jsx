import BlogCard from '@/components/blogCard/BlogCard'
import { blogs } from '@/lib/data'
import Image from 'next/image'
import styles from "./allblogs.module.css"
import Featured from '@/components/featured/Featured'
import Menu from '@/components/menu/Menu'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'

export async function fetchBlogs() {

  
  const res = await fetch(`https://devscribe.me/api/blog`, { cache: 'no-store' })

  return res.json()
}

export default async function Home() {
  const blogs = await fetchBlogs()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        <CardList title="All posts"  showMoreButton={false} className={styles.cardlist}/>
        <Menu className={styles.menu} />
      </div>
    </div>
  )
}