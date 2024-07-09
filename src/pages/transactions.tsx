import useStore from "../store";
import { Outlet } from "react-router-dom";
import PrimaryTabBar from "../views/primaryTabBar";
import SummaryCard from "../views/summaryCard";

export default function PageTransactions() {
  const { lightSidebar } = useStore();
  const sidebarStyles = lightSidebar ? "" : "bg-black text-white";

  return (
    <>
      <header
        className={
          "flex flex-col py-4 gap-4 md:w-[250px] md:max-h-screen overflow-scroll " +
          sidebarStyles
        }
      >
        <div className="flex items-center py-2 gap-2 mx-4">
          <h1 className="text-2xl font-serif font-black">EXPENDEE</h1>
          <span className="font-mono rounded text-xs p-1 text-black bg-white">
            Lite
          </span>
        </div>
        <SummaryCard />
        <PrimaryTabBar />
      </header>
      <Outlet />
    </>
  );
}
