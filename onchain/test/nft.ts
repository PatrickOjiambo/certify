const { expect } = require("chai");

import { ethers } from "hardhat";
describe("NFT smart contract", function(){
  it("Trying to deploy the smart contract first", async function(){
    const [owner] = await ethers.getSigners();
    const hardhatNFT = await ethers.deployContract("Pacific");
    const minted_nft = await hardhatNFT.mintCert(owner.address, "https://game.example/item-id-8u5h2m.json");
    
    console.log("Token ID:", minted_nft);
  })
})
