import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <section className="hero">
      <h1>Everything from today, in one project</h1>
      <p className="lead">
        State, effects, props, lifting state up and nested routes. Start with the counter, then open the other pages.
      </p>
      <div className="counter">
        <button className="btn ghost" onClick={handleDecrease}>
          -
        </button>
        <strong>{count}</strong>
        <button className="btn" onClick={handleIncrease}>
          +
        </button>
        <button className="btn ghost" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <div className="row">
        <Link to={"/tasks"} className="btn">
          Open tasks
        </Link>
        <Link to={"/lifecycle"} className="btn ghost">
          Watch the lifecycle
        </Link>
      </div>
    </section>
  );
}

export default Home;
