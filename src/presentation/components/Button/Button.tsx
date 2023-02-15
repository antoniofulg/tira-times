import classNames from "classnames";

type ButtonTypes = "primary" | "secondary" | "unstyled";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: ButtonTypes;
};

const Button = ({
  color = "unstyled",
  className,
  children,
  disabled,
  role = "button",
  ...props
}: ButtonProps) => {
  const buttonClass = classNames("button", color, className);
  return (
    <button className={buttonClass} disabled={disabled} role={role} {...props}>
      {children}
    </button>
  );
};

export default Button;
