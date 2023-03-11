import { Header } from "@/components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <>
      <ToastContainer theme="dark" position="bottom-right" />
      <Header />
      <main className="h-full min-h-screen bg-white dark:bg-gray-900">
        <Outlet />
      </main>
    </>
  );
};

export default Main;
