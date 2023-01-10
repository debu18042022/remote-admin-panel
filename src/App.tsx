import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Registration from "./components/auth/registration/Registration";
import Dashboard from "./panel/components/appsManager/AppsManager";
import Panel from "./panel/Panel";

function App() {
  return (
    <div className="">
      {/* <Dashboard/> */}

      <Routes>
        <Route path="*" element={<Navigate to="/auth" replace={true} />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/panel/*" element={<Panel />} />
      </Routes>
    </div>
  );
}

export default App;
