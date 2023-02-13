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
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      type = "text",
      error,
      className,
      disabled,
      valid,
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

    return (
      <div className={error ? "mb-2" : "mb-7"}>
        <label htmlFor={inputId} className={labelClass}>
          {label}
        </label>
        <input
          id={inputId}
          className={inputClass}
          required
          disabled={disabled}
          type={type}
          {...props}
          ref={ref}
        />
        {!valid && !!error && typeof error === "string" && (
          <p role="alert" className="text-sm text-red-600 dark:text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
