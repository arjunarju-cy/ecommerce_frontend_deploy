import React from 'react';
import '../pageStyles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
                <p>Welcome to ShopEasy, your number one source for all things quality.</p>
            </div>
            <div className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide the best products with a focus on dependability, customer service, and uniqueness.
                        We're working to turn our passion for e-commerce into a booming online store. We hope you enjoy our products
                        as much as we enjoy offering them to you.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2026, ShopEasy has come a long way from its beginnings. When we first started out,
                        our passion for providing high-quality, affordable goods drove us to do intense research so that ShopEasy
                        can offer you the world's most advanced products. We now serve customers all over the world and are
                        thrilled that we're able to turn our passion into our own website.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
