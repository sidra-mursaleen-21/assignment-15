import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout";
import Home from "../../pages/Home";
import Todo from "../../pages/Todoes";
import Modal from "../../pages/Modal";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/modal/:id",
        element: <Modal />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
