import {
  Badge,
  Button,
  Card,
  FlexLayout,
  PageHeader,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRequest, get } from "../../../services/request/Request";

const AppsManager = () => {
  const navigate = useNavigate();
  const [appsData, setAppsData] = useState<any>();
  const getAllApps = () => {
    const url = "http://remote.local.cedcommerce.com/webapi/rest/v1/apps";
    const response = get(url);
    response.then((res) => {
      if (res.success) {
        setAppsData(res);
      }
    });
  };
  useEffect(() => {
    getAllApps();
  }, []);

  const removeApp = (ID: any) => {
    const removingAppId = { id: ID };
    const url = `http://remote.local.cedcommerce.com/webapi/rest/v1/apps`;
    const response = deleteRequest(url, removingAppId);
    response.then((response) => {
      if (response.success) {
        getAllApps();
      }
    });
  };

  const createNewApp = () => {
    navigate("/panel/apps/registration");
  };

  const Edit = (app_id: number) => {
    navigate("/panel/apps/edit", { state: { id: app_id } });
  };
  return (
    <>
      <PageHeader
        action={
          <Button
            content="Create New App"
            type="Primary"
            onClick={createNewApp}
          />
        }
        title=" Apps"
      />
      {appsData &&
        appsData.data.map((item: any, index: number) => {
          return (
            <Card cardType="Shadowed">
              <FlexLayout halign="fill">
                <div>
                  <TextStyles
                    alignment="left"
                    fontweight="bold"
                    textcolor="dark"
                    type="Heading"
                    utility="none"
                  >
                    {item.name}
                  </TextStyles>
                  <Badge
                    helpText="Tooltip Help Text"
                    position="bottom"
                    size="small"
                    type="Neutral-200"
                  >
                    {item.status}
                  </Badge>
                </div>
                <FlexLayout halign="fill" spacing="tight">
                  <Button
                    content="edit"
                    icon=""
                    iconAlign="left"
                    type="Outlined"
                    onClick={() => {
                      Edit(item._id);
                    }}
                  />
                  <Button
                    content="delete"
                    iconAlign="right"
                    type="Outlined"
                    onClick={() => removeApp(item.id)}
                  />
                </FlexLayout>
              </FlexLayout>
              <hr />
              <TextStyles
                alignment="left"
                fontweight="bold"
                textcolor="dark"
                type="SubHeading"
                utility="none"
              >
                App Id : N/A
              </TextStyles>
              <hr />
              <TextStyles
                alignment="left"
                fontweight="bold"
                textcolor="dark"
                type="SubHeading"
                utility="none"
              >
                About :
              </TextStyles>
              <hr />
            </Card>
          );
        })}
    </>
  );
};

export default AppsManager;
