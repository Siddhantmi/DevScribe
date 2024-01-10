"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import styles from './createBlog.module.css';
import 'react-quill/dist/quill.snow.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

let ReactQuill;
if (typeof window !== 'undefined') {
    ReactQuill = require('react-quill');
}

const CreateBlog = () => {
    const CLOUD_NAME = 'dzimftfcz';
    const UPLOAD_PRESET = 'devscribe';

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Nature');
    const [photo, setPhoto] = useState('');
    const { data: session, status } = useSession();
    const router = useRouter();
    const [desc, setDesc] = useState('');

    useEffect(() => {
        // Load additional scripts or perform any other client-side operations
    }, []);

    const handleEditorChange = (content, delta, source, editor) => {
        setDesc(content);

        const codeBlocks = editor.getContents().ops.filter((op) => op.insert && op.insert.code);

        codeBlocks.forEach((codeBlock) => {
            const language = 'javascript';

            editor.formatText(codeBlock.insert.index, codeBlock.insert.length, { 'code-block': true });

            const highlightedCode = (
                <div style={{ backgroundColor: 'black', color: 'white', borderRadius: '4px', padding: '10px' }}>
                    <SyntaxHighlighter language={language} style={materialLight}>
                        {codeBlock.insert.code}
                    </SyntaxHighlighter>
                </div>
            );

            editor.clipboard.dangerouslyPasteHTML(
                codeBlock.insert.index,
                highlightedCode.outerHTML,
                'api'
            );
        });
    };

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'unauthenticated') {
        return <p>Access Denied</p>;
    }

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
                ['spanblock'],
            ],
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!photo || !title || !category || !desc) {
            toast.error('All fields are required');
            return;
        }

        try {
            const imageUrl = await uploadImage();

            const res = await fetch(`https://devscribe.vercel.app/api/blog`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.accessToken}`,
                },
                method: 'POST',
                body: JSON.stringify({ title, desc, category, imageUrl, authorId: session?.user?._id }),
            });

            if (!res.ok) {
                throw new Error('Error occurred');
            }

            const blog = await res.json();

            router.push(`/blog/${blog?._id}`);
        } catch (error) {
            console.error(error);
        }
    };

    const uploadImage = async () => {
        if (!photo) return;

        const formData = new FormData();

        formData.append('file', photo);
        formData.append('upload_preset', UPLOAD_PRESET);

        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            const imageUrl = data['secure_url'];

            return imageUrl;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Create Post</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Title..." className={styles.input} onChange={(e) => setTitle(e.target.value)} />

                {ReactQuill && (
                    <ReactQuill
                        theme="snow"
                        value={desc}
                        onChange={handleEditorChange}
                        placeholder="Description..."
                        modules={modules}
                    />
                )}

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Nature">Nature</option>
                    <option value="Mountain">Mountain</option>
                    <option value="Ocean">Ocean</option>
                    <option value="Wildlife">Wildlife</option>
                    <option value="Forest">Forest</option>
                </select>

                <label htmlFor="image">Upload Image</label>
                <input id="image" type="file" onChange={(e) => setPhoto(e.target.files[0])} />

                <button className={styles.publish}>Create</button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default CreateBlog;
