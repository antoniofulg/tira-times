import { Header } from "@/presentation/components";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="h-screen bg-white dark:bg-gray-900">
      <Header />
      <Outlet />
    </main>
  );
};

export default Main;
