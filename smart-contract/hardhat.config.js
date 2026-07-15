require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",

  defaultNetwork: "sepolia",

  networks: {
    hardhat: {},

    sepolia: {
      url: "https://rpc.ankr.com/eth_sepolia/c774fb0b17e3865bf3097f5180f80f4e5cb9ca327776adf3715aef4b010f8f00",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

