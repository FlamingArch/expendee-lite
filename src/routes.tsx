import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageTransactions from "./pages/transactions";
import PageTransactionsAll from "./pages/transactionsAll";
import PageTransactionsSpent from "./pages/transactionsSpent";
import PageTransactionsReceived from "./pages/transactionsReceived";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/transactions" element={<PageTransactions />}>
          <Route path="/transactions/all" element={<PageTransactionsAll />} />
          <Route
            path="/transactions/spent"
            element={<PageTransactionsSpent />}
          />
          <Route
            path="/transactions/received"
            element={<PageTransactionsReceived />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
