import Main from "@/presentation/layouts/Main";
import { MatchInfo, Home } from "@/presentation/pages";
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
        path: "match-info",
        element: <MatchInfo />,
      },
    ],
  },
]);
