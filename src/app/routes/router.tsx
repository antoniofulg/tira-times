import { MainLayout } from "@/app/components/layouts";
import { ChooseListStyle, MatchInfo, Home, PasteList } from "@/pages";
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
      <Route path="paste-list" element={<PasteList />} />
    </Route>
  )
);
