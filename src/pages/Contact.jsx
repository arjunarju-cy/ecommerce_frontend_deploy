import React, { useState } from 'react';
import '../pageStyles/Contact.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${name}! Your message has been sent.`);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Fill out the form below or reach out directly.</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p><strong>Email:</strong> support@shopeasy.com</p>
                    <p><strong>Phone:</strong> +1 (234) 567-890</p>
                    <p><strong>Address:</strong> 123 E-commerce Ave, Tech City, TC 12345</p>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                placeholder="How can we help?"
                            ></textarea>
                        </div>
                        <button type="submit" className="contact-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
