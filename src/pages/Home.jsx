import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { getWhatsAppUrl } from '../utils/whatsapp';
import properties from '../data/properties';
import neighbourhoods from '../data/neighbourhoods';
import testimonials from '../data/testimonials';
import '../styles/Home.css';

export default function Home() {
  useEffect(() => {
    document.title = 'PrimeNest Realty — Find a Place That Feels Like Home';
    window.scrollTo(0, 0);
  }, []);

  const featured = properties.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Premium residential property in Bengaluru"
          />
        </div>
        <div className="container hero-content">
          <p className="hero-eyebrow">Bengaluru Residential Real Estate</p>
          <h1>Find a place that<br className="hero-br" /> feels like home.</h1>
          <p className="hero-description">
            Discover premium apartments, villas and homes across Bengaluru's most
            sought-after neighbourhoods. Get in touch for personalised guidance and easy enquiries.
          </p>
          <div className="hero-actions">
            <Link to="/properties" className="btn btn-primary btn-lg hero-btn-primary">
              Explore Properties &rarr;
            </Link>
            <a
              href={getWhatsAppUrl(
                "Hi, I'm looking for a property in Bengaluru. Can you help me find the right one?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg hero-btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section featured" aria-label="Featured properties">
        <div className="container">
          <div className="featured-header">
            <div>
              <h2 className="section-title">Featured Properties</h2>
              <p className="section-subtitle">
                A selection of our most sought-after listings across Bengaluru.
              </p>
            </div>
            <Link to="/properties" className="btn btn-secondary featured-header-link">
              View All Properties →
            </Link>
          </div>
          <div className="featured-grid">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why PrimeNest */}
      <section className="section why-section" aria-label="Why choose PrimeNest">
        <div className="container why-container">
          <div className="why-header">
            <h2 className="why-title">A simpler way to find your next home</h2>
            <p className="why-subtitle">
              We make it easy to discover, explore and enquire about premium properties across Bengaluru.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <h3>Curated Properties</h3>
              <p>Handpicked for your needs</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3>Local Expertise</h3>
              <p>In-depth market knowledge</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <h3>Easy Enquiries</h3>
              <p>Via WhatsApp & call</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3>Personal Support</h3>
              <p>From first visit to move-in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Bengaluru */}
      <section className="section neighbourhoods" aria-label="Explore Bengaluru neighbourhoods">
        <div className="container">
          <h2 className="section-title">Explore Bengaluru</h2>
          <p className="section-subtitle">
            Discover properties in the city's most desirable neighbourhoods.
          </p>
          <div className="neighbourhoods-grid">
            {neighbourhoods.map((n) => (
              <div className="neighbourhood-card" key={n.id}>
                <img
                  src={n.image}
                  alt={`${n.name} neighbourhood, Bengaluru`}
                  loading="lazy"
                />
                <div className="neighbourhood-card-overlay">
                  <h3>{n.name}</h3>
                  <p>{n.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials" aria-label="Client testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real feedback from families who found their home with PrimeNest.
            </p>
            <p className="demo-disclaimer" style={{ marginTop: '0.5rem' }}>
              Demo content — testimonials are fictional.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <p>"{t.text}"</p>
                <div>
                  <span className="testimonial-author">{t.name}</span>
                  <br />
                  <span className="testimonial-location">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section final-cta" aria-label="Start your search">
        <div className="container">
          <h2>Ready to find your next home?</h2>
          <p>
            Tell us what you're looking for and we'll help you find the right
            property.
          </p>
          <div className="final-cta-actions">
            <a
              href={getWhatsAppUrl(
                "Hi, I'm looking for a home in Bengaluru. I'd like to start a conversation about my requirements."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              Start a WhatsApp Enquiry
            </a>
            <Link to="/contact" className="btn btn-secondary btn-lg final-cta-secondary">
              Schedule a Site Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
