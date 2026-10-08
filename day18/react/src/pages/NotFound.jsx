import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="hero">
      <h1>404</h1>
      <p className="lead">This page does not exist. Check the address or go back home.</p>
      <Link to={"/"} className="btn">
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;
