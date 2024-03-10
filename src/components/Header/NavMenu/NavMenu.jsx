import { NavigationList, StyledLink } from "./NavMenu.styled"

const NavMenu = () => {
  return (
    <NavigationList>
        <li>
            <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
            <StyledLink to="/catalog">Catalog</StyledLink>
        </li>
        <li>
            <StyledLink to="/favorites">Favorites</StyledLink>
        </li>
    </NavigationList>
  );
};

export default NavMenu;