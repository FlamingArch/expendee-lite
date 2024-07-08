import { AnimatePresence, motion } from "framer-motion";
import useStore from "../store";

export default function PageExpense() {
  const { asCard } = useStore();
  const styles = asCard
    ? "rounded-2xl p-4 shadow-xl shadow-slate-400/20 bg-white mx-4 mb-4"
    : "px-4 py-4 border-b";

  return (
    <main className="flex flex-col md:flex-row bg-black text-white min-h-screen w-screen">
      <header className="flex flex-col py-4 gap-4 md:w-[250px]">
        <AppBar />
        <SummaryCard />
        <TabBar />
      </header>

      <article className="flex flex-col flex-grow md:flex-grow-0 md:w-[300px] bg-scaffold text-foreground mt-0 pb-2 md:max-h-screen overflow-scroll md:border-r">
        <ToolBar />
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
        <div className={"flex flex-col gap-1 " + styles}>
          <p className="text-sm font-semibold">8:23 PM · HDFC Bank</p>
          <p className="text-2xl">$100</p>
          <p>Electricity Bill</p>
        </div>
      </article>

      <article className="hidden bg-scaffold text-foreground md:grid place-content-center flex-grow">
        Select a Transaction
      </article>
    </main>
  );
}

function TabBar() {
  return (
    <>
      <p className="hidden md:block font-bold uppercase mx-4">Transactions</p>
      <div className="flex md:flex-col mx-4 bg-[#222326] rounded-xl">
        <div className="flex-grow cursor-pointer md:flex-grow-0 flex-1 text-center md:text-start p-2 md:p-4 rounded-xl bg-white text-black">
          All
        </div>
        <div className="flex-grow cursor-pointer md:flex-grow-0 flex-1 text-center md:text-start p-2 md:p-4 rounded-xl ">
          Spent
        </div>
        <div className="flex-grow cursor-pointer md:flex-grow-0 flex-1 text-center md:text-start p-2 md:p-4 rounded-xl ">
          Received
        </div>
      </div>
    </>
  );
}

function SummaryCard() {
  const { totalValue, totalReceived, totalSpent } = useStore();

  return (
    <article className="flex md:flex-col items-center rounded-2xl overflow-clip bg-accent shadow-2xl shadow-accent/40 mx-4">
      <div className="text-center py-6 md:py-4 grid flex-grow place-content-center">
        <p className="text-xl">${totalValue}</p>
        <p>Total</p>
      </div>
      <div className="text-center py-6 md:py-4 grid flex-grow place-content-center">
        <p className="text-xl">${totalSpent}</p>
        <p>Spent</p>
      </div>
      <div className="text-center py-6 md:py-4 grid flex-grow place-content-center">
        <p className="text-xl">${totalReceived}</p>
        <p>Received</p>
      </div>
    </article>
  );
}

function AppBar() {
  return (
    <header className="flex flex-col px-4 gap-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-serif font-black">EXPENDEE</h1>
        <span className="font-mono rounded text-xs p-1 text-black bg-white">
          Lite
        </span>
      </div>
    </header>
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
