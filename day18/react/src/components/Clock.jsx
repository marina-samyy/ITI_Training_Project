import { useEffect, useState } from "react";

function Clock({ onLog }) {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    onLog("Mounting: component appeared");
    return () => {
      onLog("Unmounting: cleanup ran");
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      onLog(`Updating: count changed to ${count}`);
    }
  }, [count]);

  useEffect(() => {
    document.title = `Clock ${seconds}s`;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="panel">
      <p>
        Seconds running: <strong>{seconds}</strong>
      </p>
      <p>
        Window width: <strong>{width}px</strong>
      </p>
      <p>
        Clicks: <strong>{count}</strong>
      </p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Update state
      </button>
    </div>
  );
}

export default Clock;
