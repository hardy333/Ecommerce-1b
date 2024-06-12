import "./input.css";

type InputProps = {
  label?: string | null;
  placeholder?: string;
  id?: string;
  type?: string;
  isError?: boolean;
  name?: string;
  checked?: boolean;
};

const Input = ({
  label = null,
  type = "text",
  placeholder = "",
  id = "",
  isError = false,
  name = "",
}: InputProps) => {
  if (type === "radio") {
    return (
      <>
        <div className="radio-input-wrapper">
          <input type="radio" name={name} id={id} />
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
          name={name}
          className={`input ${isError ? "input-error" : ""}`}
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
