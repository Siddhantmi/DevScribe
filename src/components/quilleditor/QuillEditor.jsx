// QuillEditor.js

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const QuillEditor = ({ value, onChange }) => {
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

    const handleEditorChange = (content, delta, source, editor) => {
        onChange(content);

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

    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={handleEditorChange}
            placeholder="Description..."
            modules={modules}
        />
    );
};

export default QuillEditor;
