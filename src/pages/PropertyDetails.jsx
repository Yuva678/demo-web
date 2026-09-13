import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPropertyEnquiryUrl } from '../utils/whatsapp';
import properties from '../data/properties';
import '../styles/PropertyDetails.css';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [id]);

  useEffect(() => {
    if (property) {
      document.title = `${property.name} — PrimeNest Realty`;
    } else {
      document.title = 'Property Not Found — PrimeNest Realty';
    }
  }, [property]);

  if (!property) {
    return (
      <div className="property-not-found container">
        <h1>Property not found</h1>
        <p>The property you're looking for doesn't exist or has been removed.</p>
        <Link to="/properties" className="btn btn-primary">
          Browse Properties
        </Link>
      </div>
    );
  }

  const {
    name,
    type,
    bhk,
    location,
    price,
    bedrooms,
    bathrooms,
    area,
    description,
    features,
    images,
  } = property;

  return (
    <div className="property-details">
      <div className="container">
        <Link to="/properties" className="property-details-back">
          ← Back to Properties
        </Link>

        {/* Content + sidebar */}
        <div className="property-details-layout">
          <div className="property-info">
            {/* Gallery */}
            <div className="property-gallery">
              <div className="property-gallery-main">
                <img
                  src={images[activeImage]}
                  alt={`${name} — Image ${activeImage + 1}`}
                />
              </div>
              {images.length > 1 && (
                <div className="property-gallery-thumbs">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      className={`property-gallery-thumb ${i === activeImage ? 'active' : ''}`}
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={img} alt={`${name} thumbnail ${i + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="property-description">
              <h2>About This Property</h2>
              <p>{description}</p>
            </div>

            <div className="property-features">
              <h2>Key Features</h2>
              <ul>
                {features.map((f, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="property-sidebar">
            <span className="property-type-badge">{type}</span>
            <h1>{name}</h1>
            <p className="property-info-location">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {location}, Bengaluru
            </p>
            <p className="property-info-price">{price}</p>
            
            <div className="property-meta-grid">
              <div className="property-meta-item">
                <span className="property-meta-value">{bedrooms}</span>
                <span className="property-meta-label">Beds</span>
              </div>
              <div className="property-meta-item">
                <span className="property-meta-value">{bathrooms}</span>
                <span className="property-meta-label">Baths</span>
              </div>
              <div className="property-meta-item">
                <span className="property-meta-value">{area}</span>
                <span className="property-meta-label">Sq Ft</span>
              </div>
            </div>

            <a
              href={getPropertyEnquiryUrl(name, location)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              Enquire on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-secondary btn-lg btn-block">
              Schedule a Site Visit
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
