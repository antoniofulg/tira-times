import { Navbar } from "@/components";

const Header = () => {
  const pages = [
    { label: "Início", path: "" },
    { label: "Criar Lista", path: "match-info" },
    { label: "Sortear Times", path: "paste-list" },
  ];

  return (
    <header>
      <Navbar pages={pages} />
    </header>
  );
};

export default Header;
