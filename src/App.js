import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Index from "./Pages/Index";
import TransactionView from "./Pages/TransactionView";
import TransactionNew from "./Pages/TransactionNew";
import Modal from "./Components/Modal";
import { useState, useEffect } from "react";


function App() {
  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState({head:"", body:""})

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL)
      .then((response) => response.json())
      .then((data) => setTransactions([...data]))
      .catch((error) => {
        console.log("An error occurred when fetching the data.");
      });
  });



  return (
    <div>
      <Modal message={message}/>
      <div className="App">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Index transactions={transactions} />} />
            <Route path="/transactions/:id" element={<TransactionView setMessage={setMessage}/>} />
            <Route path="/transactions/new" element={<TransactionNew />} />
          </Routes>
        </Router>
      </div>
    </ div>
  );
}

export default App;
