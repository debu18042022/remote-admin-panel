import { Card } from "@cedcommerce/ounce-ui";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Registration from "./registration/Registration";

function Auth() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to={"/auth/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

      </Routes>
    </div>
  );
}

export default Auth;
