import { NavLink, NavLinkRenderProps } from "react-router-dom";
import useStore from "../store";

export default function PrimaryTabBar() {
  function getNavLinkStyle(props: NavLinkRenderProps): string {
    const layoutStyles = "flex flex-1 flex-grow md:flex-grow-0 gap-2 p-3";
    const alignmentStyles = "justify-center md:justify-start";
    const effectStyles = "cursor rounded-xl";
    const activeStyles = props.isActive ? "bg-white text-black shadow-2xl" : "";
    return `${layoutStyles} ${alignmentStyles} ${effectStyles} ${activeStyles}`;
  }

  const links: { [index: string]: string[] } = {
    All: ["/all", "swap_vert"],
    Spent: ["/spent", "north_east"],
    Received: ["/received", "south_west"],
  };

  const { lightSidebar } = useStore();
  const sectionStyles = lightSidebar ? "bg-slate-300/30" : "bg-slate-500/30";
  return (
    <>
      <p className="hidden md:block font-bold uppercase mx-4">Transactions</p>
      <div className={"flex md:flex-col mx-4 rounded-xl " + sectionStyles}>
        {Object.keys(links).map((key) => (
          <NavLink key={key} to={links[key][0]} className={getNavLinkStyle}>
            <span className="material-symbols-outlined block w-6 h-6">
              {links[key][1]}
            </span>
            {key}
          </NavLink>
        ))}
      </div>
    </>
  );
}
