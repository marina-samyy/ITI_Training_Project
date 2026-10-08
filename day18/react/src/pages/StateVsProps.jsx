import { useState } from "react";

function Badge({ label, color }) {
  return (
    <span className="badge" style={{ background: color }}>
      {label}
    </span>
  );
}

function StateVsProps() {
  const [color, setColor] = useState("#7c3aed");
  const colors = ["#7c3aed", "#a855f7", "#6d28d9", "#c026d3"];

  return (
    <div>
      <h3>State lives in the parent, props flow down</h3>
      <p>
        The parent owns the color in state. The badge only receives it as props and cannot change it.
      </p>
      <Badge label="Props in action" color={color} />
      <div className="row">
        {colors.map((c) => (
          <button
            key={c}
            className="swatch"
            style={{ background: c }}
            onClick={() => setColor(c)}
            aria-label={c}
          />
        ))}
      </div>
    </div>
  );
}

export default StateVsProps;
