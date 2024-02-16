import { ReactNode } from "react";
import cn from "classnames";
import "./button-style.scss";
import ArrowIcon from "@/components/icons/arrow-icon";

interface Props {
  children: ReactNode;
  className?: string;
  type?: "outline" | "fill";
}
const button = ({ children, className, type = "outline" }: Props) => {
  return (
    <button
      className={cn("btn", {
        "btn--fill": type === "fill",
        "btn--outline": type === "outline",
        className,
      })}
    >
      {children}
      <ArrowIcon className="btn__icon" />
    </button>
  );
};

export default button;
