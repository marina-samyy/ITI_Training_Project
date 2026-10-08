import { useState } from "react";
import Clock from "../components/Clock";

function Lifecycle() {
  const [show, setShow] = useState(true);
  const [logs, setLogs] = useState([]);

  function addLog(message) {
    setLogs((prev) => [...prev, message]);
  }

  return (
    <section>
      <h1>Component lifecycle</h1>
      <p className="lead">
        Toggle the clock to mount and unmount it. Click update to see the dependency array react.
      </p>
      <div className="row">
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? "Unmount clock" : "Mount clock"}
        </button>
        <button className="btn ghost" onClick={() => setLogs([])}>
          Clear log
        </button>
      </div>
      <div className="split">
        {show ? <Clock onLog={addLog} /> : <div className="panel muted">The clock is unmounted.</div>}
        <ol className="log">
          {logs.length === 0 && <li className="empty">No events yet.</li>}
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Lifecycle;
