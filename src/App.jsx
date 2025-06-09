import { useState } from "react";
import data from "../data.js";

const App = () => {
  const [list, setList] = useState(data); //Salvo l'array
  const [newTitle, setNewTitle] = useState(""); // Salvo il testo all'interno dell'input
  const [updateTitle, setUpdateTitle] = useState(null); // Salvo l'id dell'elemento da modificare

  const gestisciSubmit = (event) => {
    event.preventDefault();
    if (newTitle.trim() === "") return;

    if (updateTitle !== null) {
      const listaAggiornata = list.map((item) => (item.id === updateTitle ? { ...item, title: newTitle } : item));
      setList(listaAggiornata);
      setUpdateTitle(null);
    } else {
      const newItem = {
        id: list.length + 1,
        title: newTitle,
      };
      setList([...list, newItem]);
    }

    setNewTitle("");
  };

  const handleDelete = (id) => {
    const updateList = list.filter((item) => item.id !== id);
    setList(updateList);
  };

  const handleUpdate = (id) => {
    const updatedTitle = list.find((item) => item.id === id);
    setNewTitle(updatedTitle.title);
    setUpdateTitle(id);
  };

  return (
    <div>
      <form className="container" onSubmit={gestisciSubmit}>
        <input className="input" type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} placeholder="Inserisci il titolo" />
        <button type="submit" className="btn">
         {updateTitle !== null ? "Modifica il titolo" : "Aggiungi Titolo"}
        </button>
      </form>
      <div className="faq">
        {list.map((curList) => (
          <div key={curList.id} className="container">
            <h2 className="title" key={curList.id}>
              {curList.title}
            </h2>
            <button className="delete-btn" onClick={() => handleDelete(curList.id)}>
              Elimina
            </button>
            <button className="update-btn" onClick={() => handleUpdate(curList.id)} >Modifica</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
