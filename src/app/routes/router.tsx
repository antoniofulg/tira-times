import { MainLayout } from "@/app/components/layouts";
import { MatchInfo, Home, CopyList } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "match-info",
        element: <MatchInfo />,
      },
      {
        path: "copy-list",
        element: <CopyList />,
      },
    ],
  },
]);
