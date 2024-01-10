// components/textEditor/TextEditor.js
import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

const TextEditor = ({ onChange }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    // Pass the updated content to the parent component
    onChange(newEditorState.getCurrentContent().getPlainText());
  };

  return (
    <div>
      <Editor editorState={editorState} onChange={handleEditorChange} />
    </div>
  );
};

export default TextEditor;
