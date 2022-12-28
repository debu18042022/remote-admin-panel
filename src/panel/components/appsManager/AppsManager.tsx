import {
  Badge,
  Button,
  Card,
  FlexLayout,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../../../App";
import { deleteRequest, get } from "../../../services/request/Request";
import AppsManagerCss from "./AppsManager.module.css";

const AppsManager = () => {
  const navigate = useNavigate();
  const [appsData, setAppsData] = useState<any>();
  const getAllApps = () => {
    const url = "http://remote.local.cedcommerce.com/webapi/rest/v1/apps";
    const response = get(url);
    response.then((res) => {
      console.log("res", res);
      if (res.success) {
        setAppsData(res);
      }
    });
  };
  useEffect(() => {
    getAllApps();
  }, []);

  const removeApp = (appID: number) => {
    const removingAppId = { id: appID };
    const url = `http://remote.local.cedcommerce.com/webapi/rest/v1/apps`;
    const response = deleteRequest(url, removingAppId);
    response.then((response) => {
      console.log("res delete", response);
      if (response.success) {
        getAllApps();
      }
    });
  };

  const createNewApp = () => {
    navigate("/panel/apps/registration");
  };

  console.log("appsData", appsData);
  return (
    <div>
      <div className={AppsManagerCss.appContainer}>
        <div className={AppsManagerCss.appInnerContainer}>

          <FlexLayout halign="fill">
            <TextStyles
              alignment="left"
              fontweight="extraBolder"
              textcolor="dark"
              type="SubHeading"
              utility="none"
            >
              Apps
            </TextStyles>
            <Button
              content="Create New App"
              type="Primary"
              onClick={createNewApp}
            />
          </FlexLayout>

          <ul className={AppsManagerCss.cardList}>
            {appsData &&
              appsData.data.map((item: any, index: number) => {
                return (
                  <li key={index} className={AppsManagerCss.cardList__item}>
                    <Card>
                      <div className={AppsManagerCss.cardList__itemTitle}>
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
                              Under Development
                            </Badge>
                          </div>
                          <FlexLayout halign="fill" spacing="tight">
                            <Button
                              content="edit"
                              // icon={<Home color="#ffffff" size={20} />}
                              iconAlign="left"
                              type="Outlined"
                            />
                            <Button
                              content="delete"
                              // icon={<Home color="#ffffff" size={20} />}
                              iconAlign="right"
                              type="Outlined"
                              onClick={() => removeApp(item.id)}
                            />
                          </FlexLayout>
                        </FlexLayout>
                      </div>
                      <hr />
                      <div>
                        <TextStyles
                          alignment="left"
                          fontweight="bold"
                          textcolor="dark"
                          type="SubHeading"
                          utility="none"
                        >
                          App Id : N/A
                        </TextStyles>
                      </div>
                      <hr />
                      <div>
                        <TextStyles
                          alignment="left"
                          fontweight="bold"
                          textcolor="dark"
                          type="SubHeading"
                          utility="none"
                        >
                          About :
                        </TextStyles>
                      </div>
                      <hr />
                    </Card>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppsManager;
