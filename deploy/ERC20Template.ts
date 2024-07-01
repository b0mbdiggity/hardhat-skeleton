import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "ethers";

const addressPLA = "";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // ignore type error
  const { configByNetwork } = hre;
  const { chainId, ownerPk } = configByNetwork;
  const { deploy } = hre.deployments;

  console.log(
    `[deployment] ERC20Template >> network=${hre.network.name} / chainId=${chainId}`
  );

  const tokenName = "";
  const tokenSymbol = "";
  const preMintWalletAddress = "";
  const supply = 100_000_000;

  const deployment = await deploy("ERC20Template", {
    from: ownerPk,
    args: [
      tokenName,
      tokenSymbol,
      preMintWalletAddress,
      ethers.utils.parseEther(supply.toString()),
    ],
    log: true,
    gasPrice: ethers.utils.parseUnits("40", "gwei"),
  });
};

export default deploy;

deploy.tags = ["erc20"];
