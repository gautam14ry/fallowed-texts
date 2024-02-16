import { ReactNode } from "react";
import './container-style.scss'

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Container;
