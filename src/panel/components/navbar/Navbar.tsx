import { Avatar, Card, FlexLayout } from "@cedcommerce/ounce-ui";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Card>
        <FlexLayout halign="end">
          <img src="" alt="" />
          <Avatar
            color="blue"
            image=""
            size="large"
            text="Jon Doe"
            type="circle"
          />
        </FlexLayout>
      </Card>
    </div>
  );
};

export default Navbar;
