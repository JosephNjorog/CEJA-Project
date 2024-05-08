const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("RealEstateModule", (m) => {
  

  const lock = m.contract("RealEstate")

  return { lock };
});
