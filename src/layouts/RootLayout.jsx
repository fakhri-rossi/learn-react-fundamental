import { Outlet, NavLink } from "react-router-dom";
import "../styles/index.css";

export default function RootLayout() {
  return (
    <>
      <div className="navlink-container">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
          to="/">
          Home
        </NavLink>{" "}
        <NavLink to="/blog">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <hr />

      <Outlet />
    </>
  );
}
