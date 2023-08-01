import React from "react";

interface IProps {
  children: React.ReactNode;
}
function Container({ children }: IProps) {
  return <div className="max-w-screen-lg mx-auto">{children}</div>;
}

export default Container;
