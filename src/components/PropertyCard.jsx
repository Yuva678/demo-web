import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css';

export default function PropertyCard({ property }) {
  const { id, name, type, location, bedrooms, bathrooms, area, price, images } = property;

  return (
    <article className="property-card">
      <Link to={`/properties/${id}`} className="property-card-image-link">
        <div className="property-card-image">
          <img
            src={images[0]}
            alt={`${name} — ${type} in ${location}`}
            loading="lazy"
          />
          <span className="property-card-badge">{type}</span>
        </div>
      </Link>
      <div className="property-card-body">
        <h3 className="property-card-name">
          <Link to={`/properties/${id}`}>{name}</Link>
        </h3>
        <p className="property-card-location">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          {location}, Bengaluru
        </p>
        <p className="property-card-price">{price}</p>
        <div className="property-card-meta">
          <div className="property-card-meta-item">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="M3 14h18"></path><path d="M7 9V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path></svg>
            <span>{bedrooms} Beds</span>
          </div>
          <div className="property-card-meta-item">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path><line x1="10" y1="5" x2="8" y2="7"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="7" y1="19" x2="7" y2="21"></line><line x1="17" y1="19" x2="17" y2="21"></line></svg>
            <span>{bathrooms} Baths</span>
          </div>
          <div className="property-card-meta-item">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
            <span>{area}</span>
          </div>
        </div>
        <div className="property-card-footer">
          <Link to={`/properties/${id}`} className="property-card-link">
            View Property &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
