import Link from "next/link";
import React from "react";
import styled from "styled-components";
const CookieConsentSt = styled.div`
  width: 100%;
  height: 50vw;
  background: #ffb900;
  position: sticky;
  bottom: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 6vw 6vw;
  color: black;
  font-size: 4.5vw;
  .learn-more {
    color: #2c2c2c;
    margin-left: 0.5vw;
  }
  .cookie-ok {
    margin-top: 5vw;
    background: #0d0d0d;
    color: #ffffff;
    font-size: 4.5vw;
    padding: 2vw 6vw;
    border-radius: 1vw;
    text-decoration: none;
    border-style: none;
    cursor: pointer;
    &:hover {
      background: #ffffff;
      color: black;
    }
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 6vw;
    background: #ffb900;
    position: sticky;
    bottom: 0;
    z-index: 11;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 0 2vw;
    color: black;
    font-size: 1.2vw;
    .learn-more {
      color: #2c2c2c;
      margin-left: 0.5vw;
    }
    .cookie-ok {
      margin-top: 0vw;
      margin-left: 25vw;
      background: #0d0d0d;
      color: #ffffff;
      font-size: 1.2vw;
      padding: 1vw 3vw;
      border-radius: 0.3vw;
      text-decoration: none;
      border-style: none;
      cursor: pointer;
      &:hover {
        background: #ffffff;
        color: black;
      }
    }
  }
`;

interface props {
  setCookieConsent: (value: string) => void;
}
const CookieConsent = (props: props) => {
  const handleCookieConsent = () => {
    localStorage.setItem("cookieConsent", "true");
    props.setCookieConsent("true");
  };
  return (
    <CookieConsentSt>
      <div>
        Este sitio web utiliza cookies para análisis y seguimiento del rendimiento para ayudarnos a
        mejorar el sitio web.{" "}
        <Link href="/privacy" className="learn-more">
          <a>Ver mas</a>
        </Link>
      </div>

      <button className="cookie-ok" onClick={handleCookieConsent}>
        OK
      </button>
    </CookieConsentSt>
  );
};

export default CookieConsent;
