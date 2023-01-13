import {
  Button,
  Card,
  FlexLayout,
  Grid,
  PageHeader,
  Tabs,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { environment } from "../../../../components/auth/environment/Environment";
import { get } from "../../../../services/request/Request";

const GithubManager = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<any>([]);
  const [selected, setSelectedTab] = useState<string>("backend");
  console.log("environment.organization", environment.organization);

  const getAllOrganizations = () => {
    // const url = `https://api.github.com/user/orgs`;
    const url = `https://api.github.com/orgs/${environment.organization}/teams/${environment.team}/teams`;
    console.log(url);
    const response = get(url, {}, "github");
    response.then((resData) => {
      console.log(resData);
      setTeams(resData);
    });
  };

  useEffect(() => {
    getAllOrganizations();
  }, []);

  return (
    <>
      <Tabs
        alignment="horizontal"
        onChange={(id) => {
          setSelectedTab(id);
        }}
        selected={selected}
        value={
          teams &&
          teams?.map((teamItem: any, index: any) => {
            return {
              content: teamItem.name,
              id: teamItem.slug,
            };
          })
        }
      />

      <FlexLayout desktopWidth="100" direction="vertical" spacing="extraLoose">
        <Card title="Team Members">
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
                address: "10 Downing Street",
                age: 32,
                key: "1",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "2",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "3",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "4",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "5",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "6",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "7",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "8",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "9",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "10",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "11",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "12",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "13",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "",
                name: "John",
              },
            ]}
            scrollY={300}
          />
        </Card>
        <Card title="Repositories">
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
                address: "10 Downing Street",
                age: 32,
                key: "1",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "2",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "3",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "4",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "5",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "6",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "7",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "8",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "9",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "10",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "11",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "12",
                name: "John",
              },
              {
                address: "10 Downing Street",
                age: 32,
                key: "13",
                name: "Mike",
              },
              {
                address: "10 Downing Street",
                age: 42,
                key: "",
                name: "John",
              },
            ]}
            scrollY={300}
          />
        </Card>
      </FlexLayout>

      {/* <FlexLayout desktopWidth="100" direction="vertical" spacing="extraLoose">
        {oganizationData &&
          oganizationData.map((org: any, index: number) => {
            return (
              <Card cardType="Shadowed" key={index}>
                <FlexLayout halign="fill" halignTab="fill">
                  <>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      textcolor="dark"
                      type="Heading"
                      utility="none"
                    >
                      {org.login}
                    </TextStyles>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      textcolor="dark"
                      type="Heading"
                      utility="none"
                    >
                      Description:{org.description} this is organization
                    </TextStyles>
                  </>

                  <Button
                    onClick={() =>
                      navigate("/panel/gitub/teams", {
                        state: { organization: org.login },
                      })
                    }
                  >
                    View
                  </Button>
                </FlexLayout>
              </Card>
            );
          })}
      </FlexLayout> */}
    </>
  );
};

export default GithubManager;
