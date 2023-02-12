import { useId } from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id?: string;
  label: string;
  error?: string | boolean;
  valid?: boolean;
};

const Input = ({
  id,
  label,
  error,
  className,
  disabled,
  valid,
  ...props
}: InputProps) => {
  const inputId = id || useId();

  return (
    <div className={error ? "mb-0" : "mb-7"}>
      <label
        htmlFor={inputId}
        className={`label ${!!disabled && "disabled"} ${!!error && "error"} ${
          !!valid && "valid"
        }`}
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`input ${disabled ? "disabled" : ""} ${
          error ? "error" : ""
        } ${valid ? "valid" : ""} ${className ? className : ""}`}
        required
        disabled={disabled}
        {...props}
      />
      {!valid && !!error && typeof error === "string" && (
        <p role="alert" className="mt-1 text-sm text-red-600 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
