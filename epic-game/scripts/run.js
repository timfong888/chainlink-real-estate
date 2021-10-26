const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Rock", "Paper", "Scissors"],       // Names
    ["https://i.imgur.com/4Urjq3G.png", // Images
    "https://i.imgur.com/xB3pgGM.png", 
    "https://i.imgur.com/HsiVpkz.png"],
    [300, 100, 200],                    // HP values
    [100, 50, 25]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();