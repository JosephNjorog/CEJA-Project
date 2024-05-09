const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ether = tokens

describe('RealEstate', () => {
  let realEstate
  let deployer, seller, buyer, inspector, lender
  let nftId = 1
  let purchasePrice = ether(100)
 

  beforeEach(async () => {
    // Setup accounts
    accounts = await ethers.getSigners()
    deployer = accounts[0]
    seller = deployer
    buyer = accounts[1]
    

    // Load contracts
    const RealEstate = await ethers.getContractFactory('RealEstate')
  
    // Deploy contracts
    realEstate = await RealEstate.deploy()

   

    // Seller Approves NFT
    transaction = await realEstate.connect(seller).approve(nftId)
    await transaction.wait()
  })

  describe('Deployment', () => {

    it('deplyer/seller has an NFT', async () => {
      expect(await realEstate.ownerOf(nftId)).to.equal(seller.address)
    })

  })

  describe('Selling real estate', () => {
    let balance, transaction

    it('executes a successful transaction', async () => {
      // Expects seller to be NFT owner before the sale
      expect(await realEstate.ownerOf(nftId)).to.equal(seller.address)

      // Check escrow balance
      balance = await escrow.getBalance()
      console.log("escrow balance:", ethers.utils.formatEther(balance))

      // Buyer Deposits Earnest
      console.log("Buyer deposits earnest money")
      transaction = await escrow.connect(buyer).depositEarnest({ value: purchasePrice })
      await transaction.wait()

      // Buyer Approves sale
      transaction = await escrow.connect(buyer).approveSale()
      await transaction.wait()
      console.log("Buyer approves sale")

      // Seller Approves sale
      transaction = await escrow.connect(seller).approveSale()
      await transaction.wait()
      console.log("Seller approves sale")

      // Finalize sale
      transaction = await escrow.connect(buyer).finalizeSale()
      await transaction.wait()
      console.log("Buyer finalizes sale")

      // Expect Buyer to be owner of NFT address
      expect(await realEstate.ownerOf(nftId)).to.equal(buyer.address)

      // Expect Seller to receive Funds
      balance = await ethers.provider.getBalance(seller.address)
      console.log("Seller balance:", ethers.utils.formatEther(balance))
      expect(balance).to.be.above(ether(10099))
    })

  })

})