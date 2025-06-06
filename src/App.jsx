import { use, useState } from "react";
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
      <form onSubmit={gestisciSubmit}>
        <input type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} placeholder="Inserisci il titolo" />
        <button type="submit">Aggiungi titolo</button>
      </form>
      <div>
        {list.map((curList) => {
          return <h2 key={curList.id}>{curList.title}</h2>;
        })}
      </div>
    </div>
  );
};

export default App;
