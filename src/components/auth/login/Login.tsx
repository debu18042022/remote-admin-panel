import {
  Button,
  Card,
  FlexChild,
  FlexLayout,
  FormElement,
  Modal,
  Select,
  Tabs,
  TextField,
} from "@cedcommerce/ounce-ui";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../../services/request/Request";
import LoginCss from "./Login.module.css";

type Auth = {
  username: string;
  password: string;
};

const Login = () => {
  sessionStorage.clear();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Auth>({
    username: "",
    password: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);
  const getusername = (value: string) => {
    setCredentials({ ...credentials, username: value });
    // const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // setResult(expression.test(value));
  };
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("Admin");
  const [selectedOption, setSelectedOption] = useState<string>();

  const getpassword = (value: string) => {
    setCredentials({ ...credentials, password: value });
  };

  const Registration = () => {
    navigate("/auth/registration");
  };

  const submitHandler = () => {
    let response;
    let url;
    if (selectedTab === "Admin") {
      url = `http://remote.local.cedcommerce.com/user/login`;
      // response = post(url, credentials);
    } else {
      url = "http://remote.local.cedcommerce.com/sub-user/login";
      // response = post(url, credentials);
    }
    response = post(url, credentials);
    response
      .then((response) => response.json())
      .then((response) => {
        console.log("resData", response);
        if (response.success) {
          // alert("success");
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("loginStatus", response.success);
          navigate("/panel/apps");
        }
      });
  };
  return (
    <FlexLayout halign="center">
      {/* <FlexChild> */}
      <Card title="">
        <div className={LoginCss.Logo}>
          <img
            src="https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg"
            id="icon-auth"
            alt="User Icon"
          />
        </div>
        <Tabs
          alignment="horizontal"
          // animate="type1"
          onChange={function noRefCheck(id) {
            setSelectedTab(id);
          }}
          selected={selectedTab}
          value={[
            {
              content: "admin-login",
              id: "Admin",
            },
            {
              content: "user-login",
              id: "User",
            },
          ]}
        ></Tabs>
        {/* <div className={LoginCss.select}> */}

        {/* </div> */}
        <FormElement>
          <Select
            // dropDownheight={200}
            ellipsis
            onChange={function noRefCheck(value) {
              console.log("value", value);
              setSelectedOption(value);
            }}
            value={selectedOption}
            options={[
              {
                label: "Social Ads for Buy with Prime",
                value: "0",
              },
              {
                label: "Testing two",
                value: "1",
              },
              {
                label: "Testing Three",
                value: "2",
              },
            ]}
            placeholder="select"
            popoverContainer="element"
            thickness="thick"
          />
          <TextField
            name="username"
            onChange={(e) => getusername(e)}
            placeHolder="Enter username"
            value={credentials.username}
          />

          {/* <div className={LoginCss.Message}>
              {result ? (
                <span className={LoginCss.messageValid}>valid</span>
              ) : credentials.username === "" ? (
                <span className={LoginCss.messageRequired}>required*</span>
              ) : (
                <span className={LoginCss.messageInvalid}>invalid</span>
              )}
            </div> */}
          <TextField
            name="password"
            type="password"
            onChange={(e) => getpassword(e)}
            placeHolder="Enter password"
            value={credentials.password}
          />
          {/* <div className={LoginCss.Message}>
              {credentials.password.length >= 8 ? (
                <span className={LoginCss.messageValid}>valid</span>
              ) : credentials.password === "" ? (
                <span className={LoginCss.messageRequired}>required*</span>
              ) : (
                <span className={LoginCss.messageInvalid}>invalid</span>
              )}
            </div> */}

          <FlexLayout valign="start" spacing="tight">
            <Button
              content="Login"
              halign="Equal"
              iconAlign="left"
              length="normal"
              onClick={submitHandler}
              thickness="thin"
              type="Primary"
            />
            <Button
              content="Register"
              halign="Equal"
              length="normal"
              onClick={Registration}
              thickness="thin"
              type="Primary"
            />
          </FlexLayout>
        </FormElement>
      </Card>
      {/* </FlexChild> */}
    </FlexLayout>
  );
};

export default Login;
