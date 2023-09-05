import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TransactionView({ setMessage }) {
  const obj = useParams();

  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/" + (obj.id ? obj.id : null))
      .then((response) => response.json())
      .then((data) => {
        setTransaction(data);
      })
      .catch((error) => {
        console.log("Something went wrong when fetching the transaction.");
      });
  });

  function activateMessage(head, body, func) {
    setMessage({
      head: head,
      body: body,
    });
    document.getElementById("modal").classList.toggle("hidden");
    document.getElementById("modal-confirm").onclick = func;
  }

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [category, setCategory] = useState("");

  const inputList = [name, amount, date, from, category]

  return (
    <div className="TransactionView">
      <h1>
        {transaction.item_name} - <span>{transaction.from}</span>
      </h1>
      <h3>${transaction.amount}</h3>
      <h2>{transaction.date}</h2>
      <form>
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
      </form>
      <button
        onClick={() => {
          activateMessage(
            "Are you sure?",
            "This will alter the transaction.",
            () => {
            const model = 
            {   
                item_name: name,
                amount: amount,
                date: date,
                from: from,
                category: category
            }

            const data = {}

            for(const key in model){
                if(model[key]){
                    data[key] = model[key]
                }
            }

            console.log(data)

              fetch(process.env.REACT_APP_BASE_URL + "/" + obj.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("Transaction was successful updated...");
                  window.open('/', '_self')
                })
                .catch((error) => {
                  console.log(
                    "Something went wrong when trying to update the transaction."
                  );
                });
            }
          );
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          activateMessage(
            "Are you sure?",
            "This will remove the transaction.",
            () => {
              fetch(process.env.REACT_APP_BASE_URL + "/" + obj.id, {
                method: "DELETE",
              })
                .then((response) => {
                  response.json();
                })
                .then((data) => {
                  console.log("Transaction successfully deleted...");
                  window.open('/', '_self')
                })
                .catch((error) => {
                  console.log(
                    "Something went wrong when trying to delete the transaction."
                  );
                });
            }
          );
        }}
      >
        Delete
      </button>
    </div>
  );
}