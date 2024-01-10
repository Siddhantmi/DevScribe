'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './blogCard.module.css'
import { useSession } from 'next-auth/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import DOMPurify from 'dompurify';

const BlogCard = ({ blog: { title, desc, imageUrl, likes, authorId, _id, createdAt, category } }) => {
  const { data: session } = useSession()
  const [isLiked, setIsLiked] = useState(false)
  const [blogLikes, setBlogLikes] = useState(0)


  useEffect(() => {
    session && likes && setIsLiked(likes.includes(session?.user?._id))
    session && likes && setBlogLikes(likes.length)
  }, [likes, session])

  const handleLike = async () => {
    try {
      const res = await fetch(`https://devscribe.me/api/blog/${_id}/like`, {
        headers: {
          'Authorization': `Bearer ${session?.user?.accessToken}`
        },
        method: 'PUT'
      })

      console.log(res)
      if (res.ok) {
        if (isLiked) {
          setIsLiked(prev => !prev)
          setBlogLikes(prev => prev - 1)
        } else {
          setIsLiked(prev => !prev)
          setBlogLikes(prev => prev + 1)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Function to truncate the description to the first 40 words
  const truncatedescription = (description) => {
    const words = description.split(' ');
    if (words.length > 40) {
      return words.slice(0, 40).join(' ') + '...';
    } else {
      return description;
    }
  };

  const formattedDate = new Date(createdAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          
          <Link href={`/blog/${_id}`}>
            <Image src={imageUrl} fill />
          </Link>
        </div>

        <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>{formattedDate}</span>
            <span className={styles.category}>#{category}</span>
            {blogLikes} {" "} {isLiked
              ? (<AiFillLike onClick={handleLike} size={20} />)
              : (<AiOutlineLike onClick={handleLike} size={20} />)}
          </div>
          <Link href={`/blog/${_id}`}> <h1>{title}</h1></Link>
          
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncatedescription(desc)) }} />

          <Link className={styles.link} href={`/blog/${_id}`}>Read More </Link>
        </div>

      </div>
    </>


  )
}

export default BlogCard