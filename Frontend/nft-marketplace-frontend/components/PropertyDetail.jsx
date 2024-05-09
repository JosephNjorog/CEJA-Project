import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; // Corrected closing tag
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { fetchPropertyDetails } from '../api/propertyApi'; // API call for details

function PropertyDetail() {
  const { propertyId } = useParams(); // Get property ID from URL
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const getPropertyData = async () => {
      const fetchedProperty = await fetchPropertyDetails(propertyId);
      setProperty(fetchedProperty);
    };
    getPropertyData();
  }, [propertyId]); // Fetch data on property ID change

  if (!property) return <div>Loading...</div>;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="240"
        image={property.imageUrl}
        alt={property.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {property.name} (Replace with actual property data fetching)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location} (Replace with actual property data fetching)
        </Typography>
        {/* Add additional property details here (e.g., price, description, owner information) */}
        {/* Integrate with backend to fetch NFT ownership details (requires smart contract development) */}
      </CardContent>
    </Card>
  );
}

export default PropertyDetail;
