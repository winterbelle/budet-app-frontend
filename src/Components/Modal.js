export default function Modal({ message }) {
    return (
      <div id="modal" className="hidden">
        <div className="message">
          <h1>{message.head}</h1>
          <p>{message.body}</p>
          <button id="modal-confirm">
              Continue
          </button>
          <button
            onClick={(e) => {
              e.target.parentElement.parentElement.classList.toggle("hidden");
              e.target.onClick = null
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }