const { expect } = require("chai"); // Use Chai for assertions
const { ethers } = require("hardhat"); // Assume Hardhat is used for testing

describe("RealEstate contract", function () {
  let realEstate;
  let owner;
  let anotherAccount;

  beforeEach(async function () {
    // Get signers from Hardhat
    const signers = await ethers.getSigners();
    owner = signers[0];
    anotherAccount = signers[1];

    // Deploy the contract
    const RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = await RealEstate.deploy(owner.address);
    await realEstate.deployed();
  });

  describe("Deployment", function () {
    it("Should have the correct name and symbol", async function () {
      const name = await realEstate.name();
      const symbol = await realEstate.symbol();
      expect(name).to.equal("Real Estate");
      expect(symbol).to.equal("Real");
    });

    it("Should set the owner correctly", async function () {
      const contractOwner = await realEstate.owner();
      expect(contractOwner).to.equal(owner.address);
    });
  });

  describe("Minting", function () {
    const tokenId = 1;
    const tokenURI = "ipfs://examplehash";

    it("Should mint a new NFT", async function () {
      const tx = await realEstate.safeMint(owner.address, tokenId, tokenURI);
      await tx.wait();

      const totalSupply = await realEstate.totalSupply();
      expect(totalSupply).to.equal(1);

      const ownerOfToken = await realEstate.ownerOf(tokenId);
      expect(ownerOfToken).to.equal(owner.address);

      const nftURI = await realEstate.tokenURI(tokenId);
      expect(nftURI).to.equal(tokenURI);
    });

    it("Should revert if minting to zero address", async function () {
      const zeroAddress = "0x0000000000000000000000000000000000000000";
      await expect(
        realEstate.safeMint(zeroAddress, tokenId, tokenURI)
      ).to.be.revertedWith("ERC721: mint to the zero address");
    });
  });

  // You can add more tests here for other functionalities of the contract

});
