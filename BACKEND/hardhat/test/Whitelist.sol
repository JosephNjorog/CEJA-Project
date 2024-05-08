const { expect } = require("chai"); // Use Chai for assertions
const { ethers } = require("hardhat"); // Assume Hardhat is used for testing

describe("LimitedRealEstateNFT contract", function () ){
  let realEstateNFT;
  let owner;
  let authorizedMinter1;
  let unauthorizedAddress;

  beforeEach(async function () {
    // Get signers from Hardhat
    const signers = await ethers.getSigners();
    owner = signers[0];
    authorizedMinter1 = signers[1];
    unauthorizedAddress = signers[2];

    // Deploy the contract
    const LimitedRealEstateNFT = await ethers.getContractFactory(
      "LimitedRealEstateNFT"
    );
    realEstateNFT = await LimitedRealEstateNFT.deploy(owner.address);
    await realEstateNFT.deployed();
  });

  describe("Deployment", function () {
    it("Should have the correct name and symbol", async function () {
      const name = await realEstateNFT.name();
      const symbol = await realEstateNFT.symbol();
      expect(name).to.equal("LimitedRealEstateNFT");
      expect(symbol).to.equal("LRE");
    });

    it("Should set the owner correctly", async function () {
      const contractOwner = await realEstateNFT.owner();
      expect(contractOwner).to.equal(owner.address);
    });

    it("Should have the correct MAX_MINTS value", async function () {
      const maxMints = await realEstateNFT.MAX_MINTS();
      expect(maxMints).to.equal(5);
    });

    it("Should have authorized addresses populated in the contract", async function () {
      // Assuming authorized addresses are at index 0 and 1
      const address1 = await realEstateNFT.authorizedMintAddresses(0);
      const address2 = await realEstateNFT.authorizedMintAddresses(1);
      expect(address1).to.not.equal("0x0000000000000000000000000000000000000000"); // Not zero address
      expect(address2).to.not.equal("0x0000000000000000000000000000000000000000"); // Not zero address
    });
  });

  describe("Minting", function () {
    it("Should allow minting for authorized address", async function () {
      const tx = await realEstateNFT.connect(authorizedMinter1).safeMint(authorizedMinter1.address);
      await tx.wait();

      const totalSupply = await realEstateNFT.totalSupply();
      expect(totalSupply).to.equal(1);
    });

    it("Should revert if minting to a non-authorized address", async function () {
      await expect(realEstateNFT.connect(unauthorizedAddress).safeMint(unauthorizedAddress.address))
        .to.be.revertedWith("Address not authorized to mint");
    });

    it("Should revert if minting limit is reached", async function () {
      // Mint 5 times to reach the limit
      for (let i = 0; i < 5; i++) {
        await realEstateNFT.connect(authorizedMinter1).safeMint(authorizedMinter1.address);
      }

      await expect(realEstateNFT.connect(authorizedMinter1).safeMint(authorizedMinter1.address))
        .to.be.revertedWith("Minting limit reached");
    });

    it("Should revert if attempting to mint by a non-owner (except for safeMint)", async function () {
      await expect(realEstateNFT.connect(unauthorizedAddress).mint(unauthorizedAddress.address))
        .to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("hasMinted function", function () {
    it("Should return true if the address has already minted", async function () {
      await realEstateNFT.connect(authorizedMinter1).safeMint(authorizedMinter1.address);
      const hasMinted = await realEstateNFT.hasMinted(authorizedMinter1.address);
      expect(hasMinted).to.equal(true);
    });

  it("Should return false if the address hasn't minted", async function () {
  const hasMinted = await realEstateNFT.hasMinted(unauthorizedAddress.address);
  expect(hasMinted).to.equal(false);
});
