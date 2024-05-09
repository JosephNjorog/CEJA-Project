import Web3 from 'web3';

const getContract = (address, abi) => {
  const contract = new Web3.eth.Contract(abi, address);
  return contract;
};

export { getContract };
