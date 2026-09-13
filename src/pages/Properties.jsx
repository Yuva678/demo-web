import { useState, useEffect, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/properties';
import '../styles/Properties.css';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Apartment', value: 'Apartment' },
  { label: 'Villa', value: 'Villa' },
  { label: '3 BHK', value: '3' },
  { label: '4 BHK', value: '4' },
];

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.title = 'Properties — PrimeNest Realty';
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return properties;
    if (activeFilter === 'Apartment' || activeFilter === 'Villa') {
      return properties.filter((p) => p.type === activeFilter);
    }
    // BHK filter
    return properties.filter((p) => p.bhk === Number(activeFilter));
  }, [activeFilter]);

  return (
    <div className="properties-page">
      <div className="container">
        <div className="properties-intro">
          <p className="properties-eyebrow">OUR PROPERTIES</p>
          <h1>Premium Homes in Bengaluru</h1>
          <p className="properties-description">
            Explore our curated selection of apartments and villas in the city's
            most desirable neighbourhoods.
          </p>
        </div>

        <div className="properties-filters" role="group" aria-label="Filter properties">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
              aria-pressed={activeFilter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="properties-grid">
          {filtered.length > 0 ? (
            filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <p className="properties-empty">
              No properties match the selected filter.
            </p>
          )}
        </div>

        {filtered.length > 0 && (
          <div className="properties-pagination">
            <span className="pagination-text">Showing {filtered.length} of {properties.length} properties</span>
            <div className="pagination-controls">
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">&rarr;</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
