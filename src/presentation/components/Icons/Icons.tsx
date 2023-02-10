import { Bars, X } from "./components";

type AvailableIcons = "bars" | "x";

type IconsProps = {
  type: AvailableIcons;
};

const Icons = ({ type }: IconsProps) => {
  switch (type) {
    case "bars":
      return <Bars />;
    case "x":
      return <X />;
  }
};

export default Icons;
