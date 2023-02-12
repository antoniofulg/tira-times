import { forwardRef, useId } from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id?: string;
  label: string;
  error?: string | boolean;
  valid?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, label, error, className, disabled, valid, ...props }: InputProps,
    ref
  ) => {
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
          ref={ref}
        />
        {!valid && !!error && typeof error === "string" && (
          <p role="alert" className="m text-sm text-red-600 dark:text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
