import { HardhatRuntimeEnvironment } from "hardhat/types";
import { abi } from "../artifacts/contracts/ERC20Template.sol/ERC20Template.json";
import { ERC20Template } from "../typechain";

export const transaction = async (hre: HardhatRuntimeEnvironment) => {
  const { ethers, configByNetwork } = hre;
  const { chainId, ownerPk, rpcUrl } = configByNetwork;

  console.log(
    `[task] transaction >> network=${hre.network.name} / chainId=${chainId}`
  );

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(ownerPk, provider);
  const instance = new ethers.Contract("", abi, wallet) as ERC20Template;

  const tx = await instance.transferOwnership("");
  const result = await tx.wait();
  console.log(result);
};
