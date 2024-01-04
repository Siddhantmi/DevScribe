// Section.js
import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';

const Section = ({ id, title, content, code }) => {
  
  const [isCodeCopied, setCodeCopied] = useState(false);

  const handleCopyCode = () => {
    setCodeCopied(true);

    // Reset the state after a brief period
    setTimeout(() => {
      setCodeCopied(false);
    }, 2000);
  };

  return (
    <section id={id} className="mb-8 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>

      {code && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Code Example:</h3>
          <div className="relative" style={{ backgroundColor: '#000', borderRadius: '0.375rem' }}>
            <SyntaxHighlighter language="javascript" style={vs} customStyle={{ overflowX: 'auto' }} showLineNumbers>
              {code}
            </SyntaxHighlighter>
            <CopyToClipboard text={code} onCopy={handleCopyCode}>
              <button
                className={`absolute top-2 right-2 px-2 py-1 rounded focus:outline-none ${
                  isCodeCopied ? 'bg-green-700 text-white' : 'bg-blue-700 text-white hover:bg-blue-800'
                }`}
              >
                {isCodeCopied ? 'Code Copied!' : 'Copy Code'}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;
