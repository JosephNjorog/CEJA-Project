# CEJA-Homes
Real Estate NFT DApp that allows users to sell/Buy/Rent properties easily, secure and fast
The Assets we convert them to digital assets as Nfts
Blockchain replaces outdated paper deeds with true digital assets and tracks changes on an immutable ledger that acts as a secure shared source of truth for documents between multiple parties and organizations. 

Ethereum enables transaction and property ownership records to be more accessible— facilitating market transactions, increasing investor confidence, unlocking access to finance, and promoting economic and social community development.

## Technology Stack & Tools

- Solidity (Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)


## Requirements For Initial Setup
- In
- stall [NodeJS](https://nodejs.org/en/)
- For the project to work perfectly with truffle install `node >= 17.0`
- If using `nvm` just use the latest version of node `nvm use 20`

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 7. Start frontend
`$ npm run start`

## Setting Up Using Docker

### 1. Build the Docker image:

`$ docker build -t tokenized-homes .`


### 2. Run the Docker container:
 `$ docker run -p 3000:3000 tokenized-homes`

 This will start your application inside a Docker container and expose it on port 3000 of your host machine. You can access your application by navigating to `http://localhost:3000` in your web browser.

### 3. Contribution
If you are willing to contribute to this project once we make it public, fork the repo make the changes.
Make a pull request and submit a detailed explanation for your changes.
Currently this project weve made it private for demo purposes