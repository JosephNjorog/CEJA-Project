import React, { useState, useEffect } from 'react';
import NFTDetail from '../components/NFTDetail';
import api from '../utils/api';

const NFTDetailContainer = ({ match }) => {
  const nftId = match.params.id;
  const [nft, setNFT] = useState({});

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const nft = await api.getNFT(nftId);
        setNFT(nft);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNFT();
  }, [nftId]);

  return <NFTDetail nft={nft} />;
};

export default NFTDetailContainer;
