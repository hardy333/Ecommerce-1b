import { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";
import { Link } from "react-router-dom";

// const func1 = (num1:number, num2: number, ...numbers: number[]) => {
//   console.log(numbers);
// };

// const arr = [1, 2, 3, 3, 4];

// func1(...arr);

type Props = {
  children: ReactNode;
  isLink?: boolean;
  to?: string;
  variant?: "primary" | "secondary" | "link" | "dark";
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  isLink = false,
  to = "./",
  variant = "primary",
  ...props
}: Props) => {
  if (isLink) {
    return (
      <Link className={`btn btn-${variant}`} to={to}>
        {children}
        {variant === "link" ? <ArrowSvg /> : null}
      </Link>
    );
  }

  return (
    <button {...props} className={`btn btn-${variant}`}>
      {children}
      {variant === "link" ? <ArrowSvg /> : null}
    </button>
  );
};

const ArrowSvg = () => (
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.322 1l5 5-5 5"
      stroke="#D87D4A"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

export default Button;
