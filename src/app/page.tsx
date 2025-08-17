'use client';

import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const themeToggleBtn = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.body.classList.add(currentTheme);
        }

        themeToggleBtn?.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            let theme = 'light-theme';
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark-theme';
            }
            localStorage.setItem('theme', theme);
        });
    }, []);

    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <h1><a href="#">My Web Dev Business</a></h1>
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <button id="theme-toggle" className="btn-theme-toggle">Toggle Theme</button>
                    </div>
                </nav>
            </header>

            <section id="hero" className="hero">
                <div className="container">
                    <h2>Your Vision, Our Code.</h2>
                    <p>Transforming ideas into stunning digital realities.</p>
                    <a href="#contact" className="btn">Get a Free Consultation</a>
                </div>
            </section>

            <section id="services" className="services">
                <div className="container">
                    <h3>Our Services</h3>
                    <div className="service-grid">
                        <div className="service-item">
                            <h4>Web Development</h4>
                            <p>Building responsive, fast, and scalable websites and web applications using modern technologies.</p>
                        </div>
                        <div className="service-item">
                            <h4>SEO Optimization</h4>
                            <p>Improving your website's visibility on search engines to drive organic traffic and growth.</p>
                        </div>
                        <div className="service-item">
                            <h4>UI/UX Design</h4>
                            <p>Crafting intuitive and engaging user interfaces for an exceptional user experience.</p>
                        </div>
                        <div className="service-item">
                            <h4>Digital Marketing</h4>
                            <p>Developing strategies to enhance your online presence and reach your target audience effectively.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="portfolio">
                <div className="container">
                    <h3>Our Portfolio</h3>
                    <div className="portfolio-grid">
                        <div className="portfolio-item">
                            <img src="https://via.placeholder.com/300x200?text=Project+1" alt="Project 1" />
                            <h4>Project Title 1</h4>
                            <p>A description of the project and technologies used.</p>
                        </div>
                        <div className="portfolio-item">
                            <img src="https://via.placeholder.com/300x200?text=Project+2" alt="Project 2" />
                            <h4>Project Title 2</h4>
                            <p>A description of the project and technologies used.</p>
                        </div>
                        <div className="portfolio-item">
                            <img src="https://via.placeholder.com/300x200?text=Project+3" alt="Project 3" />
                            <h4>Project Title 3</h4>
                            <p>A description of the project and technologies used.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="testimonials">
                <div className="container">
                    <h3>What Our Clients Say</h3>
                    <div className="testimonial-item">
                        <p>"Incredible work! Our website has never looked better and performs flawlessly."</p>
                        <span>- Happy Client 1</span>
                    </div>
                    <div className="testimonial-item">
                        <p>"They exceeded our expectations. Professional, responsive, and highly skilled."</p>
                        <span>- Happy Client 2</span>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container">
                    <h3>Get in Touch</h3>
                    <p>Ready to start your project? Contact us for a free consultation.</p>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows={5}></textarea>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2024 My Web Dev Business. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
