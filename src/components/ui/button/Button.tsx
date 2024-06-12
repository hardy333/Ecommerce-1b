import { ReactNode } from "react";
import "./button.css";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  isLink?: boolean;
  to?: string;
  type?: "primary" | "secondary" | "link" | "dark";
  onClick: () => void;
};

const Button = ({
  children,
  isLink = false,
  to = "./",
  type = "primary",
  onClick,
}: Props) => {
  if (isLink) {
    return (
      <Link className={`btn btn-${type}`} to={to}>
        {children}
        {type === "link" ? <ArrowSvg /> : null}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`btn btn-${type}`}>
      {children}
      {type === "link" ? <ArrowSvg /> : null}
    </button>
  );
};

const ArrowSvg = () => (
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.322 1l5 5-5 5"
      stroke="#D87D4A"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    />
  </svg>
);

export default Button;
