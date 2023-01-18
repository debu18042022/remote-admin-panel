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
import Githubmodalcomponent from "../githubmodalcomponent/Githubmodalcomponent";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [colaborator, setColaborator] = useState<any[]>([]);
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
    {
      align: "center",
      dataIndex: "action",
      key: "action",
      title: "Action",
      width: 100,
    },
  ];

  useEffect(() => {
    getAllTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      let temp = resData;
      temp = resData;
      temp.forEach((obj: any) => {
        obj["membership"] = "";
        obj["view"] = false;
      });
      setTeamsInfo({ ...teamsInfo, members: temp });
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

  const viewRepoColaborator = (repo_name: string) => {
    const url = `https://api.github.com/repos/${environment.organization}/${repo_name}/collaborators`;
    const response = get(url, {}, "github");
    response.then((resData) => {
      console.log("RepoColaborator----->", resData);
      setColaborator(resData);
      setIsModalOpen(!isModalOpen);
    });
  };

  return (
    <>
      <Githubmodalcomponent
        colaborator={colaborator}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
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
        <Loader type="Loader2" />
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
                repos.map((repo: any, index: number) => {
                  return {
                    key: index,
                    name: repo.name,
                    repo_url: <a href={repo.html_url}>{repo.html_url}</a>,
                    role: repo.role_name,
                    action: (
                      <Button
                        onClick={() => {
                          viewRepoColaborator(repo.name);
                        }}
                      >
                        View Colaborators
                      </Button>
                    ),
                  };
                })
              }
              scrollY={300}
            />
          </Card>
        </FlexLayout>
      )}
    </>
  );
};

export default GithubManager;
