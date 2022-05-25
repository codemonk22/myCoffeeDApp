# myCoffeeDApp
Coffee Supply Chain DApp


# Coffee Supply Chain dApp — Tracking items through the supply chain

This project shows how possible it is to make the supply chain management of any business possible by identifying all the assets and actors and they interact with each other transparently on the blockchain until the product of that business finally reaches it's final consumer.

## Library Versions
````
- Truffle v5.5.4 (core: 5.5.4)
- Solidity - 0.8.9 (solc-js)
- Node v14.17.5
- Web3.js v1.5.3
- @truffle/hdwallet-provider - ^2.0.4
````

## Getting Started

To get started testing this app all you have to do is make sure you have the aformentioned libraries installed, then open up your command line.

1. Navigate to `myCoffeeDApp` directory
2. Then execute the following command to start the server
3. Verify the Installed tools Versions

````
┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $truffle version
Truffle v5.5.4 (core: 5.5.4)
Ganache v^7.0.3
Solidity - 0.8.9 (solc-js)
Node v14.17.5
Web3.js v1.5.3
````

4. Truffle Compile 
````
┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $truffle compile

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.
````
5. Truffle Test
````
┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $truffle test   
Using network 'development'.


Compiling your contracts...
===========================
✔ Fetching solc version list from solc-bin. Attempt #1
> Everything is up to date, there is nothing to compile.

ganache-gui accounts used here...
Contract Owner: accounts[0]  0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
Farmer: accounts[1]  0x018C2daBef4904ECbd7118350A0c54DbeaE3549A
Distributor: accounts[2]  0xCe5144391B4aB80668965F2Cc4f2CC102380Ef0A
Retailer: accounts[3]  0x460c31107DD048e34971E57DA2F99f659Add4f02
Consumer: accounts[4]  0xD37b7B8C62BE2fdDe8dAa9816483AeBDBd356088


Contract: SupplyChain
✓ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (147ms)
✓ Testing smart contract function processItem() that allows a farmer to process coffee (85ms)
✓ Testing smart contract function packItem() that allows a farmer to pack coffee (101ms)
✓ Testing smart contract function sellItem() that allows a farmer to sell coffee (72ms)
✓ Testing smart contract function buyItem() that allows a distributor to buy coffee (96ms)
✓ Testing smart contract function shipItem() that allows a distributor to ship coffee (66ms)
✓ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (109ms)
✓ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (100ms)
✓ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain
✓ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain
✓ Testing smart contract function harvestItem() will not allow the same UPC to be re-harvested (68ms)


11 passing (974ms)

````

6. Truffle Migrate rinkbey network 

````
┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $truffle migrate reset --network rinkeby reset
This version of µWS is not compatible with your Node.js build:

Error: Cannot find module './uws_linux_arm64_83.node'
Falling back to a NodeJS implementation; performance may be degraded.



Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        10735389
   > block timestamp:     1653447589
   > account:             0xBb108964af881f000EE929bde6881D29a244Ee9B
   > balance:             1.910155028585465734
   > gas used:            274520 (0x43058)
   > gas price:           2.500000011 gwei
   > value sent:          0 ETH
   > total cost:          0.00068630000301972 ETH

   -------------------------------------
   > Total cost:     0.00068630000301972 ETH


2_deploy_contracts.js
=====================

   Deploying 'SupplyChain'
   -----------------------
   > block number:        10735391
   > block timestamp:     1653447593
   > account:             0xBb108964af881f000EE929bde6881D29a244Ee9B
   > balance:             1.90319269356035539
   > gas used:            2738996 (0x29cb34)
   > gas price:           2.500000009 gwei
   > value sent:          0 ETH
   > total cost:          0.006847490024650964 ETH

   -------------------------------------
   > Total cost:     0.006847490024650964 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.007533790027670684 ETH




Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29970705 (0x1c95111)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x158b0b53569369efd0a796dd59849dcf11ee5898930cc26668a9bf5962ced37b
   > Blocks: 2            Seconds: 16
   > contract address:    0xDc4C3c72077AACcCDC2066849255e4E76C5639c1
   > block number:        10735395
   > block timestamp:     1653447614
   > account:             0xBb108964af881f000EE929bde6881D29a244Ee9B
   > balance:             1.910155028585191214
   > gas used:            274520 (0x43058)
   > gas price:           2.500000012 gwei
   > value sent:          0 ETH
   > total cost:          0.00068630000329424 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00068630000329424 ETH


