import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";
import Block from "./Block";
import BlockTransactions from "./BlockTransactions";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState([]);
  const [blockTransactions, setBlockTransactions] = useState([]);
  async function getBlockNumber() {
    setBlockNumber(await alchemy.core.getBlockNumber());
  }

  async function getBlock() {
    let blockTagOrHash = "latest";
    setBlock(await alchemy.core.getBlock(blockTagOrHash));
  }

  async function getBlockWithTransaction() {
    setBlockTransactions(
      await alchemy.core.getBlockWithTransactions(
        "0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3"
      )
    );
  }

  console.log("BlockTransactions : ", blockTransactions.transactions);

  useEffect(() => {
    getBlockNumber();
    getBlock();
    getBlockWithTransaction();
  }, []);

  // console.log("blockTransactions.to : ", blockTransactions.to);

  return (
    <>
      <div className="App">Block Number: {blockNumber}</div>
      <Block blockData={block} />
      <div>BlockTransactions : {blockTransactions.hash}</div>
      {/* <BlockTransactions transaction={blockTransactions} /> */}
    </>
  );
}

export default App;
