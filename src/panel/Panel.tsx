import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Acl from "./components/acl/Acl";
import AppsManager from "./components/appsManager/AppsManager";
import AsideBar from "./components/asideBar/AsideBar";
import Error from "./components/Error";
import Navbar from "./components/navbar/Navbar";
import SubUsers from "./components/subUsers/SubUsers";
import TokenManager from "./components/tokenManager/TokenManager";
// import DashboardCss from "./dashboard/Dashboard.module.css";

const Panel = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", gap: "250px" }}>
        <div style={{ width: "20px" }}>
          <AsideBar />
        </div>
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="tokenmanager" element={<TokenManager />} />
            <Route path="apps" element={<AppsManager />} />
            <Route path="subusers" element={<SubUsers />} />
            <Route path="acl" element={<Acl />} />
            <Route path="*" element={<Navigate to={"/panel/error"} />} />
            <Route path="error" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Panel;
