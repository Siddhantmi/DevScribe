"use client"
import React, { useEffect, useState } from 'react';
import styles from './cardList.module.css';
import BlogCard from '../blogCard/BlogCard';
import Pagination from '../pagination/Pagination';

export async function fetchBlogs() {
  const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' });

  const blogs = await res.json();

  // Check if blogs is not null or undefined before sorting
  const sortedBlogs = blogs && blogs.length > 0
    ? blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6)
    : [];

  return sortedBlogs;
}

export default function CardList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogs = await fetchBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ marginTop: '50px' }}>
        {blogs?.length > 0 && <h2>Recent Blogs</h2>}
      </h1>
      <div className={styles.posts}>
        {blogs?.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : (
          <h3 className={styles.noBlogs}>There are no blogs to display</h3>
        )}
      </div>
      <Pagination />
    </div>
  );
}
