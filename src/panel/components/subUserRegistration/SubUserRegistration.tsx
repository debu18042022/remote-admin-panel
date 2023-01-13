import {
  Button,
  Card,
  CheckBox,
  FlexLayout,
  Grid,
  PageHeader,
  TextField,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../../services/request/Request";
const SubUserRegistration = () => {
  const [aclData, setAclData] = useState<any>({});
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

  useEffect(() => {
    const url = `http://remote.local.cedcommerce.com/acl-group/getRoleResource`;
    const payload = { group_code: "admin" };
    const response = get(url, payload);
    response.then((res) => {
      const obj: any = {};
      const data = res.data.resources;
      data.map((objectdata: any) => {
        const action = objectdata.action;
        const moduleResult = obj.hasOwnProperty(objectdata.module);
        if (moduleResult) {
          const controllerResult = obj[objectdata.module].hasOwnProperty(
            objectdata.controller
          );
          if (controllerResult) {
          } else {
            obj[objectdata.module][objectdata.controller] = [];
          }
        } else {
          obj[objectdata.module] = {};
        }
      });
      data.map((item: any) => {
        const modresult = obj.hasOwnProperty(item.module);
        if (modresult) {
          const contrresult = obj[item.module].hasOwnProperty(item.controller);
          if (contrresult) {
            obj[item.module][item.controller].push(item.action);
          }
        }
      });
      setAclData(obj);
    });
  }, []);
  console.log("aclData------>>>>>>", aclData);
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
              autocomplete="off"
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
                  // align: "center",
                  dataIndex: "name",
                  key: "name",
                  // title: "Name",
                  // width: 100,
                },
              ]}
              dataSource={
                aclData &&
                Object.keys(aclData).map((modulee: any, index: any) => {
                  return {
                    key: modulee,
                    children: Object.keys(aclData[modulee]).map(
                      (controllerr: any, ind: any) => {
                        return {
                          key: controllerr,
                          children: Object.keys(
                            aclData[modulee][controllerr]
                          ).map((actionn: any, i: any) => {
                            return {
                              key: aclData[modulee][controllerr][actionn],
                              name: aclData[modulee][controllerr][actionn],
                            };
                          }),

                          name: controllerr,
                        };
                      }
                    ),
                    name: modulee,
                  };
                })
              }
              rowSelection={{
                onChange: function noRefCheck() {},
              }}
            />
          </FlexLayout>
        </Card>
      </FlexLayout>
    </>
  );
};

export default SubUserRegistration;
