import Main from "@/presentation/layouts/Main";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
