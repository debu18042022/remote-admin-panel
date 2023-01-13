import {
  bag,
  box,
  home,
  NewSidebar,
  note,
  setting,
} from "@cedcommerce/ounce-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

const AsideBar = () => {
  const navigate = useNavigate();
  const menu = [
    {
      id: "tokenManager",
      content: "Token Manager",
      path: "/panel/tokenmanager",
      icon: home,
    },
    {
      id: "appManager",
      content: "App Manager",
      path: "/panel/apps",
      icon: box,
    },
    {
      id: "subUsers",
      content: "Sub Users",
      path: "/panel/subusers",
      icon: note,
    },
    {
      id: "acl",
      content: "ACL",
      path: "/panel/acl",
      icon: bag,
    },
    {
      id: "githubData",
      content: "Github Manager",
      path: "/panel/githubManager",
      icon: note,
      extraClass: "Helloclass",
    },
    {
      id: "configuration",
      content: "Configuration",
      path: "/panel/config",
      icon: setting,
      extraClass: "Helloclass",
    },
  ];

  return (
    <div>
      <aside>
        <NewSidebar
          menu={menu}
          onChange={(e: any) => navigate(e?.path ?? "/panel/error")}
        />
      </aside>
    </div>
  );
};

export default AsideBar;
