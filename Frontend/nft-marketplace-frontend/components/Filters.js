import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const locationOptions = [
  { value: 'miami', label: 'Miami, FL' },
  { value: 'new-york', label: 'New York, NY' },
  // ... more locations
];

function Filters({ onFilterChange }) {
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleLocationChange = (event) => {
    const newSelectedLocations = event.target.checked
      ? [...selectedLocations, event.target.value]
      : selectedLocations.filter((loc) => loc !== event.target.value);
    setSelectedLocations(newSelectedLocations);
    onFilterChange({ locations: newSelectedLocations }); // Pass selected filters
  };

  return (
    <FormGroup>
      <h3>Location</h3>
      {locationOptions.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<Checkbox checked={selectedLocations.includes(option.value)} onChange={handleLocationChange} value={option.value} />}
          label={option.label}
        />
      ))}
    </FormGroup>
  );
}

export default Filters;
