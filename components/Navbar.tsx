import Link from "next/link";
import styled from "styled-components";

const NavbarSt = styled.nav`
  width: 100%;
  height: 14vw;
  line-height: 14vw;
  background: black;
  padding: 0 5%;
  position: sticky;
  top: 0;
  z-index: 1;
  a {
    color: white;
    font-weight: 800;
    font-size: 6vw;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 6vw;
    line-height: 6vw;
    background: black;
    padding: 0 18%;
    a {
      color: white;
      font-weight: 800;
      font-size: 2vw;
    }
  }
`;
const Navbar = () => {
  return (
    <NavbarSt>
      <Link className="item" href="/">
        <a>Setupps </a>
      </Link>
    </NavbarSt>
  );
};

export default Navbar;
