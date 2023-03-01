import { Navbar } from "@/components";

const Header = () => {
  const pages = [
    { label: "Início", path: "" },
    { label: "Gerar Lista", path: "generate-list" },
    { label: "Sortear Times", path: "draft" },
  ];

  return (
    <header>
      <Navbar pages={pages} />
    </header>
  );
};

export default Header;
