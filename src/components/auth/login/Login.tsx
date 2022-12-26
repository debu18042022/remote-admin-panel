import {
  Button,
  Card,
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
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Auth>({
    username: "",
    password: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);
  const getusername = (value: string) => {
    setCredentials({ ...credentials, username: value });
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setResult(expression.test(value));
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
    let url = "http://remote.local.cedcommerce.com/user/login";
    let response;
    if (selectedTab === "Admin") {
      response = post(url, credentials);
    } else {
      url = "http://remote.local.cedcommerce.com/sub-user/login"
      response = post(url, credentials);
    }
    response
      .then((response) => response.json())
      .then((response) => {
        console.log("resData", response);
        if (response.success) {
          sessionStorage.setItem("token", response.data.token);
          navigate("/panel");
        }
      });
  };
  return (
    <div className={LoginCss.container}>
      <div className={LoginCss.card}>
        <Card title="">
          <div className={LoginCss.Logo}>
            <img
              src="https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg"
              id="icon-auth"
              alt="User Icon"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
                height: "50%",
              }}
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
          <div className={LoginCss.select}>
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
          </div>
          <FormElement>
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
            <div style={{ display: "flex", alignItems: "start", gap: "20px" }}>
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
            </div>
          </FormElement>
        </Card>
      </div>
    </div>
  );
};

export default Login;
