import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageExpense() {
  const [issearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <main>
      <header className="p-4 flex flex-col">
        <section className="flex items-center">
          <AnimatePresence>
            {!issearchExpanded && (
              <motion.h1
                style={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-2xl"
              >
                Transactions
              </motion.h1>
            )}
          </AnimatePresence>
          <div className="flex flex-grow gap-4 items-center justify-end">
            <button onClick={() => setIsSearchExpanded((prev) => !prev)}>
              <span className="material-symbols-outlined block w-6 h-6">
                {issearchExpanded ? "close" : "search"}
              </span>
            </button>
            <AnimatePresence>
              {issearchExpanded && (
                <motion.input
                  className="input"
                  style={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
        </section>
      </header>
    </main>
  );
}
