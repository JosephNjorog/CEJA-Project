import React from 'react';
import { Link } from 'react-router-dom';

const NFTCard = ({ nft }) => {
  return (
    <div>
      <img src={nft.image} alt={nft.name} />
      <h2>{nft.name}</h2>
      <p>{nft.description}</p>
      <p>Price: {nft.price} ETH</p>
      <Link to={`/nft/${nft.id}`}>View Details</Link>
    </div>
  );
};

export default NFTCard;
