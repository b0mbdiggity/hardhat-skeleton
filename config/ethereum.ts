import { IConfig } from "./types";

require("dotenv").config({ path: "../.env" });

const config: IConfig = {
  chainId: parseInt(process.env.CHAIN_ID_ETHEREUM!),
  ownerPk: process.env.OWNER_PK_ETHEREUM!,
  rpcUrl: process.env.RPC_ETHEREUM!,
};

export default config;
