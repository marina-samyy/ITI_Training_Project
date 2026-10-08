import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Lifecycle from "./pages/Lifecycle";
import Learn from "./pages/Learn";
import StateVsProps from "./pages/StateVsProps";
import Spa from "./pages/Spa";
import NotFound from "./pages/NotFound";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "tasks", element: <Tasks /> },
      { path: "lifecycle", element: <Lifecycle /> },
      {
        path: "learn",
        element: <Learn />,
        children: [
          { path: "state-vs-props", element: <StateVsProps /> },
          { path: "spa", element: <Spa /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
