"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import styles from './singlePage.module.css'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { format } from 'timeago.js'
import { useRouter } from 'next/navigation'
import Comment from '@/components/comment/Comment'
import person from '../../../../public/person.jpg'
import Menu from '@/components/menu/Menu'
import DOMPurify from 'dompurify';

const BlogDetails = (ctx) => {
    const [blogDetails, setBlogDetails] = useState("")
    const [isLiked, setIsLiked] = useState(false)
    const [blogLikes, setBlogLikes] = useState(0)

    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState([])

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        async function fetchComments() {
            const res = await fetch(`https://devscribe.me/api/comment/${ctx.params.id}`, { cache: 'no-store' })
            const comments = await res.json()

            setComments(comments)
        }
        fetchComments()
    }, [])

 // React Quill editor settings
 const modules = {
    toolbar: {
        container: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'code'],
            ['link'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block'],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            ['clean'],
            ['link', 'image', 'video'],
            ['spanblock']
        ],
    },
};
    useEffect(() => {
        async function fetchBlog() {
            const res = await fetch(`https://devscribe.me/api/blog/${ctx.params.id}`, { cache: 'no-store' })
            const blog = await res.json()

            setBlogDetails(blog)
            setIsLiked(blog?.likes?.includes(session?.user?._id))
            setBlogLikes(blog?.likes?.length || 0)
        }
        fetchBlog()
    }, [session])

    const handleDelete = async () => {
        try {
            const confirmModal = confirm("Are you sure you want to delete your blog?")

            if (confirmModal) {
                const res = await fetch(`https://devscribe.me/api/blog/${ctx.params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${session?.user?.accessToken}`
                    },
                    method: "DELETE"
                })

                if (res.ok) {
                    router.push('/')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLike = async () => {
        try {
            const res = await fetch(`https://devscribe.me/api/blog/${ctx.params.id}/like`, {
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

    const handleComment = async () => {
        if (commentText?.length < 2) {
            toast.error("Comment must be at least 2 characters long")
            return
        }

        try {
            const body = {
                blogId: ctx.params.id,
                authorId: session?.user?._id,
                text: commentText
            }

            const res = await fetch(`https://devscribe.me/api/comment`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.accessToken}`
                },
                method: "POST",
                body: JSON.stringify(body)
            })

            const newComment = await res.json()

            setComments((prev) => {
                return [newComment, ...prev]
            })

            setCommentText("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.imageContainer}>
                        <Image src={blogDetails?.imageUrl} fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.userAndTags}>
                            <div className={styles.tags}>
                                <span className={styles.tag} >#{blogDetails?.category}</span>

                            </div>
                            <div className={styles.infoContainer}>
                                <span className={styles.date}> Posted : {format(blogDetails?.createdAt)}</span>
                            </div>
                        </div>
                        <h3 className={styles.title}>{blogDetails?.title}</h3>
                       
                        <div className={styles.usernameLike}>
                        {
                            blogDetails?.authorId?._id.toString() === session?.user?._id.toString()
                                ? (
                                    <div className={styles.controls}>
                                        <Link className={styles.editButton} href={`/blog/edit/${ctx.params.id}`}>
                                            Edit <BsFillPencilFill />
                                        </Link>
                                        <button onClick={handleDelete} className={styles.deleteButton}>
                                            Delete
                                            <AiFillDelete />
                                        </button>
                                    </div>
                                )
                                : (
                                    <div className={styles.user}>
                                    <div className={styles.userImageContainer}>
                                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                                    </div>
                                    <div className={styles.userTextContainer}>
                                        <span className={styles.username} >{blogDetails?.authorId?.username}</span>
                                    </div>
                                </div>
                                )
                        }
                           

                            <div className={styles.likeButton}>
                                <span className={`${styles.likeCount} ${isLiked ? styles.likeIcon : styles.unlikeIcon}`}>
                                    {blogLikes}
                                </span>
                                {isLiked ? (
                                    <AiFillLike size={20} onClick={handleLike} className={styles.likeIcon} />
                                ) : (
                                    <AiOutlineLike size={20} onClick={handleLike} className={styles.unlikeIcon} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogDetails?.desc) }} />
                    </div>

                    <div className={styles.comment}>
                        {session ? (
                            <div className={styles.commentInput}>
                                <Image src={person} width='45' height='45' alt="" />
                                <input value={commentText} type="text" placeholder='Type message...' onChange={(e) => setCommentText(e.target.value)} />
                                <button onClick={handleComment}>Post</button>
                            </div>
                        ) : (
                            <div className={styles.loginToComment}>
                                <Link href="/login">Login to comment</Link>
                            </div>
                        )}

                        <div className={styles.comments}>
                            {
                                comments?.length > 0
                                    ? comments.map((comment) => (
                                        <Comment key={comment._id} comment={comment} setComments={setComments} />
                                    ))
                                    : <h4 className={styles.noComments}>No comments. Be the first one to leave a comment!</h4>
                            }
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );

}

export default BlogDetails