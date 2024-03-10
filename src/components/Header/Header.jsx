import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Phone from "./Phone/Phone";
import { Nav, StyledHeader } from "./Header.styled"

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <NavMenu />
        <Logo />
      </Nav>
      <Phone/>
    </StyledHeader>
  );
};

export default Header;