import { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") return;
    onAdd(text.trim());
    setText("");
  }

  return (
    <div className="task-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="What needs to be done?"
      />
      <button className="btn" onClick={handleAdd}>
        Add task
      </button>
    </div>
  );
}

export default TaskForm;
