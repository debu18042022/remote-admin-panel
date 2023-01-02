import {
  Button,
  Card,
  FlexChild,
  FlexLayout,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

const SubUserRegistration = () => {
  const navigate = useNavigate();
  return (
    <>
        <FlexLayout direction="vertical" spacing="extraLoose">
          {/* <FlexChild> */}
            <FlexLayout halign="fill">
              <TextStyles
                alignment="left"
                fontweight="extraBolder"
                textcolor="dark"
                type="SubHeading"
                utility="none"
              >
                Create App
              </TextStyles>
              <Button
                content="Back"
                type="Primary"
                onClick={() => navigate("/panel/subusers")}
              />
            </FlexLayout>
          {/* </FlexChild> */}
          <Card extraClass="" cardType="Shadowed">
            <FlexLayout direction="vertical" spacing="loose">
              <TextField
                autocomplete="off"
                name="User Name"
                onChange={function noRefCheck() {}}
                placeHolder="Enter User Name"
                type="text"
              />
              <TextField
                name="Email"
                placeHolder="App Email"
                onChange={function noRefCheck() {}}
                type="text"
              />
              <TextField
                autocomplete="off"
                name="Password"
                onChange={function noRefCheck() {}}
                placeHolder="Enter password"
                type="password"
              />
            </FlexLayout>
          </Card>
        </FlexLayout>
    </>
  );
};

export default SubUserRegistration;
