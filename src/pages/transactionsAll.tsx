import { AnimatePresence, motion } from "framer-motion";
import useStore from "../store";

export default function PageTransactionsAll() {
  const { asCard } = useStore();
  const listItemStyles = asCard
    ? "rounded-2xl p-4 shadow-xl shadow-slate-400/20 bg-white mx-4 mb-4"
    : "px-4 py-4 border-b";
  return (
    <>
      <article className="flex flex-col flex-grow md:flex-grow-0 md:w-[300px] text-foreground mt-0 pb-2 md:max-h-screen overflow-scroll md:border-r">
        <ToolBar />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
          <div key={idx} className={"flex flex-col gap-1 " + listItemStyles}>
            <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
            <p className="text-2xl">$100</p>
            <p>Electricity Bill</p>
          </div>
        ))}
      </article>
      <div className="bg-scaffold flex-grow place-content-center hidden md:grid">
        Select a Transaction
      </div>
    </>
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
