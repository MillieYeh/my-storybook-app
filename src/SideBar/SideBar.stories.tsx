import React from "react";
import SideBar from "./index";
import { IFSideBarItem, SideBarProps } from "./SideBarPropType";
import { navigation, nav_top } from "./MockData";

export default {
  title: "SideBar",
  component: SideBar,
};

export const Basic = () => {
  return <SideBar items={navigation} title={nav_top} />;
};
