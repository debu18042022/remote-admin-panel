import {
  Button,
  Card,
  FlexLayout,
  PageHeader,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../../../../services/request/Request";

const GithubTeams = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [teamsData, setTeamsData] = useState<any>([]);
  console.log("organization", location?.state?.organization);

  const getTeams = () => {
    const url = `https://api.github.com/orgs/${location?.state?.organization}/teams`;
    console.log(url);
    const payload = { per_page: 30, page: 1 };
    const response = get(url, payload, "github");
    response.then((resData: any) => {
      console.log(resData);
      setTeamsData(resData);
    });
  };

  useEffect(() => {
    getTeams();
  }, []);

  const getSelectedTeamsData = () => {
    // const url = `https://api.github.com/orgs/${location?.state?.organization}/teams`;
    const url = `https://api.github.com/organizations/location?.state?.organization/team/fd/repos`;
    console.log(url);
    const payload = { per_page: 30, page: 1 };
    const response = get(url, payload, "github");
    response.then((resData: any) => {
      console.log(resData);
      setTeamsData(resData);
    });
  };

  return (
    <>
      <PageHeader
        action={
          <Button
            content="Back"
            type="Primary"
            onClick={() => {
              navigate("/panel/githubManager");
            }}
          />
        }
        title={location?.state?.organization + "/" + "Teams"}
      />
      <FlexLayout desktopWidth="100" direction="vertical" spacing="extraLoose">
        {teamsData &&
          teamsData.map((org: any, index: number) => {
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
                      {org.name}
                    </TextStyles>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      textcolor="dark"
                      type="Heading"
                      utility="none"
                    >
                      {/* Description:{org.description} this is organization */}
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
      </FlexLayout>
    </>
  );
};

export default GithubTeams;
