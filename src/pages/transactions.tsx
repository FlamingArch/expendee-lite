import useStore from "../store";
import { Navigate, Outlet, useOutlet } from "react-router-dom";
import PrimaryTabBar from "../views/primaryTabBar";
import SummaryCard from "../views/summaryCard";
import Branding from "../views/branding";

export default function PageTransactions() {
  const { lightSidebar } = useStore();
  const outlet = useOutlet();
  const sidebarStyles = lightSidebar ? "" : "bg-black text-white";

  if (!outlet) return <Navigate to={"all"} />;

  return (
    <>
      <header
        className={
          "flex flex-col py-4 gap-4 md:w-[250px] md:max-h-screen overflow-scroll " +
          sidebarStyles
        }
      >
        <Branding className="mx-4" />
        <SummaryCard />
        <PrimaryTabBar />
      </header>
      <Outlet />
    </>
  );
}
