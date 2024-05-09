require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    alfajores: {
        url: "https://alfajores-forno.celo-testnet.org",
        accounts: ["7d33eb837d6625ad32111ffe5036174f1410366ae53428df525cdfea8776c001"],
    },
    celo: {
        url: "https://forno.celo.org",
        accounts: ["7d33eb837d6625ad32111ffe5036174f1410366ae53428df525cdfea8776c001"],
    },
},
};
