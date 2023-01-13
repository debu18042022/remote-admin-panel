import {
  Button,
  Card,
  CheckBox,
  FlexChild,
  FlexLayout,
  PageHeader,
  Popover,
  Select,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get, put } from "../../../services/request/Request";
import ToastComponent from "../toast/ToastComponent";

type generalDetailsCredentialsI = {
  name: string;
  url: string;
  status: string;
  additional_input: string;
  group_code: string;
  app_code: string;
  marketPlaceHandler: string;
  marketPlace: string;
  app_eraseData: string;
  app_duration: string;
  app_quantity: string;
  webhooks: { code: string; topics: string }[];
  sandbox: {};
  live: {};
};
const AppEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [webHookOptions, setWebHookOptions] = useState<string[]>([]);
  const [popOverActive, setPopOverActive] = useState<boolean>(false);
  const [keysMarketPlace, setKeysMarketPlace] = useState<any>([]);
  const [appDetailsInput, setAppDetailsInput] = useState<any>({});
  const [sandBoxDetailsInput, setSandBoxDetailsInput] = useState<any>({});
  const [generalDetailsCredentials, setGeneralDetailsCredentials] =
    useState<generalDetailsCredentialsI>({
      name: "",
      url: "",
      status: "Under Development",
      additional_input: "",
      group_code: "",
      app_code: "",
      marketPlaceHandler: "",
      marketPlace: "",
      app_eraseData: "",
      app_duration: "",
      app_quantity: "",
      webhooks: [],
      sandbox: {},
      live: {},
    });
  const [toast, setToast] = useState({
    toastMessage: "",
    toastType: "",
    toastActive: false,
  });


  useEffect(() => {
    setGeneralDetailsCredentials({
      ...generalDetailsCredentials,
      live: { ...appDetailsInput },
      sandbox: { ...sandBoxDetailsInput },
    });
  }, [appDetailsInput, sandBoxDetailsInput]);

  const marketPlacesArray: any = {
    shopify: {
      keys: [
        "app_key",
        "app_secret",
        "scope",
        "redirect_uri",
        "rest_ver",
        "graphQL_ver",
        "app_id",
        "group_code",
        "sales_channel",
      ],
      canHaveMore: false,
    },
    cedcommerce: {
      keys: [
        "app_key",
        "app_secret",
        "scope",
        "redirect_uri",
        "rest_ver",
        "graphQL_ver",
        "app_id",
        "group_code",
        "sales_channel",
      ],
      canHaveMore: false,
    },
    meta: {
      keys: ["app_id", "app_secret", "redirect_uri", "scope", "system_token"],
      canHaveMore: false,
    },
    lazada: {
      keys: ["app_key", "app_secret"],
      canHaveMore: false,
    },
    ebay: {
      keys: ["app_key", "app_secret", "dev_id", "runame", "scope"],
      canHaveMore: false,
    },
    etsy: {
      keys: ["consumer_key", "secret_key", "scope"],
      canHaveMore: false,
    },
    amazon: {
      keys: [
        "region",
        "dev_id",
        "access_key",
        "secret_key",
        "clientId",
        "clientSecret",
        "redirect_uri",
        "sp_oauth_url",
        "sp_application_id_sandbox",
        "sp_application_id_production",
        "role_aws_access_key",
        "role_aws_secret_key",
        "role_arn",
      ],
      canHaveMore: false,
    },
    hubspot: {
      keys: [
        "hapi_key",
        "app_id",
        "api_version",
        "client_api",
        "secret_id",
        "redirect_uri",
        "base_url",
      ],
      canHaveMore: false,
    },
    zalando: {
      keys: ["client_secret", "client_id"],
      canHaveMore: false,
    },
    mercado_cbt: {
      keys: ["app_id", "app_secret", "redirect_uri"],
      canHaveMore: false,
    },
    vidaxl: {
      keys: ["default"],
      canHaveMore: false,
    },
    bigcommerce: {
      keys: [
        "app_key",
        "app_secret",
        "scope",
        "redirect_uri",
        "app_id",
        "group_code",
        "sales_channel",
        "base_url",
      ],
      canHaveMore: false,
    },
    onyx: {
      keys: [
        "client_id",
        "client_secret",
        "scope",
        "redirect_uri",
        "group_code",
      ],
    },
    plivo: {
      keys: ["auth_id", "auth_token", "mobile_No"],
    },
    arise: {
      keys: ["app_key", "app_secret", "base_url", "redirect_uri"],
      canHaveMore: false,
    },
    magento: {
      keys: ["redirect_uri"],
      canHaveMore: false,
    },
    woocommerce: {
      keys: ["redirect_uri"],
      canHaveMore: false,
    },
    prestashop: {
      keys: ["redirect_uri"],
      canHaveMore: false,
    },
    zoho: {
      keys: [
        "app_id",
        "app_key",
        "app_secret",
        "scope",
        "redirect_uri",
        "group_code",
        "base_url_in",
        "base_url_us",
        "base_url_eu",
        "base_url_jp",
        "base_url_au",
      ],
      canHaveMore: false,
    },
    walmart: {
      keys: ["redirect_uri", "base_url"],
      canHaveMore: false,
    },
    freshdesk: {
      keys: [
        "api_key",
        "freshdesk_domain",
        "freshsales_token",
        "freshsales_domain",
        "redirect_uri",
        "lost_stage_id",
        "new_stage_id",
        "secret_key",
      ],
      canHaveMore: false,
    },
    twitter: {
      keys: [
        "client_id",
        "client_secret",
        "scope",
        "redirect_uri",
        "response_type",
        "code_challenge",
        "code_challenge_method",
        "app_key",
        "app_secret",
        "access_token",
        "access_token_secret",
      ],
      canHaveMore: false,
    },
  };

  const statusArray: any = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
    { label: "Under Development", value: "Under Development" },
  ];

  // array for time unit array
  const timeUnitArray: any = [
    { label: "Hours", value: "hours" },
    { label: "Minutes", value: "minutes" },
  ];

  const dropDown = () => {
    const keys: any[] = [];
    Object.keys(marketPlacesArray).forEach((e) => {
      keys.push({ label: e, value: e });
    });
    setKeysMarketPlace(keys);
  };

  useEffect(() => {
    const url = `http://remote.local.cedcommerce.com/webapi/rest/v1/apps`;
    const payload = { id: location?.state?.id };
    const response = get(url, payload);
    response.then((res) => {
      if (res.success) {
        handleMarketPlaceChange(res.data.marketPlace);
        setAppDetailsInput({ ...res.data.live });
        setSandBoxDetailsInput({ ...res.data.sandbox });
        setGeneralDetailsCredentials({ ...res.data });
      }
    });

    dropDown();
  }, []);


  const handleMarketPlaceChange = (val: string) => {
    setGeneralDetailsCredentials({
      ...generalDetailsCredentials,
      marketPlace: val,
    });
    let temp: any = { ...appDetailsInput };
    Object.keys(marketPlacesArray).forEach((e: string) => {
      if (val === e) {
        Object.keys(marketPlacesArray[e]).forEach((item: any) => {
          if (marketPlacesArray[e][item].length > 1) {
            marketPlacesArray[e][item].map((i: any) => {
              temp = { ...temp, [i]: "" };
            });
          }
        });
      }
    });
    temp = { ...temp };
    setAppDetailsInput({ ...appDetailsInput, ...temp });
    setSandBoxDetailsInput({ ...sandBoxDetailsInput, ...temp });
  };

  const getAllWebHooks = () => {
    const url = `http://remote.local.cedcommerce.com/webapi/rest/v1/marketplaceswebhooks`;
    const response = get(url);
    response.then((res) => {
      if (res.success) {
        setWebHookOptions(res.Webhooks.shopify);

        let webHooksArray = [...res.Webhooks.shopify];
        webHooksArray.forEach((object: any) => {
          object["checked"] = false;
        });
        setWebHookOptions(webHooksArray);
      }
    });
  };

  useEffect(() => {
    getAllWebHooks();
  }, []);

  const getAllSelectedWebHookOptions = (checkedIndex: number) => {
    const temp: any = [...webHookOptions];
    let selectedTemp: any = [];
    temp &&
      temp.map((obj: any, indx: number) => {
        if (checkedIndex === indx) obj.checked = !obj.checked;
        if (obj.checked === true) {
          selectedTemp.push({ topic: obj.topic, code: obj.code });
        }
      });
    setWebHookOptions(temp);
    setGeneralDetailsCredentials({
      ...generalDetailsCredentials,
      webhooks: [...selectedTemp],
    });
  };

  const save = () => {
    const url = `http://remote.local.cedcommerce.com/webapi/rest/v1/apps`;
    const payload = generalDetailsCredentials;
    const response = put(url, payload);
    response.then((res) => {
      if (res.success) {
        setToast({ ...toast, toastMessage: res.message, toastActive: true });
      }
    });
    // clear the states value
    setGeneralDetailsCredentials({
      name: "",
      url: "",
      status: "",
      additional_input: "",
      group_code: "",
      app_code: "",
      marketPlaceHandler: "",
      marketPlace: "",
      app_eraseData: "",
      app_duration: "",
      app_quantity: "",
      webhooks: [],
      sandbox: {},
      live: {},
    });
  };

  const handleToast = () => {
    setToast({ ...toast, toastActive: false });
  };

  return (
    <>
      <ToastComponent toast={toast} handleToast={handleToast} />
      <PageHeader
        action={
          <FlexLayout spacing="tight">
            <Button content="save" type="Outlined" onClick={save} />
            <Button
              content="Back"
              type="Primary"
              onClick={() => navigate("/panel/apps")}
            />
          </FlexLayout>
        }
        title="Edit App"
      />

      <FlexLayout desktopWidth="100" direction="vertical" spacing="extraLoose">
        <FlexLayout
          halign="end"
          desktopWidth="25"
          tabWidth="25"
          mobileWidth="50"
        >
          <Select
            disabled
            onChange={(e) => {
              handleMarketPlaceChange(e);
            }}
            options={keysMarketPlace}
            placeholder="Select MarketPlace"
            popoverContainer="body"
            thickness="thick"
            value={generalDetailsCredentials.marketPlace}
          />
        </FlexLayout>
        <FlexLayout>
          <FlexChild desktopWidth="25" tabWidth="25" mobileWidth="100">
            <Card extraClass="" cardType="Plain">
              <TextStyles content="General details" fontweight="extraBolder" />
              <TextStyles
                content="Enter the default details for your App.."
                fontweight="light"
              />
            </Card>
          </FlexChild>
          <FlexChild desktopWidth="75" tabWidth="75" mobileWidth="100">
            <Card cardType="Shadowed">
              <FlexLayout direction="vertical" spacing="loose">
                <TextField
                  placeHolder="App Name"
                  value={generalDetailsCredentials.name}
                  onChange={(e) => {
                    setGeneralDetailsCredentials({
                      ...generalDetailsCredentials,
                      name: e,
                    });
                  }}
                />
                <TextField
                  placeHolder="App Location"
                  value={generalDetailsCredentials.url}
                  onChange={(e) => {
                    setGeneralDetailsCredentials({
                      ...generalDetailsCredentials,
                      url: e,
                    });
                  }}
                />
                <Select
                  placeholder="Select App Status"
                  options={statusArray}
                  value={generalDetailsCredentials.status}
                  onChange={(e) => {
                    setGeneralDetailsCredentials({
                      ...generalDetailsCredentials,
                      status: e,
                    });
                  }}
                />
                <TextField
                  placeHolder="Additional Data (optional)"
                  value={generalDetailsCredentials.additional_input}
                  onChange={(e) => {
                    setGeneralDetailsCredentials({
                      ...generalDetailsCredentials,
                      additional_input: e,
                    });
                  }}
                />
                <TextField
                  placeHolder="Group Code"
                  value={generalDetailsCredentials.group_code}
                  onChange={(e) => {
                    setGeneralDetailsCredentials({
                      ...generalDetailsCredentials,
                      group_code: e,
                    });
                  }}
                />
                <TextField
                  placeHolder="App Code"
                  value={generalDetailsCredentials.app_code}
                  onChange={(e) => {
                    setGeneralDetailsCredentials({
                      ...generalDetailsCredentials,
                      app_code: e,
                    });
                  }}
                />
                <TextField
                  placeHolder="MarketPlace Handler"
                  value={generalDetailsCredentials.marketPlaceHandler}
                  onChange={(e) => {
                    setGeneralDetailsCredentials({
                      ...generalDetailsCredentials,
                      marketPlaceHandler: e,
                    });
                  }}
                />

                <FlexLayout spacing="extraTight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <TextField
                      placeHolder="Enter quantity"
                      type="number"
                      value={generalDetailsCredentials.app_quantity}
                      onChange={(e) => {
                        setGeneralDetailsCredentials({
                          ...generalDetailsCredentials,
                          app_quantity: e,
                        });
                      }}
                    />
                  </FlexChild>
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Select
                      placeholder="Durations:"
                      options={timeUnitArray}
                      value={generalDetailsCredentials.app_duration}
                      onChange={(e) => {
                        setGeneralDetailsCredentials({
                          ...generalDetailsCredentials,
                          app_duration: e,
                        });
                      }}
                    ></Select>
                  </FlexChild>
                </FlexLayout>
                <FlexLayout spacing="loose">
                  {generalDetailsCredentials.marketPlace === "shopify" ? (
                    <Popover
                      activator={
                        <Button
                          onClick={() => {
                            setPopOverActive(!popOverActive);
                          }}
                          length="fullBtn"
                          type="Secondary"
                        >
                          Select Webhook
                        </Button>
                      }
                      onClose={function noRefCheck() {}}
                      popoverContainer="body"
                      popoverWidth={250}
                      open={popOverActive}
                    >
                      <FlexLayout direction="vertical" spacing="loose">
                        {webHookOptions &&
                          webHookOptions.map((item: any, index: number) => {
                            return (
                              <CheckBox
                                key={index}
                                id={item.code}
                                labelVal={item.topic}
                                name="Name"
                                onClick={() =>
                                  getAllSelectedWebHookOptions(index)
                                }
                                checked={item.checked}
                              />
                            );
                          })}
                      </FlexLayout>
                    </Popover>
                  ) : null}
                </FlexLayout>
              </FlexLayout>
            </Card>
          </FlexChild>
        </FlexLayout>
        <FlexLayout>
          <FlexChild desktopWidth="25" tabWidth="25" mobileWidth="100">
            <Card cardType="Plain">
              <TextStyles fontweight="extraBolder" content="App Details" />
              <TextStyles
                fontweight="light"
                content="Enter the your App credentials."
              />
            </Card>
          </FlexChild>
          <FlexChild desktopWidth="75" tabWidth="75" mobileWidth="100">
            <Card cardType="Shadowed">
              <FlexLayout direction="vertical" spacing="loose">
                {Object.keys(appDetailsInput).map((item, index) => {
                  return (
                    <>
                      <FlexLayout spacing="extraTight" key={index}>
                        <FlexChild
                          desktopWidth="25"
                          tabWidth="25"
                          mobileWidth="25"
                        >
                          <TextStyles fontweight="bold" content={item} />
                        </FlexChild>
                        <FlexChild
                          desktopWidth="75"
                          tabWidth="75"
                          mobileWidth="75"
                        >
                          <TextField
                            placeHolder="value"
                            type="text"
                            value={appDetailsInput[item]}
                            onChange={(e) => {
                              setAppDetailsInput({
                                ...appDetailsInput,
                                [item]: e,
                              });
                            }}
                          />
                        </FlexChild>
                      </FlexLayout>
                    </>
                  );
                })}
              </FlexLayout>
            </Card>
          </FlexChild>
        </FlexLayout>
        <FlexLayout>
          <FlexChild desktopWidth="25" tabWidth="25" mobileWidth="100">
            <Card cardType="Plain">
              <TextStyles fontweight="extraBolder" content="Sandbox details" />
              <TextStyles
                fontweight="light"
                content="Enter the your App Sandbox credentials."
              />
            </Card>
          </FlexChild>
          <FlexChild desktopWidth="75" tabWidth="75" mobileWidth="100">
            <Card cardType="Shadowed">
              <FlexLayout direction="vertical" spacing="loose">
                {Object.keys(sandBoxDetailsInput).map(
                  (item: any, index: any) => {
                    return (
                      <FlexLayout spacing="extraTight" key={index}>
                        <FlexChild
                          desktopWidth="25"
                          tabWidth="25"
                          mobileWidth="25"
                        >
                          <TextStyles fontweight="bold" content={item} />
                        </FlexChild>
                        <FlexChild
                          desktopWidth="75"
                          tabWidth="75"
                          mobileWidth="75"
                        >
                          <TextField
                            placeHolder="value"
                            type="text"
                            value={sandBoxDetailsInput[item]}
                            onChange={(e) => {
                              setSandBoxDetailsInput({
                                ...sandBoxDetailsInput,
                                [item]: e,
                              });
                            }}
                          />
                        </FlexChild>
                      </FlexLayout>
                    );
                  }
                )}
              </FlexLayout>
            </Card>
          </FlexChild>
        </FlexLayout>
      </FlexLayout>
    </>
  );
};

export default AppEdit;
