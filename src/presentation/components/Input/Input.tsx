import classNames from "classnames";
import { forwardRef, useId } from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id?: string;
  label: string;
  type?: string;
  error?: string | boolean;
  valid?: boolean;
  hint?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      type = "text",
      error = false,
      className,
      disabled = false,
      valid = false,
      required = false,
      hint = "",
      ...props
    }: InputProps,
    ref
  ) => {
    const inputId = id || useId();

    const labelClass = classNames("label", {
      disabled,
      error,
      valid,
    });

    const inputClass = classNames(
      "input",
      {
        disabled,
        error,
        valid,
      },
      className
    );

    const tipClass = classNames(
      "text-sm",
      { "text-gray-500 dark:text-gray-400": !!hint },
      { "text-red-600 dark:text-red-500": !!error }
    );

    const showHintText =
      !!hint || (!valid && !!error && typeof error === "string");

    return (
      <div className={error ? "mb-2" : "mb-7"}>
        <label htmlFor={inputId} className={labelClass}>
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
        <input
          id={inputId}
          className={inputClass}
          disabled={disabled}
          type={type}
          required={required}
          {...props}
          ref={ref}
        />
        {showHintText && (
          <p role="alert" className={tipClass}>
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
