import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Homepage from "../pages/index";
import About from "../pages/About";
import Blog from "../pages/blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
