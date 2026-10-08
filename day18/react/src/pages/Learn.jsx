import { NavLink, Outlet } from "react-router-dom";

function Learn() {
  const tabClass = ({ isActive }) => (isActive ? "tab active" : "tab");

  return (
    <section>
      <h1>Learn</h1>
      <p className="lead">A nested route: these tabs render inside this page through Outlet.</p>
      <div className="tabs">
        <NavLink to={"state-vs-props"} className={tabClass}>
          State vs props
        </NavLink>
        <NavLink to={"spa"} className={tabClass}>
          SPA
        </NavLink>
      </div>
      <div className="panel">
        <Outlet />
      </div>
    </section>
  );
}

export default Learn;
