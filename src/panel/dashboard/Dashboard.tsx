import {
  Badge,
  Button,
  Card,
  FlexLayout,
  FormElement,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React from "react";
import AsideComponent from "../components/asideBar/AsideBar";
import Navbar from "../components/navbar/Navbar";
import DashboardCss from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="DashboardCss.wrapper" style={{border:"1px solid black"}}>
        {/* <AsideComponent /> */}
        <div className={DashboardCss.container}>
          <div className={DashboardCss.createNewApp}>
            <TextStyles
              alignment="left"
              fontweight="bold"
              textcolor="dark"
              type="SubHeading"
              utility="none"
            >
              Apps
            </TextStyles>
            <Button content="Create New App" type="Primary" />
          </div>
          <div className={DashboardCss.card}>
            <div className={DashboardCss.card_item}>
              <Card>
                <div className={DashboardCss.cardTitle}>
                  <div>
                    <TextStyles
                      alignment="left"
                      fontweight="bold"
                      textcolor="dark"
                      type="Heading"
                      utility="none"
                    >
                      BWP
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
                  <div>
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
                    />
                  </div>
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
            </div>
            <div className={DashboardCss.card_item}>
              <Card>
                <div className={DashboardCss.cardTitle}>
                  <div>
                    <TextStyles
                      alignment="left"
                      fontweight="bold"
                      textcolor="dark"
                      type="Heading"
                      utility="none"
                    >
                      BWP
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
                  <div>
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
                    />
                  </div>
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
            </div>
            <div className={DashboardCss.card_item}>
              <Card>
                <div className={DashboardCss.cardTitle}>
                  <div>
                    <TextStyles
                      alignment="left"
                      fontweight="bold"
                      textcolor="dark"
                      type="Heading"
                      utility="none"
                    >
                      BWP
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
                  <div>
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
                    />
                  </div>
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
            </div>
            <div className={DashboardCss.card_item}>
              <Card>
                <div className={DashboardCss.cardTitle}>
                  <div>
                    <TextStyles
                      alignment="left"
                      fontweight="bold"
                      textcolor="dark"
                      type="Heading"
                      utility="none"
                    >
                      BWP
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
                  <div>
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
                    />
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
