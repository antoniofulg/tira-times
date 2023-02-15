import classNames from "classnames";
import Icons from "../Icons/Icons";

type ButtonTypes = "primary" | "secondary" | "unstyled";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: ButtonTypes;
  loading?: boolean;
};

const Button = ({
  color = "unstyled",
  className,
  children,
  disabled,
  loading = false,
  role = "button",
  ...props
}: ButtonProps) => {
  const buttonClass = classNames("button", color, { disabled }, className);

  return (
    <button
      className={buttonClass}
      disabled={disabled || loading}
      role={role}
      {...props}
    >
      {loading ? (
        <Icons type="volleyball" className="w-5 h-5 mx-4 animate-spin"></Icons>
      ) : (
        <span className="button-text">{children}</span>
      )}
    </button>
  );
};

export default Button;
