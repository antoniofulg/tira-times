import { Bars, Team, X } from "./components";

type AvailableIcons = "bars" | "x" | "team";

type IconsProps = {
  type: AvailableIcons;
};

const Icons = ({ type }: IconsProps) => {
  switch (type) {
    case "bars":
      return <Bars />;
    case "x":
      return <X />;
    case "team":
      return <Team />;
  }
};

export default Icons;
