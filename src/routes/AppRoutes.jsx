// src/routes/Routes.jsx
import React from "react";
import { useRoutes } from "react-router-dom";

import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Blog } from "../pages/Blog";
import { PATHS } from "./paths";
import { Home } from "../pages/Home";


export default function AppRoutes() {
  const element = useRoutes([
    {
      path: PATHS.HOME,
      element: <Home />,
    },
    {
      path: PATHS.ABOUT,
      element: <About />,
    },
    {
      path: PATHS.CONTACT,
      element: <Contact />,
    },
    {
      path: PATHS.BLOG,
      element: <Blog />, // optional blog page
    },
  ]);

  return element;
}
