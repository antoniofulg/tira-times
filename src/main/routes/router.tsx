import Main from "@/presentation/layouts/Main";
import { GenerateList, Home } from "@/presentation/pages";
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
      {
        path: "generate-list",
        element: <GenerateList />,
      },
    ],
  },
]);
