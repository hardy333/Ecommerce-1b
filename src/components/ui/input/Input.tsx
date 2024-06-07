import "./input.css";

type InputProps = {
  label?: string | null;
  placeholder?: string;
  id?: string;
  type?: string;
  isError?: boolean;
};

const Input = ({
  label = null,
  type = "text",
  placeholder = "",
  id = "",
  isError = false,
}: InputProps) => {
  if (type === "radio") {
    return (
      <>
        <div>
          <input type="radio" id={id} />
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
            className={`label ${isError ? "label-error" : ""}`}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {isError ? <p className="input-error-p">Worng Format</p> : null}
        <input
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
