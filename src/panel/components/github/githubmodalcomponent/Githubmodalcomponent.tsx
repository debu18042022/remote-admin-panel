import { Card, Grid, Modal } from "@cedcommerce/ounce-ui";
import React from "react";

type ModalI = {
  isModalOpen: boolean;
  setIsModalOpen: any;
  colaborator: object[];
};

const Githubmodalcomponent = (props: ModalI) => {
  const { colaborator, isModalOpen, setIsModalOpen } = props;
  const colaboratorsColumn = [
    {
      align: "left",
      dataIndex: "name",
      key: "name",
      title: "Name",
      width: 100,
    },
  ];

  return (
    <Modal
      open={isModalOpen}
      close={function noRefCheck() {
        setIsModalOpen(!isModalOpen);
      }}
      heading="Repo Colaborators"
      modalSize="small"
      secondaryAction={{
        content: "Close",
        loading: false,
        onClick: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >
      <Card>
        <Grid
          columns={colaboratorsColumn.map((obj) => {
            return {
              align: "center",
              dataIndex: obj.dataIndex,
              key: obj.key,
              title: obj.title,
              width: 100,
            };
          })}
          dataSource={
            colaborator &&
            colaborator?.map((membr: any, index: number) => {
              return {
                name: membr.login,
                key: index,
              };
            })
          }
          scrollY={300}
        />
      </Card>
    </Modal>
  );
};

export default Githubmodalcomponent;
