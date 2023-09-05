import { useEffect, useState } from "react";
import Transaction from "../Components/Transactions";

export default function Index({transactions}) {

  return (
    <div className="Index">
      <h1>Bank Account Total: { `-999999 (Extremely Poor (NYC))`}</h1>
      <ul>{transactions.map(transaction => <Transaction transaction={transaction} />)}</ul>
    </div>
  );
}