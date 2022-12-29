import { Modal } from "@cedcommerce/ounce-ui";
import React, { useState } from "react";
type modalPropsI = {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
};

const ModalComponent = (props: any) => {
  const { isModalOpen, setIsModalOpen, proceedDelete } = props;

  return (
    <div>
      <Modal
        open={isModalOpen}
        close={() => {
          setIsModalOpen(!isModalOpen);
        }}
        heading="Small Modal Size"
        modalSize="small"
        primaryAction={{
          content: "Proceed",
          loading: false,
          onClick: function noRefCheck() {
            proceedDelete();
          },
        }}
        secondaryAction={{
          content: "Close",
          loading: false,
          onClick: () => {
            setIsModalOpen(false);
          },
        }}
      >
        This is small modal
      </Modal>
    </div>
  );
};

export default ModalComponent;
