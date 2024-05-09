import React from 'react';
import PropertyCard from './components/PropertyCard'; // Placeholder

function PropertyList() {
  // Fetch property data from backend (replace with actual data fetching)
  const properties = [
    {
      id: 1,
      imageUrl: 'https://example.com/property1.jpg',
      name: 'Beachfront Villa in Miami',
      location: 'Miami, Florida',
      price: 10,
    },
    // ... more properties
  ];

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
