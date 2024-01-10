'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { AiOutlineFileImage } from 'react-icons/ai'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styles from './edit.module.css'

const Edit = (ctx) => {
    const CLOUD_NAME = 'doojo83ea'
    const UPLOAD_PRESET = 'my_blog_project_webdevmania'
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState('Nature')
    const [photo, setPhoto] = useState('')
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        async function fetchBlog() {
            const res = await fetch(`https://devscribe.vercel.app/api/blog/${ctx.params.id}`)

            const blog = await res.json()

            setTitle(blog.title)
            setDesc(blog.desc)
            setCategory(blog.category)
        }
        fetchBlog()
    }, [])

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p className={styles.accessDenied}>
            Access Denied
        </p>
    }

    const handleEditorChange = (content, delta, source, editor) => {
        setDesc(content);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (title === '' || category === '' || desc === '') {
            toast.error("All fields are required")
            return
        }

        try {
            let imageUrl = null
            if (photo) {
                imageUrl = await uploadImage()
            }

            const body = {
                title,
                desc,
                category
            }

            if (imageUrl != null) {
                body.imageUrl = imageUrl
            }

            const res = await fetch(`https://devscribe.vercel.app/api/blog/${ctx.params.id}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${session?.user?.accessToken}`
                },
                method: "PUT",
                body: JSON.stringify(body)
            })

            if (!res.ok) {
                throw new Error("Error has occurred")
            }

            const blog = await res.json()

            router.push(`/blog/${blog?._id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const uploadImage = async () => {
        if (!photo) return

        const formData = new FormData()

        formData.append("file", photo)
        formData.append("upload_preset", UPLOAD_PRESET)

        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formData
            })

            const data = await res.json()

            const imageUrl = data['secure_url']

            return imageUrl
        } catch (error) {
            console.log(error)
        }
    }

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


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Edit Post</h2>
                <form onSubmit={handleSubmit}>
                    <input value={title} type="text" className={styles.input} placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
                    <ReactQuill
                        theme="snow"
                        value={desc}
                        onChange={handleEditorChange}
                        placeholder="Description..."
                        modules={modules}
                    />
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Nature">Nature</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Ocean">Ocean</option>
                        <option value="Wildlife">Wildlife</option>
                        <option value="Forest">Forest</option>
                    </select>
                    <label htmlFor='image'>
                        Upload Image <AiOutlineFileImage />
                    </label>
                    <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setPhoto(e.target.files[0])} />
                    <button className={styles.publish}>Edit</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Edit
