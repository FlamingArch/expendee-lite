import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageTransactions from "./pages/transactions";
import PageTransactionsAll from "./pages/transactionsAll";
import PageTransactionsSpent from "./pages/transactionsSpent";
import PageTransactionsReceived from "./pages/transactionsReceived";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTransactions />}>
          <Route path="/all" element={<PageTransactionsAll />} />
          <Route path="/spent" element={<PageTransactionsSpent />} />
          <Route path="/received" element={<PageTransactionsReceived />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
