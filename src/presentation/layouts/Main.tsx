import { Header } from "@/presentation/components";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <main className="h-screen bg-white dark:bg-gray-900">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
