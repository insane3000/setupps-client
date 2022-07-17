import Link from "next/link";
import styled from "styled-components";

const FooterSt = styled.footer`
  width: 90%;
  height: auto;
  margin: auto;
  border-top: 1px solid #262626;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 10vw;
  justify-content: center;
  align-content: center;
  margin-top: 6vw;
  margin-bottom: 6vw;
  .item {
    justify-self: flex-start;
    align-self: center;
    font-size: 4vw;
    color: #6c6c6c;
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    width: 65%;
    height: auto;
    border-top: 1px solid #262626;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 3vw;
    justify-content: center;
    align-content: center;
    margin-top: 2vw;
    margin-bottom: 2vw;
    .item {
      justify-self: flex-start;
      align-self: center;
      font-size: 1vw;
      color: #6c6c6c;
    }
  }
`;
const Footer = () => {
  return (
    <FooterSt>
      <Link href="/contact">
        <a className="item">Contact </a>
      </Link>
      <Link href="/about">
        <a className="item">About</a>
      </Link>
      <Link href="/tos">
        <a className="item">Terms and conditions</a>
      </Link>
      <Link href="/privacy">
        <a className="item">Privacy policy</a>
      </Link>
      <Link href="/cookies">
        <a className="item">Cookies policy</a>
      </Link>
      <Link href="/disclosure">
        <a className="item">Affiliate Disclosure</a>
      </Link>
    </FooterSt>
  );
};

export default Footer;
