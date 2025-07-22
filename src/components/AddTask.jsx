import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-orange-200 space-y-4 p-6 rounded-md shadow-md flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (title.trim() === "" || description.trim() === "") {
            return alert("Preencha todos os campos.");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;