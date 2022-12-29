import {
  Button,
  Card,
  FlexChild,
  FlexLayout,
  Grid,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../../../services/request/Request";
import ModalComponent from "../modal/ModalComponent";

const SubUsers = () => {
  const navigate = useNavigate();
  const [subUsers, setSubUsers] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [proceed, setProceed] = useState({
    open: false,
    username: "",
    status: "",
    userId: "",
    actionPerform: "",
  });

  const proceedDelete = () => {
    console.log("proceed delete run");
    setProceed({ ...proceed, open: true });
  };

  useEffect(() => {
    if (!proceed.open) return;
    if (proceed.actionPerform === "removeSubUser") {
      const payload = { username: proceed.username };
      const url = `http://remote.local.cedcommerce.com/sub-user/delete`;
      const response = get(url, payload);
      response.then((res) => {
        if (res.success) {
          getSubUsers();
        }
      });
    } else {
      // const payload = { status: proceed.status, userId: proceed.userId };
      // const url = `http://remote.local.cedcommerce.com/webapi/rest/v1/subuser-status-change`;
      // const response = post();
      // response.then((res) => {
      //   console.log(res);
      //   if (res.success) {
      //     getSubUsers();
      //   }
      // });
    }
  }, [proceed]);

  const column = [
    { title: "UserName", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Created At", dataIndex: "created_at" },
    { title: "Action", dataIndex: "action" },
  ];
  const getSubUsers = () => {
    const payload = { count: 100, activePage: 1 };
    const url = `http://remote.local.cedcommerce.com/sub-user/getSubUsers`;
    const response = get(url, payload);
    response.then((res) => {
      console.log("res", res);
      if (res.success) {
        setSubUsers(res.data.rows);
      }
    });
  };
  useEffect(() => {
    getSubUsers();
  }, []);

  const removeSubUser = (username: string) => {
    setIsModalOpen(true);
    setProceed({
      open: false,
      username: username,
      status: "",
      userId: "",
      actionPerform: "removeSubUser",
    });
  };

  const blockSubUser = (status: string, userId: "") => {
    setIsModalOpen(true);
    setProceed({
      ...proceed,
      open: false,
      status: status,
      userId: userId,
      actionPerform: "blockSubUser",
    });
  };

  console.log("subUsers", subUsers);

  return (
    <div>
      <>
        <ModalComponent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          proceedDelete={proceedDelete}
        />
      </>
      <div style={{ padding: "20px" }}>
        <FlexLayout direction="vertical" spacing="extraLoose">
          <FlexChild>
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
                content="Create Sub User"
                type="Primary"
                onClick={() => navigate("/panel/subusers/registration")}
              />
            </FlexLayout>
          </FlexChild>
          <FlexChild>
            <Card cardType="Shadowed">
              <Grid
                columns={
                  column &&
                  column.map((item) => {
                    return {
                      align: "left",
                      dataIndex: item.dataIndex,
                      key: item.dataIndex,
                      title: item.title,
                      width: 100,
                    };
                  })
                }
                dataSource={subUsers.map((item: any) => {
                  return {
                    name: item.username,
                    email: item.email,
                    created_at: item.created_at,
                    key: item._id,
                    action: (
                      <FlexLayout spacing="extraTight">
                        <Button thickness="extraThin">Edit</Button>
                        <Button
                          thickness="extraThin"
                          onClick={() => blockSubUser(item.status, item._id)}
                        >
                          Block
                        </Button>
                        <Button
                          thickness="extraThin"
                          type="Danger"
                          onClick={() => removeSubUser(item.username)}
                        >
                          Delete
                        </Button>
                      </FlexLayout>
                    ),
                  };
                })}
                scrollY={300}
              />
            </Card>
          </FlexChild>
        </FlexLayout>
      </div>
    </div>
  );
};

export default SubUsers;
