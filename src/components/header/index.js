import {
  Navbar,
  NavContainer,
  NavItemsWrapper,
  NavItems,
  NavItem,
  NavItemLInk,
  LogoWrapper,
  LogoImage,
  NavWrapper,
} from "./styles";
import { Container } from "../Container";
const Header = () => {
  return (
    <Navbar>
      <Container>
        <NavWrapper>
          <LogoWrapper>
            <NavItemLInk to="/">
              <LogoImage src="" /> logo
            </NavItemLInk>
          </LogoWrapper>
          <NavItemsWrapper>
            <NavItems>
              <NavItem>
                <NavItemLInk to="/used">Used</NavItemLInk>
              </NavItem>
              <NavItem>
                <NavItemLInk to="/used">Used</NavItemLInk>
              </NavItem>
            </NavItems>
          </NavItemsWrapper>
        </NavWrapper>
      </Container>
    </Navbar>
  );
};
export default Header;
