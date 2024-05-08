pragma solidity ^0.8.0;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract LimitedRealEstateNFT is ERC721, Ownable {
  // Maximum number of mints allowed (5 in this case)
  uint256 public constant MAX_MINTS = 5;

  // Mapping to track addresses that have already minted
  mapping(address => bool) public minted;

  // List of authorized addresses for minting (replace with actual addresses)
  address[MAX_MINTS] public authorizedMintAddresses = [
    // Address 1
    0x1234567890123456789012345678901234567890,
    // Address 2 (repeat for remaining addresses)
    // ...
  ];

  constructor(address initialOwner) ERC721("Limited RealEstateNFT", "LRE") Ownable(initialOwner) {}

  // Function to mint the NFT (restricted to owner)
  function safeMint(address to) public onlyOwner {
    require(!minted[to], "Address already minted");
    require(_tokenIdCounter.current() < MAX_MINTS, "Minting limit reached");

    uint256 tokenId = _tokenIdCounter.current();
    _safeMint(to, tokenId);
    _setTokenURI(tokenId, "ipfs://your-token-metadata-hash"); // Replace with your NFT metadata URI

    minted[to] = true;
  }

  // Function to check if an address has already minted
  function hasMinted(address addr) public view returns (bool) {
    return minted[addr];
  }

  // The following functions are overrides required by Solidity (not modified)

  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
      internal
      override(ERC721)
  {
      super._beforeTokenTransfer(from, to, tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
      public
      view
      override(ERC721)
      returns (bool)
  {
      return super.supportsInterface(interfaceId);
  }
}
