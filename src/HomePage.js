// src/App.js
import React from 'react';
import MainBody from './components/MainBody';


const HomePage = () => {
    const sectionsData = [
        {
            id: 'section1', title: 'Section 1', content: `
      If you want to customize the appearance of specific HTML tags within your code block, you can achieve this by using a custom syntax highlighter that supports token-based styling. In your case, you can modify the SyntaxHighlighter component to apply custom styles for specific HTML tags, like <h1>.`,
            code:
                `    <div className="flex flex-col h-screen"> 
    <Navbar toggleSidebar={toggleSidebar} />
    <div className="flex-1 flex overflow-hidden">
    <Sidebar isSidebarOpen={isSidebarOpen} updateSelectedSection={updateSelectedSection} />
    <MainBody sections={sectionsData} />
    </div>
    </div>` },
        { id: 'section2', title: 'Section 2', content: 'Your content goes here...', code: '<h1>Hello world</h1>' },
        { id: 'section3', title: 'Section 3', content: 'Your content goes here...', code: '<h1>Hello world</h1>' },
        // Add more sections as needed
    ];

    return (
        <MainBody sections={sectionsData} />
    );

};

export default HomePage;


