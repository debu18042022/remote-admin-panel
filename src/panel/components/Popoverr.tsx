import {
  Avatar,
  Button,
  Card,
  CheckBox,
  FlexChild,
  FlexLayout,
  Popover,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React from "react";

const Popoverr = () => {
  return (
    <div>
      <>
        <Card>
          <FlexLayout halign="center" spacing="loose">
            <Popover
              activator={
                <Button onClick={function noRefCheck() {}}>
                  Popover With Simple Form
                </Button>
              }
              // dropDownheight={300}
              onClose={function noRefCheck() {}}
              popoverContainer="body"
              popoverWidth={200}
              open={true}
            >
              <FlexLayout direction="vertical" spacing="loose">
                <CheckBox
                  description="Checkbox Descripion"
                  id="two"
                  labelVal="Label"
                  name="Name"
                  onClick={function noRefCheck() {}}
                />
                <TextField
                  id="1"
                  name="Label 2"
                  onChange={function noRefCheck() {}}
                  placeHolder="Placeholder"
                  type="text"
                />
              </FlexLayout>
            </Popover>
          </FlexLayout>
        </Card>
      </>
    </div>
  );
};

export default Popoverr;
