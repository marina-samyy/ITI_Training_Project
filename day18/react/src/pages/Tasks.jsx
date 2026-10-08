import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import FilterBar from "../components/FilterBar";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review useState", done: true },
    { id: 2, title: "Try useEffect with a dependencies array", done: false },
    { id: 3, title: "Build nested routes", done: false },
  ]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const remaining = tasks.filter((task) => !task.done).length;
    document.title = `${remaining} tasks left`;
  }, [tasks]);

  useEffect(() => {
    return () => {
      document.title = "React Day Task";
    };
  }, []);

  function addTask(title) {
    setTasks([...tasks, { id: Date.now(), title, done: false }]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  const doneCount = tasks.filter((task) => task.done).length;

  return (
    <section>
      <h1>Tasks</h1>
      <p className="lead">
        {doneCount} of {tasks.length} finished
      </p>
      <TaskForm onAdd={addTask} />
      <FilterBar value={filter} onChange={setFilter} />
      {visibleTasks.length === 0 ? (
        <p className="empty">Nothing here. Add a task or change the filter.</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
