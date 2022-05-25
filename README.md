# myCoffeeDApp
Coffee Supply Chain DApp


# Coffee Supply Chain dApp — Tracking items through the supply chain

This project shows how possible it is to make the supply chain management of any business possible by identifying all the assets and actors and they interact with each other transparently on the blockchain until the product of that business finally reaches it's final consumer.

## Library Versions

- Truffle v5.5.4 (core: 5.5.4)
- Solidity - 0.8.9 (solc-js)
- Node v14.17.5
- Web3.js v1.5.3
- @truffle/hdwallet-provider - ^2.0.4

## Getting Started

To get started testing this app all you have to do is make sure you have the aformentioned libraries installed, then open up your command line.

1. Navigate to `myCoffeeDApp` directory
2. Then execute the following command to start the server
3. Verify the Installed tools Versions


┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $truffle version
Truffle v5.5.4 (core: 5.5.4)
Ganache v^7.0.3
Solidity - 0.8.9 (solc-js)
Node v14.17.5
Web3.js v1.5.3

4. Truffle Compile 

┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $truffle compile

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

5. Truffle Migrate rinkbey network 

```
    npm run dev
```

## UML Diagrams
![Activity diagram](./diagrams/activity-coffee-chain.png)
![Sequence diagram](./diagrams/sequence-coffee-chain.png)
![State diagram](./diagrams/state-coffee-chain.png)
![Data-model diagram](./diagrams/data-model-coffee-chain.png)

## Contract details

https://rinkeby.etherscan.io/address/0xBb108964af881f000EE929bde6881D29a244Ee9B - Main Contract details 

https://rinkeby.etherscan.io/tx/0xb783a16441e3f7445e7c0a1fda3c70a36c4f9ba9481080171fd579def01cdbb5 - HARVEST 
https://rinkeby.etherscan.io/tx/0x6dbc4507510bb8c1d5fd4ad981cf7e04f746c70d2c49d039c9231ccc082ba96f - PURCHASE ITEM
https://rinkeby.etherscan.io/tx/0x56446ca05bbd97788770dc886eed80f9d2e669b284be7b62d0ce9dd37862b215 - PACK ITEM
https://rinkeby.etherscan.io/tx/0x25af07f2ed00af263fbed9b6a1adf886e94901c5049b4a9717839770190c4383 - SELL ITEM
https://rinkeby.etherscan.io/tx/0x06a3d01c7eaf2e2a3287f9fbd4fec03947add99d2a5fe9a2a70602ee6943c55c - BUY ITEM
https://rinkeby.etherscan.io/tx/0x36db50fc853fbf34a40383732b520032ca831d5b0c3fd067d605cb7e4bd0de89 - SHIP ITEM
https://rinkeby.etherscan.io/tx/0x50a2c4a07f5386f484873b11b3430edf6baf64dda3c083c5e70b5a7a0c36a5e4 - ADD RETAILER
https://rinkeby.etherscan.io/tx/0xdde4990870e2e1a15b332c0e4894a062437f0b171f3297842b2294b3f713879d - ADD CONSUMER
