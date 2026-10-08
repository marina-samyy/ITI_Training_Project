const options = ["all", "active", "done"];

function FilterBar({ value, onChange }) {
  return (
    <div className="filters">
      {options.map((option) => (
        <button
          key={option}
          className={value === option ? "chip active" : "chip"}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
