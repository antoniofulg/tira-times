import classNames from "classnames";

type ButtonTypes = "primary" | "secondary";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color: ButtonTypes;
};

const Button = ({
  color = "primary",
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
