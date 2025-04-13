import React from "react";
import { useRoutes } from "react-router-dom";

import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Blogs } from "../pages/Blogs";
import { PATHS } from "./paths";
import { Home } from "../pages/Home";
import { SharedLayout } from "../layouts/SharedLayout";
import { Services } from "../pages/Services";

export default function AppRoutes() {
  const element = useRoutes([
    {
      element: <SharedLayout />,
      children: [
        {
          path: PATHS.HOME,
          element: <Home />,
        },
        {
          path: PATHS.ABOUT,
          element: <About />,
        },
        {
            path: PATHS.SERVICES,
            element: <Services />,
          },
        {
          path: PATHS.CONTACT,
          element: <Contact />,
        },
        {
          path: PATHS.BLOG,
          element: <Blogs />, // optional blog page
        },
      ],
    },
  ]);

  return element;
}
