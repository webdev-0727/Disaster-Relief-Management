// https://eth-ropsten.alchemyapi.io/v2/SIC1Of83CN-zQ4RuHfg3w1H9XuaY0Wap

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SIC1Of83CN-zQ4RuHfg3w1H9XuaY0Wap',
      accounts: ['f11cfcacc3de89e10770ea758e124ebcb7e732786269280af4f7bde42edf149c'],
    },
  },
};