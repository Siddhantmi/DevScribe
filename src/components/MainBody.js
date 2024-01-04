// src/MainBody.js
import React from 'react';
import Section from './Section';


const MainBody = ({ sections }) => {
  return (
    <>
     {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title} content={section.content} code={section.code} />
      ))}
    </>
  );
};

export default MainBody;


