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
  //  console.log("lock=>", lock);

  const network = await ethers.getDefaultProvider().getNetwork();
  console.log("Network name=", network.name);
  console.log("Network chain id=", network.chainId);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
