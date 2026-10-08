import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <div className="shell">
      <header className="topbar">
        <Link to={"/"} className="brand">
          React<span>Day</span>
        </Link>
        <nav className="nav">
          <NavLink to={"/"} end className={linkClass}>
            Home
          </NavLink>
          <NavLink to={"/tasks"} className={linkClass}>
            Tasks
          </NavLink>
          <NavLink to={"/lifecycle"} className={linkClass}>
            Lifecycle
          </NavLink>
          <NavLink to={"/learn"} className={linkClass}>
            Learn
          </NavLink>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
