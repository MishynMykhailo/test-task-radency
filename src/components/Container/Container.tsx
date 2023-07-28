import React from "react";
import s from "./Container.module.css";

interface IProps {
  children: React.ReactNode;
}
function Container({ children }: IProps) {
  return <div className={s.div}>{children}</div>;
}

export default Container;
