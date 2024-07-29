import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import GetById from "./pages/getById/getById";
import Video from "./pages/video/video";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/:id",
      element: <GetById/>
    
    },
    {
      path: "video",
      element: <Video/>
    
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