2_deploy_contracts.js
=====================

   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xa9a52f0142b4392346ff25c5d9816f10850b84d802af86738ead0094fe0cca11
   > Blocks: 3            Seconds: 34
   > contract address:    0x5079294455157EEb0a6A71338bdc8a2aD840a5f2
   > block number:        10735398
   > block timestamp:     1653447659
   > account:             0xBb108964af881f000EE929bde6881D29a244Ee9B
   > balance:             1.903192693546248076
   > gas used:            2738996 (0x29cb34)
   > gas price:           2.500000014 gwei
   > value sent:          0 ETH
   > total cost:          0.006847490038345944 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.006847490038345944 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.007533790041640184 ETH

┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $date
Tue 24 May 2022 10:03:45 PM CDT
┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $
````
7. Dev Run Local Browser 
```
┌─[blockchain03@bciotdev3]─[~/workspace/myCoffeeDApp]
└──╼ $npm run dev

> fair-trade-coffee-dapp@1.0.0 dev /home/blockchain02/workspace/myCoffeDAap
> lite-server

** browser-sync config **
{
  injectChanges: false,
  files: [ './**/*.{html,htm,css,js}' ],
  watchOptions: { ignored: 'node_modules' },
  server: {
    baseDir: [ './', './src', './build/contracts' ],
    middleware: [ [Function (anonymous)], [Function (anonymous)] ]
  }
}
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.2.135:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
[Browsersync] Serving files from: ./
[Browsersync] Serving files from: ./src
[Browsersync] Serving files from: ./build/contracts
[Browsersync] Watching files...
[Browsersync] Couldn't open browser (if you are using BrowserSync in a headless environment, you might want to set the open option to false)

```
## Wallet Transcation Details
![Wallet Transcation Details](/images/wallet-det01.png)

## Browser Screen Display
![Wallet Transcation Details](/images/Screen01.png)
![Wallet Transcation Details](/images/Screen02.png)
![Wallet Transcation Details](/images/Screen03.png)


## Contract details

Rinkeby Network Contract Deployment [Rinkeby Network](https://rinkeby.etherscan.io/address/0xBb108964af881f000EE929bde6881D29a244Ee9B/)

### Coffee Bean Crop Full Sequence. From Farmers to End Consumer Sequesnce Transcation Details

> - Harvest Transcation [HARVEST](https://rinkeby.etherscan.io/tx/0xb783a16441e3f7445e7c0a1fda3c70a36c4f9ba9481080171fd579def01cdbb5/). <br>
> - Purchase Transcation [PURCHASE ITEM](https://rinkeby.etherscan.io/tx/0x6dbc4507510bb8c1d5fd4ad981cf7e04f746c70d2c49d039c9231ccc082ba96f/). <br>
> Purchase Item Packing Transcation [PACK ITEM](https://rinkeby.etherscan.io/tx/0x56446ca05bbd97788770dc886eed80f9d2e669b284be7b62d0ce9dd37862b215/). <br>
> Sell Transcation [SELL ITEM](https://rinkeby.etherscan.io/tx/0x25af07f2ed00af263fbed9b6a1adf886e94901c5049b4a9717839770190c4383/). <br>
> Buy Transcation [BUY ITEM](https://rinkeby.etherscan.io/tx/0x06a3d01c7eaf2e2a3287f9fbd4fec03947add99d2a5fe9a2a70602ee6943c55c/). <br>
> Shipment Transcation [SHIP ITEM](https://rinkeby.etherscan.io/tx/0x36db50fc853fbf34a40383732b520032ca831d5b0c3fd067d605cb7e4bd0de89/). <br>
> Add Retailer Transcation [ADD RETAILER](https://rinkeby.etherscan.io/tx/0x50a2c4a07f5386f484873b11b3430edf6baf64dda3c083c5e70b5a7a0c36a5e4/). <br>
> Add Consumer [ADD CONSUMER](https://rinkeby.etherscan.io/tx/0xdde4990870e2e1a15b332c0e4894a062437f0b171f3297842b2294b3f713879d/). <br>


## UML Diagrams
![Activity diagram](./diagrams/activity-coffee-chain.png)

![Sequence diagram](./diagrams/sequence-coffee-chain.png)
![State diagram](./diagrams/state-coffee-chain.png)
![Data-model diagram](./diagrams/data-model-coffee-chain.png)
