import {
  Button,
  Card,
  FlexLayout,
  Grid,
  Loader,
  PageHeader,
  Tabs,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { environment } from "../../../../components/auth/environment/Environment";
import { get } from "../../../../services/request/Request";

type teamsI = {
  members: string[];
};

const GithubManager = () => {
  const navigate = useNavigate();
  const [teamsInfo, setTeamsInfo] = useState<teamsI>({
    members: [],
  });
  const [team, setTeams] = useState([]);
  const [repos, setRepos] = useState([]);
  const [selectedTab, setSelectedTab] = useState<string>("");
  const [flag, setFlag] = useState<number>(0);

  const teamMembersColumn = [
    {
      dataIndex: "name",
      key: "name",
      title: "Name",
    },
    {
      dataIndex: "url",
      key: "url",
      title: "Gitgub Account URL",
    },
    {
      dataIndex: "action",
      key: "action",
      title: "Team Access Level",
    },
  ];

  const teamsRepositories = [
    {
      align: "left",
      dataIndex: "name",
      key: "name",
      title: "Name",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "repo_url",
      key: "url",
      title: "Github Repo URL",
      width: 100,
    },
    {
      align: "center",
      dataIndex: "role",
      key: "role",
      title: "Repository Access Level",
      width: 100,
    },
  ];

  useEffect(() => {
    getAllTeams();
  }, []);

  const getAllTeams = () => {
    const url = `https://api.github.com/orgs/${environment.organization}/teams/${environment.team}/teams`;
    const response = get(url, {}, "github");
    response.then((resData) => {
      console.log("teams----->", resData);
      const id: string = resData[0].slug;
      setSelectedTab(id);
      setTeams(resData);
      tabHandle(resData[0].slug);
    });
  };

  const tabHandle = (id: string) => {
    setSelectedTab(id);
    getAllmembers(id);
    getRepositories(id);
  };

  const getAllmembers = (id: string) => {
    const url = `https://api.github.com/orgs/${environment.organization}/teams/${id}/members`;
    const response = get(url, {}, "github");
    response.then((resData) => {
      console.log("members----->", resData);
      let count = 0;
      let temp = resData;
      temp = resData;
      temp.forEach((obj: any) => {
        obj["membership"] = "";
        obj["view"] = false;
        count += 1;
      });
      setTeamsInfo({ ...teamsInfo, members: temp });
      // alert(count);
      setFlag(count);
    });
  };

  const getRepositories = (id: string) => {
    const url = `https://api.github.com/orgs/${environment.organization}/teams/${id}/repos`;
    const response = get(url, {}, "github");
    response.then((resData) => {
      console.log("repositories----->", resData);
      setRepos(resData);
    });
  };

  const viewMemberShip = (name: string, index: number) => {
    const url = `https://api.github.com/orgs/${environment.organization}/teams/${selectedTab}/memberships/${name}`;
    const response = get(url, {}, "github");
    response.then((resData) => {
      console.log("MemberShip----->", resData);
      const temp: any[] = [...teamsInfo.members];
      temp[index].membership = resData.role;
      temp[index].view = true;
      setTeamsInfo({ ...teamsInfo, members: temp });
    });
  };

  return (
    <>
      <PageHeader
        action={
          <Button content="Back" onClick={() => navigate("/panel/apps")} />
        }
      />
      {team && (
        <Tabs
          alignment="horizontal"
          onChange={tabHandle}
          selected={selectedTab}
          value={team?.map((teamItem: any, index: number) => {
            return {
              content: teamItem.name,
              id: teamItem.slug,
            };
          })}
        />
      )}
      {repos.length === 0 ? (
        <Loader type="Loader2"/>
      ) : (
        <FlexLayout
          desktopWidth="100"
          tabWidth="100"
          mobileWidth="100"
          direction="vertical"
          spacing="extraLoose"
        >
          <Card title="Team Members">
            <Grid
              columns={teamMembersColumn.map((obj) => {
                return {
                  align: "left",
                  dataIndex: obj.dataIndex,
                  key: obj.key,
                  title: obj.title,
                  width: 100,
                };
              })}
              dataSource={
                teamsInfo.members &&
                teamsInfo.members?.map((membr: any, index: number) => {
                  return membr.view
                    ? {
                        name: membr.login,
                        url: <a href={membr.html_url}>{membr.html_url}</a>,
                        key: index,
                        action: (
                          <Button
                            content={membr.membership}
                            type="Plain"
                            disable
                          ></Button>
                        ),
                      }
                    : {
                        name: membr.login,
                        url: <a href={membr.html_url}>{membr.html_url}</a>,
                        key: index,
                        action: (
                          <Button
                            content={membr.membership}
                            type="Plain"
                            disable
                            loading
                          >
                            {viewMemberShip(membr.login, index)}
                          </Button>
                        ),
                      };
                })
              }
              scrollY={300}
            />
          </Card>
          <Card title="Repositories">
            <Grid
              columns={teamsRepositories.map((obj) => {
                return {
                  align: "left",
                  dataIndex: obj.dataIndex,
                  key: obj.key,
                  title: obj.title,
                  width: 100,
                };
              })}
              dataSource={
                repos &&
                repos.map((obj: any, index: number) => {
                  return {
                    repo_url: <a href={obj.html_url}>{obj.html_url}</a>,
                    // age: 32,
                    key: index,
                    name: obj.name,
                    role: obj.role_name,
                  };
                })
              }
              scrollY={300}
            />
          </Card>
        </FlexLayout>
      )}
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
