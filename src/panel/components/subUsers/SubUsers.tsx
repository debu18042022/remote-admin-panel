import {
  Button,
  Card,
  FlexLayout,
  Grid,
  PageHeader,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../../../services/request/Request";
import ModalComponent from "../modal/ModalComponent";
import ToastComponent from "../toast/ToastComponent";

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
    message: "",
  });
  const [toast, setToast] = useState({
    toastMessage: "",
    toastType: "",
    toastActive: false,
  });

  const handleProceed = () => {
    setProceed({ ...proceed, open: true });
    setToast({ ...toast, toastActive: true });
  };

  useEffect(() => {
    if (!proceed.open) return;
    if (proceed.actionPerform === "removeSubUser") {
      const payload = { username: proceed.username };
      const url = `http://remote.local.cedcommerce.com/sub-user/delete`;
      const response = get(url, payload);
      response.then((res) => {
        if (res.success) {
          setToast({ ...toast, toastMessage: res.message });
          getSubUsers();
        }
      });
    }
    if (proceed.actionPerform === "blockSubUser") {
      const payload = { status: proceed.status, userId: proceed.userId };
      const url = `http://remote.local.cedcommerce.com/webapi/rest/v1/subuser-status-change`;
      const response = post(url, payload);
      response
        .then((res) => res.json())
        .then((res) => {
          console.log("resData", res);
          if (res.success) {
            setToast({ ...toast, toastMessage: res.message });
            getSubUsers();
          }
        });
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
      message: "Are you sure want to remove the user?",
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
      message: `Are you sure want to ${status} the User?`,
    });
  };

  const handleToast = () => {
    setToast({ ...toast, toastActive: false });
  };

  console.log("subUsers", subUsers);
  return (
    <>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleProceed={handleProceed}
        proceed={proceed}
      />
      <ToastComponent toast={toast} handleToast={handleToast} />
      <PageHeader
        action={
          <Button
            content="Create Sub User"
            type="Primary"
            onClick={() => navigate("/panel/subusers/registration")}
          />
        }
        title="Create App"
      />
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
                  {item.status === "active" ? (
                    <Button
                      thickness="extraThin"
                      onClick={() => blockSubUser("inactive", item._id)}
                    >
                      Block
                    </Button>
                  ) : (
                    <Button
                      thickness="extraThin"
                      onClick={() => blockSubUser("active", item._id)}
                    >
                      unblock
                    </Button>
                  )}

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
    </>
  );
};

export default SubUsers;
