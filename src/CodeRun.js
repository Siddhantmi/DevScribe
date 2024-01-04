import React, { useState, useEffect } from 'react';

const CodeEditor = ({ code, label, onChange, active }) => {
    const textareaStyle = {
        width: '100%',
        height: '580px',
        padding: '8px',
    border: 'none',
        background: 'black',
        color: 'white',
      
        fontFamily: 'monospace',
        fontSize: '17px',
      };

      
      
  return (
    <div className={`mb-4 ${active ? 'flex flex-col h-screen' : 'hidden'}`}>
      {/* Label for code editor */}
      <div className="text-white mb-2">{label}</div>

      {/* Textarea for code */}
      <textarea
        className="w-full h-screen p-2 border border-gray-600 bg-gray-800 text-white" 
        style={textareaStyle}
        value={code}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const CodeRun = () => {
  const defaultHtmlCode = '<h2>Welcome</h2>';
  const defaultCssCode = '/* Add your styles here */';
  const defaultJsCode = '// Add your JavaScript code here';

  const [htmlCode, setHtmlCode] = useState(defaultHtmlCode);
  const [cssCode, setCssCode] = useState(defaultCssCode);
  const [jsCode, setJsCode] = useState(defaultJsCode);
  const [output, setOutput] = useState('');
  const [activeTab, setActiveTab] = useState('html');
  const outputareaStyle = {
    width: '100%',
    height: '628px',
  };

  useEffect(() => {
    const handleRunCode = () => {
      // Combine HTML, CSS, and JS code
      const fullCode = `<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`;

      // Set the output
      setOutput(fullCode);
    };

    // Delay for 100ms before running the code after any code change
    const timeoutId = setTimeout(handleRunCode, 0);

    // Cleanup function to clear the timeout when the component unmounts or when code changes
    return () => clearTimeout(timeoutId);
  }, [htmlCode, cssCode, jsCode]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex bg-gray-900 text-white">
      {/* First Half (50% width) */}
      <div className="w-1/2 p-4">
        {/* Tabs */}
        <div className="">
          <button
            className={`mr-2 ${activeTab === 'html' ? 'bg-gray-700' : ''}`}
            onClick={() => handleTabClick('html')}
          >
            HTML
          </button>
          <button
            className={`mr-2 ${activeTab === 'css' ? 'bg-gray-700' : ''}`}
            onClick={() => handleTabClick('css')}
          >
            CSS
          </button>
          <button
            className={activeTab === 'js' ? 'bg-gray-700' : ''}
            onClick={() => handleTabClick('js')}
          >
            JavaScript
          </button>
        </div>

        {/* Code editor for HTML */}
        <CodeEditor code={htmlCode} onChange={setHtmlCode}  active={activeTab === 'html'} />

        {/* Code editor for CSS */}
        <CodeEditor code={cssCode} onChange={setCssCode}  active={activeTab === 'css'} />

        {/* Code editor for JavaScript */}
        <CodeEditor code={jsCode} onChange={setJsCode} active={activeTab === 'js'} />
      </div>

      {/* Second Half (50% width) */}
      <div className="w-1/2 bg-gray-800">
        <iframe
          className="border border-gray-600 w-full bg-white text-black"
          style={outputareaStyle}
          title='output'
          srcDoc={output}
        />
      </div>
    </div>
  );
};

export default CodeRun;
