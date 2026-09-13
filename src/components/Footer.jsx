import { Link } from 'react-router-dom';
import { COMPANY } from '../config';
import { getWhatsAppUrl } from '../utils/whatsapp';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="logo-icon">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              {COMPANY.name}
            </h3>
            <p>{COMPANY.tagline}</p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Locations</h4>
            <p>Whitefield</p>
            <p>Indiranagar</p>
            <p>Sarjapur Road</p>
            <p>Hebbal</p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>{COMPANY.address}</p>
            <p>{COMPANY.phone}</p>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#25d366', marginTop: '0.5rem', display: 'inline-block' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p className="demo-disclaimer" style={{ marginTop: '0.5rem', opacity: 0.7 }}>
            Demo website — Property listings, testimonials and company statistics shown are sample content.
          </p>
        </div>
      </div>
    </footer>
  );
}
