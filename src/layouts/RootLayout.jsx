import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/blog">Blogs</Link> |{" "}
      <Link to="/about">About</Link>
      <hr />
      <Outlet />
    </>
  );
}
