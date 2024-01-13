"use client"
import React, { useState } from 'react';
import styles from './contactUs.module.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const emailAddress = 'iamdevscriber@gmail.com';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/moqgvwqy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                // Redirect to the home page
                window.location.href = '/'; // Replace '/' with the actual URL of your home page
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
                Have questions or suggestions? Feel free to reach out to us using the form below or via email.
            </p>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label className={styles.formLabel} htmlFor="name">Your Name:</label>
                <input type="text" className={styles.inputText} id="name" name="name" placeholder="Your Name" onChange={handleChange} />

                <label className={styles.formLabel} htmlFor="email">Your Email:</label>
                <input type="email" className={styles.inputText} id="email" name="email" placeholder="Your Email" onChange={handleChange} />

                <label className={styles.formLabel} htmlFor="message">Your Message:</label>
                <textarea id="message" className={styles.inputText} name="message" rows="4" placeholder="Type your message here..." onChange={handleChange}></textarea>

                <button type="submit" className={styles.submitButton}>
                    Send Message
                </button>
            </form>

            <div className={styles.emailSection}>
                <p className={styles.emailLabel}>For general inquiries, you can also email us at:</p>
                <a href={`mailto:${emailAddress}`} className={styles.emailLink}>{emailAddress}</a>
            </div>
        </div>
    );
};

export default ContactUs;
