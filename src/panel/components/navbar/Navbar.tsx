import {
  Button,
  Topbar,
} from "@cedcommerce/ounce-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Topbar
      account={{
        name: "admin",
        url: "",
        image: "",
        userPopoverMenu: (
          <>
            <Button length="fullBtn" type="Plain" halign="Start" icon="">
              Profile
            </Button>
            <Button length="fullBtn" type="Plain" halign="Start" icon="">
              Settings
            </Button>
            <Button
              length="fullBtn"
              type="Plain"
              halign="Start"
              icon=""
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
