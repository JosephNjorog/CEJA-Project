import Web3 from 'web3';
import { ethers } from 'ethers';
import { getContract } from './web3';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants';

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));
const contract = getContract(CONTRACT_ADDRESS, CONTRACT_ABI);

const api = {
  getNFTs: async () => {
    const nfts = await contract.methods.getNFTs().call();
    return nfts.map((nft) => ({
      id: nft.id,
      name: nft.name,
      description: nft.description,
      image: nft.image,
      price: ethers.utils.formatEther(nft.price),
    }));
  },
  getNFT: async (id) => {
    const nft = await contract.methods.getNFT(id).call();
    return {
      id: nft.id,
      name: nft.name,
      description: nft.description,
      image: nft.image,
      price: ethers.utils.formatEther(nft.price),
    };
  },
};

export default api;
