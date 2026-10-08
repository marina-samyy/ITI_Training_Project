function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.done ? "task done" : "task"}>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <button className="icon-btn" onClick={onDelete.bind(null, task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
