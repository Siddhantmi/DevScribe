// src/MainBody.js
import React from 'react';
import Section from './Section';
import Footer from './Footer';

const MainBody = ({ sections }) => {
  return (
    <div className="w-full lg:w-5/6 p-4 ml-auto overflow-y-auto">
      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title} content={section.content} code={section.code} />
      ))}
      <Footer />
    </div>
  );
};

export default MainBody;
