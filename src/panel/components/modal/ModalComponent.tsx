import { Modal } from "@cedcommerce/ounce-ui";
const ModalComponent = (props: any) => {
  const { isModalOpen, setIsModalOpen, handleProceed } = props;
  return (
    <div>
      <Modal
        open={isModalOpen}
        close={() => {
          setIsModalOpen(!isModalOpen);
        }}
        heading="Actions"
        modalSize="small"
        primaryAction={{
          content: "Proceed",
          loading: false,
          onClick: function noRefCheck() {
            handleProceed();
            setIsModalOpen(false);
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
        {props.proceed.message}
      </Modal>
    </div>
  );
};

export default ModalComponent;
