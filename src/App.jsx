import { useState } from "react";
import data from "../data.js";

const App = () => {
  const [list, setList] = useState(data);
  const [newTitle, setNewTitle] = useState("");

  const gestisciSubmit = (event) => {
    event.preventDefault();
    if (newTitle.trim() === "") return;

    const newItem = {
      id: list.length + 1,
      title: newTitle,
    };

    setList([...list, newItem]);
    setNewTitle("");
  };

  return (
    <div>
      <form className="container" onSubmit={gestisciSubmit}>
        <input className="input" type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} placeholder="Inserisci il titolo" />
        <button type="submit" className="btn">
          Aggiungi titolo
        </button>
      </form>
      <div className="faq">
        {list.map((curList) => {
          return <h2 key={curList.id}>{curList.title}</h2>;
        })}
      </div>
    </div>
  );
};

export default App;
