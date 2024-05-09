import React, { useState, useEffect } from 'react';
import NFTCard from './NFTCard';
import api from '../utils/api';

const NFTList = () => {
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      try {
        const nfts = await api.getNFTs();
        setNFTs(nfts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNFTs();
  }, []);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))
      )}
    </div>
  );
};

export default NFTList;
