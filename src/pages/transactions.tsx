import { AnimatePresence, motion } from "framer-motion";
import useStore from "../store";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

export default function PageExpense() {
  const { asCard, lightSidebar } = useStore();
  const listItemStyles = asCard
    ? "rounded-2xl p-4 shadow-xl shadow-slate-400/20 bg-white mx-4 mb-4"
    : "px-4 py-4 border-b";
  const sidebarStyles = lightSidebar ? "" : "bg-black text-white";

  return (
    <main className="flex flex-col md:flex-row bg-scaffold min-h-screen w-screen">
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
        <TabBar />
      </header>

      <article className="flex flex-col flex-grow md:flex-grow-0 md:w-[300px] text-foreground mt-0 pb-2 md:max-h-screen overflow-scroll md:border-r">
        <ToolBar />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key, idx) => (
          <div className={"flex flex-col gap-1 " + listItemStyles}>
            <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
            <p className="text-2xl">$100</p>
            <p>Electricity Bill</p>
          </div>
        ))}
      </article>

      <article className="hidden md:grid place-content-center flex-grow">
        Select a Transaction
      </article>
    </main>
  );
}

function TabBar() {
  function getNavLinkStyle(props: NavLinkRenderProps): string {
    const layoutStyles = "flex flex-1 flex-grow md:flex-grow-0 gap-2 p-4";
    const alignmentStyles = "justify-center md:justify-start";
    const effectStyles = "cursor rounded-xl";
    const activeStyles = props.isActive ? "bg-white text-black shadow-2xl" : "";
    return `${layoutStyles} ${alignmentStyles} ${effectStyles} ${activeStyles}`;
  }

  const links: { [index: string]: string[] } = {
    All: ["/transactions/", "swap_vert"],
    Spent: ["/transactions/spent", "north_east"],
    Received: ["/transactions/received", "south_west"],
  };

  const { lightSidebar } = useStore();
  const sectionStyles = lightSidebar ? "bg-slate-300/30" : "bg-slate-500/30";
  return (
    <>
      <p className="hidden md:block font-bold uppercase mx-4">Transactions</p>
      <div className={"flex md:flex-col mx-4 rounded-xl " + sectionStyles}>
        {Object.keys(links).map((key) => (
          <NavLink to={links[key][0]} className={getNavLinkStyle}>
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

function SummaryCard() {
  const values = useStore((slice): { [index: string]: number } => ({
    Total: slice.totalValue,
    Spent: slice.totalSpent,
    Received: slice.totalReceived,
  }));
  const styles = {
    layout: "flex md:flex-col min-h-fit items-center mx-4",
    card: "bg-accent text-white rounded-2xl",
    elevation: " shadow-2xl shadow-accent/40",
    item: "text-center py-6 md:py-4 grid flex-grow place-content-center",
  };

  return (
    <article className={`${styles.layout} ${styles.card} ${styles.elevation}`}>
      {Object.keys(values).map((label) => (
        <div className={styles.item}>
          <p className="text-xl">${values[label]}</p>
          <p>{label}</p>
        </div>
      ))}
    </article>
  );
}

function ToolBar() {
  const { searchExpanded, searchValue, toggleSearch, setSearchValue } =
    useStore();
  const searchBar = (
    <div className="flex flex-grow gap-2 items-center justify-end">
      <button onClick={toggleSearch}>
        <span className="material-symbols-outlined block w-6 h-6">
          {searchExpanded ? "close" : "search"}
        </span>
      </button>
      <AnimatePresence>
        {searchExpanded && (
          <motion.input
            className="input"
            style={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
      </AnimatePresence>
    </div>
  );
  return (
    <header className="p-4 flex flex-col">
      <section className="flex items-center">
        <AnimatePresence>
          {!searchExpanded && (
            <motion.h1
              style={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl"
            >
              Transactions
            </motion.h1>
          )}
        </AnimatePresence>
        {searchBar}
      </section>
    </header>
  );
}
