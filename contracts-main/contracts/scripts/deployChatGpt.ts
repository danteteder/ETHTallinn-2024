import {ethers} from "hardhat";


async function main() {
  if (!process.env.ORACLE_ADDRESS) {
    throw new Error("ORACLE_ADDRESS env variable is not set.");
  }

  const knowledgeBase:string  = "";
  const oracleAddress: string = process.env.ORACLE_ADDRESS;
  await deployQuickstart(oracleAddress, knowledgeBase);
}


async function deployQuickstart(oracleAddress: string, knowledgeBase: string) {
  const agent = await ethers.deployContract("ChatGpt", [oracleAddress, knowledgeBase], {});

  await agent.waitForDeployment();

  console.log(
    `Quickstart contract deployed to ${agent.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
