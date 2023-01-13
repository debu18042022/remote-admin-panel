import { Button, Card, FlexLayout, FormElement, TextField } from "@cedcommerce/ounce-ui";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationCss from "./Registration.module.css";
import { post } from "../../../services/request/Request";

type Auth = {
  name: string;
  username: string;
  phone: number | any;
  email: string;
  domain: string;
  password: string;
};
const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Auth>({
    name: "",
    username: "",
    phone: null,
    email: "",
    domain: "",
    password: "",
  });
  const handleRegister = () => {
    const url = "http://remote.local.cedcommerce.com/user/create";
    const { name, username, phone, email, domain, password } = credentials;

    if (name && username && phone && email && domain && password) {
      const response = post(url, credentials);
      response.then((response) => response.json());
      response.then((response) => {
        if (response.ok) {
          navigate("/login");
        }
      });

      navigate("/login");
    }
  };
  return (
    <FlexLayout halign="center">
      <Card title="Register">
        <div className={RegistrationCss.Logo}>
          <img
            src="https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg"
            id="icon-auth"
            alt="User Icon"
          />
        </div>
        <FormElement>
          <TextField
            name="UserName"
            onChange={(e) => {
              setCredentials({ ...credentials, name: e });
            }}
            placeHolder="UserName"
            type="text"
            value={credentials.name}
          />
          <TextField
            name="Full Name"
            onChange={(e) => {
              setCredentials({ ...credentials, username: e });
            }}
            placeHolder="Full Name"
            type="text"
            value={credentials.username}
          />
          <TextField
            name="Phone"
            onChange={(e) => {
              setCredentials({ ...credentials, phone: e });
            }}
            placeHolder="Phone Number"
            type="number"
            value={credentials.phone}
          />
          <TextField
            name="Email"
            onChange={(e) => {
              setCredentials({ ...credentials, email: e });
            }}
            placeHolder="Email: eg. abc@xyz.com"
            type="email"
            value={credentials.email}
          />
          <TextField
            name="Domain"
            onChange={(e) => {
              setCredentials({ ...credentials, domain: e });
            }}
            placeHolder="Domain: www.xyz.com"
            type="url"
            value={credentials.domain}
          />
          <TextField
            name="Password"
            onChange={(e) => {
              setCredentials({ ...credentials, password: e });
            }}
            placeHolder="Enter Password"
            strength
            type="password"
            value={credentials.password}
          />
          <Button
            content="Register"
            halign="Equal"
            length="normal"
            onClick={handleRegister}
            thickness="thin"
            type="Primary"
          />
        </FormElement>
      </Card>
    </FlexLayout>
  );
};

export default Register;
