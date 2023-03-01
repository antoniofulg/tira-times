import { Navbar } from "@/components";

const Header = () => {
  const pages = [
    { label: "Início", path: "" },
    { label: "Gerar Lista", path: "match-info" },
    { label: "Sortear Times", path: "draft" },
  ];

  return (
    <header>
      <Navbar pages={pages} />
    </header>
  );
};

export default Header;
