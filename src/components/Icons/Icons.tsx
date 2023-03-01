import { Bars, Team, Volleyball, X } from "./components";

type AvailableIcons = "bars" | "team" | "volleyball" | "x";

export type IconProps = {
  className?: string;
};

type IconsProps = {
  type: AvailableIcons;
  className?: string;
};

const Icons = ({ type, className = "" }: IconsProps) => {
  switch (type) {
    case "bars":
      return <Bars className={className} />;
    case "team":
      return <Team className={className} />;
    case "volleyball":
      return <Volleyball className={className} />;
    case "x":
      return <X className={className} />;
  }
};

export default Icons;
