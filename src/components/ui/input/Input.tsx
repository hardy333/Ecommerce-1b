import { HtmlHTMLAttributes } from "react";
import "./input.css";

type InputProps = {
  label?: string | null;
  placeholder?: string;
  id?: string;
  type?: string;
  isError?: boolean;
  name?: string;
  checked?: boolean;
} & HtmlHTMLAttributes<HTMLInputElement>;

const Input = ({
  label = null,
  id = "",
  isError = false,

  ...props
}: InputProps) => {
  if (props.type === "radio") {
    return (
      <>
        <div className="radio-input-wrapper">
          <input type="radio" {...props} id={id} />
          <label htmlFor={id}>{label}</label>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="input-wrapper">
        {label && (
          <label
            className={`lable ${isError ? "label-error" : ""}`}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {isError ? <p className="input-error-p">Worng Format</p> : null}
        <input
          className={`input ${isError ? "input-error" : ""}`}
          id={id}
          {...props}

          // name={name}
          // type={type}
          // placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
