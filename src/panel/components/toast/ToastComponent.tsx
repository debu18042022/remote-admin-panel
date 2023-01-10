import { Toast, ToastWrapper } from "@cedcommerce/ounce-ui";
import React from "react";

const ToastComponent = (props: any) => {
  const { toastActive, toastMessage, toastType } = props.toast;
  return (
    <React.Fragment key=".0">
      <ToastWrapper>
        {toastActive && (
          <Toast
            message={toastMessage}
            onDismiss={props.handleToast}
            timeout={3000}
            type="success"
          />
        )}
      </ToastWrapper>
    </React.Fragment>
  );
};

export default ToastComponent;
