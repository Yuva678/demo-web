import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../utils/whatsapp';
import '../styles/About.css';

export default function About() {
  useEffect(() => {
    document.title = 'About Us — PrimeNest Realty';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Intro */}
      <section className="container about-hero">
        <h1>About PrimeNest Realty</h1>
        <p>
          PrimeNest Realty is a Bengaluru-based residential real estate
          consultancy dedicated to helping individuals and families find their
          ideal home. We combine local market expertise with a personalised,
          transparent approach to property search.
        </p>
      </section>

      {/* Mission */}
      <section className="section about-mission" aria-label="Our mission">
        <div className="container about-mission-content">
          <h2>Our Mission</h2>
          <p>
            To simplify the home-buying experience in Bengaluru by offering
            curated, quality-assured listings and honest, expert guidance at
            every step — from first search to final handover.
          </p>
          <p>
            We believe finding a home should be exciting, not stressful. That's
            why we personally visit and vet every property before recommending
            it to our clients.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why" aria-label="Why choose PrimeNest">
        <div className="container">
          <h2>Why Families Choose PrimeNest</h2>
          <div className="about-why-grid">
            <div className="about-why-item">
              <h3>Neighbourhood Specialists</h3>
              <p>
                We know Bengaluru inside out — from upcoming micro-markets to
                established premium localities. Our advice is grounded in
                first-hand experience.
              </p>
            </div>
            <div className="about-why-item">
              <h3>End-to-End Support</h3>
              <p>
                From property shortlisting and site visits to documentation
                and handover — we handle the details so you don't have to.
              </p>
            </div>
            <div className="about-why-item">
              <h3>No-Pressure Approach</h3>
              <p>
                We don't push properties. We listen to what you need, present
                options that match, and let you decide on your own timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section about-stats" aria-label="Company statistics">
        <div className="container">
          <div className="about-stats-grid">
            <div>
              <span className="about-stat-value">150+</span>
              <span className="about-stat-label">Homes Listed</span>
            </div>
            <div>
              <span className="about-stat-value">12+</span>
              <span className="about-stat-label">Bengaluru Neighbourhoods</span>
            </div>
            <div>
              <span className="about-stat-value">98%</span>
              <span className="about-stat-label">Client Satisfaction</span>
            </div>
          </div>
          <p className="demo-disclaimer">
            Demo statistics — for illustrative purposes only.
          </p>
        </div>
      </section>
    </div>
  );
}
