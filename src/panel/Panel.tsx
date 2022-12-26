import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const Panel = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/panel/dashboard"} />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Panel;
