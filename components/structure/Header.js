import Logo from "../Logo";
import Navigation from "../Navigation";
import styled from "@/styles/structure/Header.module.scss";

const Header = () => {
  return (
    <header className={styled.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
