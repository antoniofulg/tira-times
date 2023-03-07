import { MainLayout } from "@/app/components/layouts";
import { MatchInfo, Home, ChooseListStyle } from "@/pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="match-info" element={<MatchInfo />} />
      <Route path="copy-list" element={<ChooseListStyle />} />
    </Route>
  )
);
