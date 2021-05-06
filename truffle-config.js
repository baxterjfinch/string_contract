require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = process.env.MNEMONIC
const pkeys = [
  process.env.PKEY1,
  process.env.PKEY2,
  process.env.PKEY3,
  process.env.PKEY4
]
module.exports = {

  plugins: ["truffle-security", "solidity-coverage"],

  networks: {
    // Quick dev using local ganache @port 7545
     development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 6700000,
     },
    // Kubernetes connection (have to port-forward svc)
     k8s: {
      provider: () => new HDWalletProvider(process.env.K8SMNEMONIC, `http://127.0.0.1:8545`, 0, 10),
      network_id: "*",
      gas: 6700000,
     },

     // ethereum local stuff (might get depricated)
     container: {
      provider: () => new HDWalletProvider(pkeys, `http://host.docker.internal:8545`, 0, 4),
      network_id: "*",
      gas: 6700000,
     },

     rinkeby: {
       provider: function() {
        return new HDWalletProvider(process.env.RINK_MNEMONIC, "https://rinkeby.infura.io/v3/b8238578cbe444438b2f80c928c18df1", 0, 4);
       },
       network_id: 4,
       from: "0xABc0841CeDe9f452c2D4a390aba9a4dbCf50d1A3",
       gas: 6700000,
       gasPrice: 10000000000,
       skipDryRun: true
     }
  },

  mocha: {
    useColors: true,
    reporter: 'eth-gas-reporter',
  },
// Configuring compiler
  compilers: {
    solc: {
       version: "0.6.2",
       docker: false,
       settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
       }
    }
  }
}
