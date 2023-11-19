import React, { ReactNode } from "react";

export type IFSideBarItem = {
  id: number;
  name: string;
  href: string;
  icon?: ReactNode;
  current?: boolean;
  label?: ReactNode;
  items?: IFSideBarItem[];
};

export type SideBarProps = {
  items: IFSideBarItem[];
  href?: string;
  title?: string;
};
