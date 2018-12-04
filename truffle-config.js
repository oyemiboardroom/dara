
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "genius medal unhappy elephant chef gossip venue fan runway can leaf whip";

module.exports = {
  networks : {
    ganache : {
      host : 'localhost',
      port : 7545,    // By default Ganache runs on this port.
      network_id : "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/2554cfc722784594b04e25a32e1577e9");
      },
      network_id: '3',
    }
  }
};
