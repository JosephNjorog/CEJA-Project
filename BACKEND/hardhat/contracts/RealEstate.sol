// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract RealEstate is ERC721, ERC721URIStorage, Ownable {
    constructor(address initialOwner)
        ERC721("Real Estate", "Real")
        Ownable(initialOwner)
    {}

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
