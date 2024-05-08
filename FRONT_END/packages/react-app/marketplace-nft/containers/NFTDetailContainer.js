import React from 'react';
import NFTDetail from '../components/NFTDetail';

const NFTDetailContainer = ({ match }) => {
  const nftId = match.params.id;
  const [nft, setNFT] = useState({});

  useEffect(() => {
    const fetchNFT =
