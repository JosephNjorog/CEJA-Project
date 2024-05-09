pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/SafeERC721.sol";

contract RealEstateNFT {
    // Mapping of property NFTs
    mapping(uint256 => address) public propertyOwners;
    mapping(address => uint256) public balance;

    // Mapping of fractional NFTs
    mapping(uint256 => mapping(address => uint256)) public fractionalOwners;
    mapping(address => uint256) public fractionalBalance;

    // Total supply of property NFTs
    uint256 public propertySupply;

    // Total supply of fractional NFTs
    uint256 public fractionalSupply;

    // Token contract
    ERC20 public tokenContract;

    // Limited minting addresses
    address[] public minters;

    // Token balance required for minting
    uint256 public mintingTokenBalance;

    // Event emitted when a property NFT is minted
    event PropertyMinted(uint256 tokenId, address owner);

    // Event emitted when a fractional NFT is minted
    event FractionalMinted(uint256 tokenId, address owner, uint256 amount);

    // Event emitted when a property NFT is transferred
    event PropertyTransferred(uint256 tokenId, address from, address to);

    // Event emitted when a fractional NFT is transferred
    event FractionalTransferred(uint256 tokenId, address from, address to, uint256 amount);

    constructor(ERC20 _tokenContract, uint256 _mintingTokenBalance) {
        tokenContract = _tokenContract;
        mintingTokenBalance = _mintingTokenBalance;
        minters = [
            // Add limited minting addresses here
            0xAddress1,
            0xAddress2,
            //...
        ];
    }

    // Mint a property NFT
    function mintProperty(address _to) public {
        require(isMinter(msg.sender), "Only limited addresses can mint");
        require(tokenContract.balanceOf(msg.sender) >= mintingTokenBalance, "Insufficient token balance");
        uint256 newTokenId = propertySupply++;
        propertyOwners[newTokenId] = _to;
        balance[_to]++;
        emit PropertyMinted(newTokenId, _to);
    }

    // Mint a fractional NFT
    function mintFractional(address _to, uint256 _amount) public {
        require(isMinter(msg.sender), "Only limited addresses can mint");
        require(tokenContract.balanceOf(msg.sender) >= mintingTokenBalance, "Insufficient token balance");
        uint256 newTokenId = fractionalSupply++;
        fractionalOwners[newTokenId][_to] = _amount;
        fractionalBalance[_to] += _amount;
        emit FractionalMinted(newTokenId, _to, _amount);
    }

    // Transfer a property NFT
    function transferProperty(uint256 _tokenId, address _to) public {
        require(propertyOwners[_tokenId] == msg.sender, "Only the owner can transfer");
        propertyOwners[_tokenId] = _to;
        balance[msg.sender]--;
        balance[_to]++;
        emit PropertyTransferred(_tokenId, msg.sender, _to);
    }

    // Transfer a fractional NFT
    function transferFractional(uint256 _tokenId, address _to, uint256 _amount) public {
        require(fractionalOwners[_tokenId][msg.sender] >= _amount, "Insufficient fractional balance");
        fractionalOwners[_tokenId][msg.sender] -= _amount;
        fractionalOwners[_tokenId][_to] += _amount;
        fractionalBalance[msg.sender] -= _amount;
        fractionalBalance[_to] += _amount;
        emit FractionalTransferred(_tokenId, msg.sender, _to, _amount);
    }

    // Check if an address is a limited minting address
    function isMinter(address _address) internal view returns (bool) {
        for (uint256 i = 0; i < minters.length; i++) {
            if (minters[i] == _address) {
                return true;
            }
        }
        return false;
    }
}