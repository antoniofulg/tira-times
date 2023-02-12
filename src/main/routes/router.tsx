import Main from "@/presentation/layouts/Main";
import Home from "@/presentation/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
