const { expect } = require("chai");

import { ethers } from "hardhat";
describe("NFT smart contract", function(){
  let certNFTCollection: any
  beforeEach(async ()=>{
    
    const hardhatNFT = await ethers.getContractFactory("Pacific");
    certNFTCollection = await hardhatNFT.deploy();
  })
  it("should mint NFT with tokenID 0", async function(){
    const [owner] = await ethers.getSigners();
    await certNFTCollection.mintCert(owner.address, "https://game.example/item-id-8u5h2m.json");
    await certNFTCollection.mintCert(owner.address, "https://game.example/item-id-8u5h2m.json");
    const totalSupply = await certNFTCollection.totalSupply();
    expect(totalSupply).to.equal(2);
  })
  it("should return the tokenURI of the NFT", async function(){
    const [owner] = await ethers.getSigners();
    await certNFTCollection.mintCert(owner.address, "https://game.example/item-id-8u5h2m.json");
    const tokenURI = await certNFTCollection.tokenURI(0);
    expect(tokenURI).to.equal("https://game.example/item-id-8u5h2m.json");
  }
  )
  it("should return the owner of the NFT", async function(){
    const [owner] = await ethers.getSigners();
    await certNFTCollection.mintCert(owner.address, "https://game.example/item-id-8u5h2m.json");
    const ownerOfNFT = await certNFTCollection.ownerOf(0);
    expect(ownerOfNFT).to.equal(owner.address);
  })

})



// describe("NFT smart contract", function(){
//   it("Trying to deploy the smart contract first", async function(){
//     const [owner] = await ethers.getSigners();
//     const hardhatNFT = await ethers.getContractFactory("Pacific");
//     let HardhatNFT = await hardhatNFT.deploy();
//     await HardhatNFT.deployed();

//     const minted_nft = await hardhatNFT.mintCert(owner.address, "https://game.example/item-id-8u5h2m.json");
//     // const searchedNft = await hardhatNFT.searchCert(minted_nft);
//     const second_minted_nft = await hardhatNFT.mintCert(owner.address, "https://game.example/item-id-8u5h2m.json");
//     console.log("Token ID:", minted_nft);
//     // console.log("Token ID:", searchedNft);
//     console.log("Token ID:", second_minted_nft); 
//   })
// })
