import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import CourseList from "./pages/CourseList";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AddCourse from "./pages/AddCourse";
const App = () => {
  let myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <CourseList />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/add",
          element: <AddCourse />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={myRouter} />;
};

export default App;
