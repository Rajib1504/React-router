import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import UserDetails from "./Components/UserDetails/UserDetails";
import TotalPosts from "./Components/TotalPosts/TotalPosts";
import PostDetails from "./Components/PostDetails/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/user",
        loader: () => fetch("https://jsonplaceholder.org/users"),
        element: <User></User>,
      },
      {
        path: "/user/:userId",
        // loader: ({ params }) => console.log(params.userId),
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.org/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <TotalPosts></TotalPosts>,
      },
      {
        path: "/posts/:postId",
        // loader: ({ params }) => console.log(params),
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
