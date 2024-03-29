import React, { useState } from "react";
import "./Block.css"; // Import CSS file for styling

const Block = ({ blockData }) => {
  const [showBlockData, setShowBlockData] = useState(false);

  const toggleBlockData = () => {
    setShowBlockData(!showBlockData);
  };

  return (
    <div className="block-container">
      <button onClick={toggleBlockData} className="toggle-button">
        {showBlockData ? "Hide Block" : "Show Block"}
      </button>
      {showBlockData && (
        <div className="block-details">
          <h2>Block Data</h2>
          <p>
            <strong>Hash:</strong> {blockData.hash}
          </p>
          <p>
            <strong>Parent Hash:</strong> {blockData.parentHash}
          </p>
          <p>
            <strong>Number:</strong> {blockData.number}
          </p>
          <p>
            <strong>Timestamp:</strong> {blockData.timestamp}
          </p>
          <p>
            <strong>Nonce:</strong> {blockData.nonce}
          </p>
          <p>
            <strong>Difficulty:</strong> {blockData.difficulty}
          </p>
          <p>
            <strong>Gas Limit:</strong> {blockData.gasLimit._hex}
          </p>
          <p>
            <strong>Miner:</strong> {blockData.miner}
          </p>
          <p>
            <strong>Extra Data:</strong> {blockData.extraData}
          </p>
          <h3>Transactions:</h3>
          <ul>
            {blockData.transactions.map((tx, index) => (
              <li key={index}>{tx}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Block;
