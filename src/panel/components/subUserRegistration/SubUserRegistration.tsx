import {
  Button,
  Card,
  CheckBox,
  FlexChild,
  FlexLayout,
  Grid,
  PageHeader,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../../services/request/Request";
// import {AiFillCheckSquare} from
const SubUserRegistration = () => {
  const navigate = useNavigate();
  const [textFieldDisabled, setTextFieldDisabled] = useState<boolean>(false);
  const appTableHeading = [
    {
      dataIndex: "add",
      title: "Add",
    },
    {
      dataIndex: "app_name",
      title: "App Name",
    },
    {
      dataIndex: "marketplace",
      title: "Marketplace",
    },
    {
      dataIndex: "auth_url",
      title: "Auth Url",
    },
    {
      dataIndex: "domain",

      title: "domain",
    },
    {
      dataIndex: "frontend_url",
      title: "Frontend Url",
    },
    {
      dataIndex: "status",
      title: "Status",
    },
  ];
  const [urls, setUrls] = useState({
    authUrl: "",
    domain: "",
    frontendUrl: "",
  });

  const [resourcesAray, setResourcesArray] = useState({
    coreModule: [],
    shopifyWebApiModule: [],
    webapiModule: [],
    coneectorModule: [],
    apiConnectModule: [],
  });

  useEffect(() => {
    const url = `http://remote.local.cedcommerce.com/acl-group/getRoleResource`;
    const payload = { group_code: "admin" };
    const response = get(url, payload);
    response.then((res) => {
      // console.log(res);
      // console.log(res.data.resources);
      const obj: any = {};
      res.data.resources.map((objectdata: any) => {
        // const objectdata = res.data.resources[0];
        // console.log(objectdata, "data");

        // const person = {
        //   first_name: "Sam",
        //   last_name: "Bradley",
        // };
        const mod = objectdata.module;
        // const data = Object.keys(obj).includes(objectdata.module);
        const data = objectdata.hasOwnProperty(objectdata.module);

        if (data) {
        } else {
          obj[mod] = {};
        }
      });
      console.log(obj, "ooooo");
    });
  });

  return (
    <>
      <PageHeader
        action={
          <FlexLayout spacing="tight">
            <Button
              content="save"
              type="Outlined"
              // onClick={}
            />
            <Button
              content="Back"
              type="Primary"
              onClick={() => navigate("/panel/subusers")}
            />
          </FlexLayout>
        }
        title="Create User"
      />
      <FlexLayout direction="vertical" spacing="extraLoose">
        {/* <FlexLayout halign="fill">
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
            </FlexLayout> */}
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
            <Grid
              columns={
                appTableHeading &&
                appTableHeading.map((item) => {
                  return {
                    align: "left",
                    dataIndex: item.dataIndex,
                    key: item.dataIndex,
                    title: item.title,
                    width: 100,
                  };
                })
              }
              dataSource={[
                {
                  status: "",
                  frontend_url: (
                    <TextField
                      placeHolder="Enter The Frontend Url"
                      disabled={!textFieldDisabled}
                      value={urls.frontendUrl}
                      onChange={(e) => {
                        setUrls({ ...urls, frontendUrl: e });
                      }}
                    />
                  ),
                  domain: (
                    <TextField
                      placeHolder="Enter The Domain"
                      disabled={!textFieldDisabled}
                      value={urls.domain}
                      onChange={(e) => {
                        setUrls({ ...urls, domain: e });
                      }}
                    />
                  ),
                  auth_url: (
                    <TextField
                      placeHolder="Enter The Auth Url"
                      disabled={!textFieldDisabled}
                      value={urls.authUrl}
                      onChange={(e) => {
                        setUrls({ ...urls, authUrl: e });
                      }}
                    />
                  ),
                  marketplace: "",
                  app_name: "lazada app",
                  add: (
                    <CheckBox
                      key=""
                      // description="Checkbox Descripion"
                      id={""}
                      labelVal={""}
                      name="Name"
                      onClick={() => {
                        setTextFieldDisabled(!textFieldDisabled);
                        setUrls({
                          ...urls,
                          domain: "",
                          frontendUrl: "",
                          authUrl: "",
                        });
                      }}
                      checked={textFieldDisabled}
                    />
                  ),
                },
              ]}
            />

            <Grid
              columns={[
                {
                  align: "center",
                  dataIndex: "name",
                  key: "name",
                  title: "Name",
                  width: 100,
                },
                {
                  align: "center",
                  dataIndex: "age",
                  key: "age",
                  title: "Age",
                  width: 100,
                },
                {
                  align: "center",
                  dataIndex: "address",
                  key: "address",
                  title: "Address",
                  width: 100,
                },
              ]}
              dataSource={[
                {
                  address: "New York No. 1 Lake Park",
                  age: 60,
                  children: [
                    {
                      address: "New York No. 2 Lake Park",
                      age: 42,
                      key: 11,
                      name: "John Brown",
                    },
                    {
                      address: "New York No. 3 Lake Park",
                      age: 30,
                      children: [
                        {
                          address: "New York No. 3 Lake Park",
                          age: 16,
                          key: 121,
                          name: "Jimmy Brown",
                        },
                      ],
                      key: 12,
                      name: "John Brown jr.",
                    },
                    {
                      address: "London No. 1 Lake Park",
                      age: 72,
                      children: [
                        {
                          address: "London No. 2 Lake Park",
                          age: 42,
                          children: [
                            {
                              address: "London No. 3 Lake Park",
                              age: 25,
                              key: 1311,
                              name: "Jim Green jr.",
                            },
                            {
                              address: "London No. 4 Lake Park",
                              age: 18,
                              key: 1312,
                              name: "Jimmy Green sr.",
                            },
                          ],
                          key: 131,
                          name: "Jim Green",
                        },
                      ],
                      key: 13,
                      name: "Jim Green sr.",
                    },
                  ],
                  key: 1,
                  name: "John Brown sr.",
                },
                {
                  address: "Sidney No. 1 Lake Park",
                  age: 32,
                  key: 2,
                  name: "Joe Black",
                  // children: [
                  //   {
                  //     address: "New York No. 2 Lake Park",
                  //     age: 42,
                  //     key: 11,
                  //     name: "John Brown",
                  //   },
                  //   {
                  //     address: "New York No. 3 Lake Park",
                  //     age: 30,
                  //     children: [
                  //       {
                  //         address: "New York No. 3 Lake Park",
                  //         age: 16,
                  //         key: 121,
                  //         name: "Jimmy Brown",
                  //       },
                  //     ],
                  //     key: 12,
                  //     name: "John Brown jr.",
                  //   },
                  //   {
                  //     address: "London No. 1 Lake Park",
                  //     age: 72,
                  //     children: [
                  //       {
                  //         address: "London No. 2 Lake Park",
                  //         age: 42,
                  //         children: [
                  //           {
                  //             address: "London No. 3 Lake Park",
                  //             age: 25,
                  //             key: 1311,
                  //             name: "Jim Green jr.",
                  //           },
                  //           {
                  //             address: "London No. 4 Lake Park",
                  //             age: 18,
                  //             key: 1312,
                  //             name: "Jimmy Green sr.",
                  //           },
                  //         ],
                  //         key: 131,
                  //         name: "Jim Green",
                  //       },
                  //     ],
                  //     key: 13,
                  //     name: "Jim Green sr.",
                  //   },
                  // ],
                },
              ]}
            />
          </FlexLayout>
        </Card>
      </FlexLayout>
    </>
  );
};

export default SubUserRegistration;
