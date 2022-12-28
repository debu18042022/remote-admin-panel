import {
  Button,
  Card,
  CheckBox,
  FlexChild,
  FlexLayout,
  Popover,
  Select,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../../services/request/Request";

const AppRegistration = () => {
  const navigate = useNavigate();
  const [webHookOptions, setWebHookOptions] = useState([]);
  const [selectedWebHookOptions, setSelectedWebHookOptions] = useState([]);
  const opt = [
    {
      label: "hours",
      value: "0",
    },
    {
      label: "minutes",
      value: "0",
    },
  ];

  const getAllWebHooks = () => {
    const url = `http://remote.local.cedcommerce.com/webapi/rest/v1/marketplaceswebhooks`;
    const response = get(url);
    response.then((res) => {
      console.log("getAllWebHooks", res);
      if (res.success) {
        setWebHookOptions(res.Webhooks.shopify);
      }
    });
  };
  useEffect(() => {
    getAllWebHooks();
  }, []);

  const getAllSelectedWebHookOptions = (index: number) => {
    const temp = [...selectedWebHookOptions];
    temp.push(webHookOptions[index]);
    console.log(temp);
    setSelectedWebHookOptions(temp);
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
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
            onClick={() => navigate("/panel/apps")}
          />
        </FlexLayout>

        <FlexLayout direction="vertical" spacing="extraLoose">
          <FlexLayout halign="end" desktopWidth="33">
            <Select
              name="MarketPlaces"
              onChange={function noRefCheck() {}}
              options={[
                {
                  group: [
                    {
                      label: "Option 0.1",
                      value: "0.1",
                    },
                    {
                      label: "Option 0.2",
                      value: "0.2",
                    },
                  ],
                  label: "This is your Heading 0",
                  value: "0",
                },
                {
                  group: [
                    {
                      label: "Option 1.1",
                      value: "1.1",
                    },
                    {
                      label: "Option 1.2",
                      value: "1.2",
                    },
                  ],
                  label: "This is your Heading 1",
                  value: "1.0",
                },
                {
                  group: [
                    {
                      label: "Option2",
                      value: "2",
                    },
                    {
                      label: "Option3",
                      value: "3",
                    },
                    {
                      label: "Option4",
                      value: "4",
                    },
                    {
                      label: "Option5",
                      value: "5",
                    },
                    {
                      label: "Option6",
                      value: "6",
                    },
                    {
                      label: "Option7",
                      value: "7",
                    },
                    {
                      label: "Option8",
                      value: "8",
                    },
                  ],
                  label: "Collection Of headings",
                  value: "2.0",
                },
              ]}
              placeholder="Select MarketPlace"
              popoverContainer="body"
              thickness="thick"
            />
          </FlexLayout>
          <hr />

          <FlexLayout>
            <FlexChild desktopWidth="25">
              <Card extraClass="" cardType="Plain">
                <TextStyles
                  content="General details"
                  fontweight="extraBolder"
                />
                <TextStyles
                  content="Enter the default details for your App.."
                  fontweight="light"
                />
              </Card>
            </FlexChild>
            <FlexChild desktopWidth="75">
              <Card>
                <FlexLayout direction="vertical" spacing="loose">
                  <TextField placeHolder="App Name" />
                  <TextField placeHolder="App Location" />
                  <Select placeholder="Select App Status" />
                  <TextField placeHolder="Additional Data (optional)" />
                  <TextField placeHolder="Group Code" />
                  <TextField placeHolder="App Code" />
                  <TextField placeHolder="MarketPlace Handler" />
                  <FlexLayout spacing="loose">
                    <FlexChild desktopWidth="50">
                      <TextField placeHolder="Enter quantity" type="number" />
                    </FlexChild>
                    <FlexChild desktopWidth="50">
                      <Select placeholder="Durations:" options={opt}></Select>
                    </FlexChild>
                  </FlexLayout>
                  <Select placeholder="Webhook"></Select>

                  <FlexLayout spacing="loose">
                    <Popover
                      activator={
                        <Button
                          onClick={function noRefCheck() {}}
                          length="fullBtn"
                          type="Secondary"
                        >
                          Select Webhook
                        </Button>
                      }
                      // dropDownheight={300}
                      onClose={function noRefCheck() {}}
                      popoverContainer="body"
                      popoverWidth={250}
                      open={true}
                    >
                      <FlexLayout direction="vertical" spacing="loose">
                        {webHookOptions &&
                          webHookOptions.map((item: any, index: number) => {
                            return selectedWebHookOptions.length > 0 ? (
                              <CheckBox
                                key={index}
                                // description="Checkbox Descripion"
                                id={item.code}
                                labelVal={item.topic}
                                name="Name"
                                onClick={() =>
                                  getAllSelectedWebHookOptions(index)
                                }
                                checked
                              />
                            ) : (
                              selectedWebHookOptions.map(
                                (i: any, index: number) => {
                                  return // <CheckBox
                                  //   key={index}
                                  //   // description="Checkbox Descripion"
                                  //   id={item.code}
                                  //   labelVal={item.topic}
                                  //   name="Name"
                                  //   onClick={() =>
                                  //     getAllSelectedWebHookOptions(index)
                                  //   }
                                  // />
                                }
                              )
                            );
                          })}
                      </FlexLayout>
                    </Popover>
                  </FlexLayout>
                </FlexLayout>
              </Card>
            </FlexChild>
          </FlexLayout>
          <hr />
          <FlexLayout>
            <FlexChild desktopWidth="25">
              <Card cardType="Plain">
                <TextStyles fontweight="extraBolder" content="App Details" />
                <TextStyles
                  fontweight="light"
                  content="Enter the your App credentials."
                />
              </Card>
            </FlexChild>
            <FlexChild desktopWidth="75">
              <Card>
                <FlexLayout>
                  <FlexChild desktopWidth="33">
                    <TextStyles fontweight="bold" content="app_key" />
                  </FlexChild>
                  <FlexChild desktopWidth="66">
                    <TextField placeHolder="value"></TextField>
                  </FlexChild>
                </FlexLayout>
              </Card>
            </FlexChild>
          </FlexLayout>
          <hr />
          <FlexLayout>
            <FlexChild desktopWidth="25">
              <Card cardType="Plain">
                <TextStyles
                  fontweight="extraBolder"
                  content="Sandbox details"
                />
                <TextStyles
                  fontweight="light"
                  content="Enter the your App Sandbox credentials."
                />
              </Card>
            </FlexChild>
            <FlexChild desktopWidth="75">
              <Card>
                <FlexLayout>
                  <FlexChild desktopWidth="33">
                    <TextStyles fontweight="bold" content="app_key" />
                  </FlexChild>
                  <FlexChild desktopWidth="66">
                    <TextField placeHolder="value"></TextField>
                  </FlexChild>
                </FlexLayout>
              </Card>
            </FlexChild>
          </FlexLayout>
        </FlexLayout>
      </div>
    </div>
  );
};

export default AppRegistration;
