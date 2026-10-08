function Spa() {
  return (
    <div>
      <h3>Single page application</h3>
      <p>
        The browser loads one HTML file. react-router-dom swaps components when the URL changes, so the page never reloads.
      </p>
      <p>
        With vanilla JavaScript you would touch the DOM and the BOM (window, history, location) yourself. React and the router do that for you.
      </p>
    </div>
  );
}

export default Spa;
