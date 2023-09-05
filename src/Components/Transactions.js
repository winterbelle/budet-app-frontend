import React from "react";
import { Link } from "react-router-dom";

export default function Transaction({transaction}) {
  return (
    <div className="Transaction">
      <div className="Info">
        <div className="Date">{transaction.date}</div>
        <div className="Title">
          <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
        </div>
        <div className="Cost">{transaction.amount}</div>
      </div>
      <hr />
    </div>
  );
}