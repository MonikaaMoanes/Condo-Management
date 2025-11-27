import { Link } from "react-router-dom";
import "../App.css";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import heroImage from "../assets/hero.jpg"; 

const Home = () => {
  return (
    <div className="home-wrapper">
      <header className="header">
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 60 60">
            <rect x="0" y="0" width="60" height="60" rx="10" fill="url(#grad1)" />
            <text x="18" y="42" fontFamily="Poppins" fontWeight="700" fontSize="34" fill="white">C</text>
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="60" y2="60">
                <stop offset="0%" stopColor="#2B4767" />
                <stop offset="100%" stopColor="#4A90E2" />
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">Condico</span>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="login-btn">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-text">
          <h1>Welcome to <span className="highlight">Condico</span></h1>
          <p>Smart Condo Management – Modern, Connected & Efficient</p>
          <Link to="/properties" className="cta-btn">View Properties</Link>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Maintenance Requests</h3>
            <p>Submit and track issues online easily.</p>
          </div>
          <div className="card">
            <h3>Payment Management</h3>
            <p>Pay condo fees securely and view history.</p>
          </div>
          <div className="card">
            <h3>Facility Booking</h3>
            <p>Reserve shared facilities at your convenience.</p>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="properties" id="properties">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          <div className="property-card">
            <img src={property1} alt="Property 1" />
            <h3>Luxury Condo #1</h3>
            <p>2 Beds · 2 Baths · Downtown</p>
          </div>

          <div className="property-card">
            <img src={property2} alt="Property 2" />
            <h3>Modern Condo #2</h3>
            <p>3 Beds · 2 Baths · Near Park</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Condico. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;


