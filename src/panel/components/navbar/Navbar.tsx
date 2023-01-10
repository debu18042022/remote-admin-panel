import {
  Avatar,
  Button,
  Card,
  FlexLayout,
  Topbar,
} from "@cedcommerce/ounce-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // return (
  //   <div>
  //     {/* <Card>
  //       <FlexLayout halign="end">
  //         <img src="" alt="" />
  //         <Avatar
  //           color="blue"
  //           image=""
  //           size="large"
  //           text="Jon Doe"
  //           type="circle"
  //         />
  //       </FlexLayout>
  //     </Card> */}
  //   </div>
  // );

  return (
    <Topbar
      // connectLeft={
      //   <Button
      //     type="Secondary"
      //     //  icon={<Facebook />} content="Connect"
      //   />
      // }
      // connectRight={
      //   <FlexLayout spacing="tight">
      //     <Button
      //       onClick={() => {}}
      //       type="Outlined"
      //       iconAlign="left"
      //       icon=""
      //       // icon={<Bell size={20}></Bell>}
      //     />
      //     <Button
      //       type="Outlined"
      //       iconAlign="left"
      //       icon=""
      //       // icon={<User size={20}></User>}
      //     />
      //   </FlexLayout>
      // }
      // darkMode
      account={{
        name: "admin",
        url: "",
        image: "",
        userPopoverMenu: (
          <>
            <Button
              length="fullBtn"
              type="Plain"
              halign="Start"
              icon=""
              // icon={<User size={20} />}
            >
              Profile
            </Button>
            <Button
              length="fullBtn"
              type="Plain"
              halign="Start"
              icon=""
              // icon={<Settings size={20} />}
            >
              Settings
            </Button>
            <Button
              length="fullBtn"
              type="Plain"
              halign="Start"
              icon=""
              // {<LogOut size={20} />}
              onClick={() => {
                sessionStorage.clear();
                navigate("/auth");
              }}
            >
              Logout
            </Button>
          </>
        ),
      }}
    />
  );
};

export default Navbar;
