"use client"
import React, { useEffect, useState } from 'react';
import styles from './cardList.module.css';
import BlogCard from '../blogCard/BlogCard';
import Link from 'next/link';

export async function fetchBlogs() {
  const baseURL = process.env.NEXTAUTH_URL;
  const res = await fetch(`http://localhost:3000/api/blog`, { cache: 'no-store' });

  const blogs = await res.json();

  // Check if blogs is not null or undefined before sorting
  const sortedBlogs = blogs && blogs.length > 0
    ? blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return sortedBlogs;
}

const CardList = ({ title, numberOfBlogs, showMoreButton }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogs = await fetchBlogs();
      const displayedBlogs = numberOfBlogs ? fetchedBlogs.slice(0, numberOfBlogs) : fetchedBlogs;
      setBlogs(displayedBlogs);
    };

    fetchData();
  }, [numberOfBlogs]);

  return (
    <div className={styles.container}>
      {title && (
        <h1 className={styles.title}>
          <h2>{title}</h2>
        </h1>
      )}
      <div className={styles.posts}>
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <h3 className={styles.noBlogs}>Loading.. tutorials</h3>
        )}
      </div>
      {showMoreButton && (
        <Link className={styles.button} href={`/allblogs`}>
          More
        </Link>
      )}
    </div>
  );
};

export default CardList;