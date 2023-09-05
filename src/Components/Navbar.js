import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <aside>
        <h2 id="logo"><Link to={'/'}>Budget App</Link></h2>
      </aside>
      <aside id="new-resource-aside">
        <Link to={'/transactions/new'}><button>New Transaction</button></Link>
      </aside>
    </nav>
  );
}