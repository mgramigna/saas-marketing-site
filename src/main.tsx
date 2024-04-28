import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/inter";
import "@fontsource-variable/lexend";
import "./index.css";
import HomePage from "./pages/home.tsx";
import SignIn from "./pages/sign-in.tsx";
import SignUp from "./pages/sign-up.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
