
require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {

  networks: {

    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC_PHRASE,
        `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`),
      from: '0xBb108964af881f000EE929bde6881D29a244Ee9B',
      network_id: 4,
      shareNonce: true,
      derivationPath: "m/44'/1'/0'/0/",
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200
      ,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.9",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
