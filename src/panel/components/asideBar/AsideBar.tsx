import { NewSidebar } from "@cedcommerce/ounce-ui";
import React from "react";

const AsideBar = () => {
  const menu = [
    {
      id: "dashboard",
      content: "Dashboard",
      //  icon: home,
    },
    {
      id: "Profile",
      content: "Profile",
      path: "/panel/profiling",
      // icon: box,
    },
    {
      id: "products",
      content: "Products",
      path: "/panel/products",
      // icon: note,
    },
    {
      id: "order",
      content: "Orders",
      path: "/panel/order",
      // icon: bag,
    },
    {
      id: "configuration",
      content: "Configuration",
      path: "/panel/config",
      // icon: setting,
      extraClass: "Helloclass",
    },
    {
      id: "queuedtasks",
      content: "Activities",
      path: "/panel/queuedtasks",
      // icon: box,
    },
  ];

  const subMenu = [
    {
      id: "FAQ",
      content: "FAQ",
      path: "/panel/faq",
      // icon: home,
    },
    {
      id: "HELP",
      content: "HELP",
      path: "/panel/help",
      // icon: box,
    },
    {
      id: "QRY",
      content: "QRY",
      path: "/panel/QRY",
      // icon: home,
    },
  ];

  return (
    <div>
      <aside style={{ border: "1px solid red",width:""}}>
        <NewSidebar
          // logo={logos}
          // mobileLogo={mlogo}
          menu={menu}
          subMenu={subMenu}
          // onChange={onChange}
        />
      </aside>
    </div>
  );
};

export default AsideBar;
