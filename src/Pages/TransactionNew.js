import { useState } from "react";
export default function TransactionNew() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="TransactionNew">
      <h1>Add a new item</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(process.env.REACT_APP_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({item_name: name, amount: amount, date: date, from: from, category: category}),
          })
          .then(response => {
            console.log('POST worked!')
            window.open('/', '_self')
          })
          .catch(error => {
            console.log('Something went wrong...')
          })
        }}
      >
        <div className="Date">
          <label>Date</label>
          <input
            type="text"
            placeholder="date"
            required
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="Name">
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="Amount">
          <label>Amount</label>
          <input
            type="text"
            placeholder="amount"
            required
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="From">
          <label>From</label>
          <input
            type="text"
            placeholder="from"
            required
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
        </div>
        <div className="Category">
          <label>Category</label>
          <input
            type="text"
            placeholder="category"
            required
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <button type="submit">Create New Item</button>
      </form>
    </div>
    );
}