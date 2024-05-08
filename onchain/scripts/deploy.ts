import { web3 } from "hardhat";
import artifacts from "../artifacts/contracts/pacify.sol/Pacific.json";
import { ethers } from "ethers";

async function main() {
  const [deployer] = await web3.eth.getAccounts();
  const pacifyContract = new web3.eth.Contract(artifacts.abi);
  const rawContract = pacifyContract.deploy({
    data: artifacts.bytecode,
    arguments: [],
  });

  const lock = await rawContract.send({
    from: deployer,
    gasPrice: "10000000000",
  }); 

  lock.deploy

  lock.deploy({
    input: deployer
  }).send({
    from: deployer,
    gas: "1500000",
    gasPrice: '30000000000000'
  })
  .on('error', function(error){ console.log("Error => ", error) })
  .on('transactionHash', function(transactionHash){ console.log("Transaction Hash => ", transactionHash) })
  .on('receipt', function(receipt){
   console.log(receipt.contractAddress) // contains the new contract address
  })
  .then(function(newContractInstance){
    console.log("New Contract I guess", newContractInstance.options.address) // instance with the new contract address
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
