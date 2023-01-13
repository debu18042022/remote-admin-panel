import { BodyLayout, FlexChild, FlexLayout } from "@cedcommerce/ounce-ui";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Acl from "./components/acl/Acl";
import AppEdit from "./components/appEdit/AppEdit";
import AppRegistration from "./components/appRegistration/AppRegistration";
import AppsManager from "./components/appsManager/AppsManager";
import AsideBar from "./components/asideBar/AsideBar";
import Error from "./components/Error";
import GithubManager from "./components/github/githubManager/GithubManager";
import GithubTeams from "./components/github/githubTeams/GithubTeams";
import Navbar from "./components/navbar/Navbar";
import SubUserRegistration from "./components/subUserRegistration/SubUserRegistration";
import SubUsers from "./components/subUsers/SubUsers";
import TokenManager from "./components/tokenManager/TokenManager";
// import DashboardCss from "./dashboard/Dashboard.module.css";

const Panel = () => {
  return (
    <div>
      <Navbar />
      <AsideBar />
      <BodyLayout>
        <Routes>
          <Route path="tokenmanager" element={<TokenManager />} />
          <Route path="apps" element={<AppsManager />} />
          <Route path="subusers" element={<SubUsers />} />
          <Route path="acl" element={<Acl />} />
          <Route path="apps/registration" element={<AppRegistration />} />
          <Route path="apps/edit" element={<AppEdit />} />
          <Route
            path="subusers/registration"
            element={<SubUserRegistration />}
          />
          <Route path="githubManager" element={<GithubManager />} />
          <Route path="gitub/teams" element={<GithubTeams />} />
          <Route path="*" element={<Navigate to={"/panel/error"} />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </BodyLayout>
    </div>
  );
};

export default Panel;
