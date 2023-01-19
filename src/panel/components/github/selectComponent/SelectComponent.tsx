import { Select } from "@cedcommerce/ounce-ui";
import React from "react";
// import { viewMoreI } from "../githubManager/GithubManager";

const SelectComponent = (props: any) => {
  console.log("props", props);
  const selectOptions = [
    {
      label: "2",
      value: "2",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "20",
      value: "20",
    },
    {
      label: "50",
      value: "50",
    },
    {
      label: "100",
      value: "100",
    },
  ];
  return (
    <Select
      //   name="Name"
      onChange={(val) => {
        props.setViewMore({ ...props.viewMore, quantity: val });
      }}
      options={
        selectOptions &&
        selectOptions.map((obj) => {
          return {
            label: obj.label,
            value: obj.value,
          };
        })
      }
      placeholder="Select"
      popoverContainer="element"
      thickness="thin"
    />
  );
};

export default SelectComponent;
