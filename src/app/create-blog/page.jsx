'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'
import styles from './createBlog.module.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import QuillEditor from '@/components/quilleditor/QuillEditor'
import 'react-quill/dist/quill.snow.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';


const CreateBlog = () => {
    const CLOUD_NAME = 'dzimftfcz'
    const UPLOAD_PRESET = 'devscribe'

    const [title, setTitle] = useState('')

    const [category, setCategory] = useState("Nature")

    const [photo, setPhoto] = useState('')

    const { data: session, status } = useSession()
    const router = useRouter()

    //react quill codes 
    const [desc, setdesc] = useState('');

   

    const handleEditorChange = (content, delta, source, editor) => {

        setdesc(content);
     

        // Find code blocks in the editor content
        const codeBlocks = editor.getContents().ops.filter((op) => op.insert && op.insert.code);

        // Iterate through code blocks and apply syntax highlighting
        codeBlocks.forEach((codeBlock, index) => {
            const language = 'javascript'; // You can detect the language or set it based on your requirements

            // Apply a custom class to the code block
            editor.formatText(codeBlock.insert.index, codeBlock.insert.length, { 'code-block': true });

            // Use react-syntax-highlighter for syntax highlighting
            const highlightedCode = (
                <div style={{ backgroundColor: 'black', color: 'white', borderRadius: '4px', padding: '10px' }}>
                    <SyntaxHighlighter language={language} style={materialLight}>
                        {codeBlock.insert.code}
                    </SyntaxHighlighter>
                </div>
            );

            // Replace the original code block with the highlighted code
            editor.clipboard.dangerouslyPasteHTML(
                codeBlock.insert.index,
                highlightedCode.outerHTML,
                'api'
            );
        });
    };

    //react quill ends


    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p>
            Access Denied
        </p>
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




    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!photo || !title || !category || !desc) {
            toast.error("All fields are required")
            return
        }

        try {
            const imageUrl = await uploadImage()

            const res = await fetch(`http://localhost:3000/api/blog`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.accessToken}`
                },
                method: 'POST',
                body: JSON.stringify({ title, desc, category, imageUrl, authorId: session?.user?._id })
            })

            if (!res.ok) {
                throw new Error("Error occured")
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




    return (
        <div className={styles.container}>

            <h2>Create Post</h2>
            <form className={styles.form} onSubmit={handleSubmit} >
                <input type="text" placeholder='Title...' className={styles.input} onChange={(e) => setTitle(e.target.value)} />


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
                    Upload Image
                </label>
                <input id='image' type="file" onChange={(e) => setPhoto(e.target.files[0])} />

                <button className={styles.publish}>Create</button>
            </form>

            <ToastContainer />
        </div>
    )
}

export default CreateBlog