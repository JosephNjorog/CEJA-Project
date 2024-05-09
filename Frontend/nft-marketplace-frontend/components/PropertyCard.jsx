import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@emotion/styled';

const PriceTag = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 10px;
`;

function PropertyCard({ property }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={property.imageUrl}
        alt={property.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {property.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location}
        </Typography>
        <PriceTag>Starting Price: {property.price} ETH</PriceTag>
        {/* Add a button for viewing details (optional) */}
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
