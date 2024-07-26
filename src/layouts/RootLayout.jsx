import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <hr />
      <Outlet />
    </>
  );
}
