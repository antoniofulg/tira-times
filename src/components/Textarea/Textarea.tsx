import classNames from "classnames";
import { forwardRef, useId } from "react";

type TextProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
  error?: string | boolean;
  valid?: boolean;
  hint?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextProps>(
  (
    {
      id,
      label,
      error = false,
      className,
      disabled = false,
      valid = false,
      required = false,
      readOnly = false,
      hint = "",
      ...props
    },
    ref
  ) => {
    const textareaId = id || useId();

    const labelClass = classNames("label", {
      disabled,
      error,
      valid,
    });

    const textareaClass = classNames(
      "textarea",
      {
        disabled,
        error,
        valid,
      },
      { "read-only": readOnly },
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
      <div className={showHintText ? "mb-2" : "mb-7"}>
        <label htmlFor={textareaId} className={labelClass}>
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
        <textarea
          id={textareaId}
          className={textareaClass}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
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

Textarea.displayName = "Textarea";

export default Textarea;
