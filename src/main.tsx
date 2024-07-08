import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageExpenses from "./pages/expenses";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageExpenses />} />
      </Routes>
    </BrowserRouter>
  );
}
