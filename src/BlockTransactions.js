import React from "react";

const BlockTransactions = ({ transaction }) => {
  return (
    <div className="transaction">
      <h3>Transaction Details</h3>
      {/* <ul>
        {transaction.transactions.map((tx, index) => (
          <li key={index}>{tx}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default BlockTransactions;
