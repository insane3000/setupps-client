import styled from "styled-components";

const ContactSt = styled.div`
  width: 100%;
  height: 150vw;
  color: white;
  font-size: 6.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .contact-text-container {
    width: max-content;
    height: calc(100% - 15vw);
    padding-bottom: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .row-contact {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .bold {
        color: #5100ff;
        margin-left: 1.5vw;
        font-weight: 900;
      }
    }
    .go-linkedin {
      margin-top: 3vw;
      width: max-content;
      border-radius: 1vw;
      padding: 3vw 3vw;
      font-size: 6vw;
      font-weight: 700;
      color: white;
      background: #5100ff;
      text-decoration: none;

      /* &:hover {
        color: #000000;
        background: #ffffff;
      } */
    }
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 40vw;
    color: white;
    font-size: 1.5vw;
    font-size: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .contact-text-container {
      width: max-content;
      height: calc(100% - 4vw);
      padding-bottom: 4vw;

      display: flex;
      flex-direction: column;
      justify-content: center;
      .row-contact {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .bold {
          color: #5100ff;
          margin-left: 0.5vw;
          font-weight: 900;
        }
      }
      .go-linkedin {
        margin-top: 1vw;
        width: max-content;
        border-radius: 0.3vw;
        padding: 1vw 1vw;
        font-size: 2vw;
        color: white;
        background: #5100ff;
        text-decoration: none;
        font-weight: 700;

        &:hover {
          color: #000000;
          background: #ffffff;
        }
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactSt>
      <div className="contact-text-container">
        <div className="row-contact">
          Hello, My name is<div className="bold">Roger</div>
        </div>
        <div className="row-contact">
          And I'm A <div className="bold">Full Stack Developer</div>
        </div>
        <a
          className="go-linkedin"
          href="https://www.linkedin.com/in/roger-choque-0614a4221/"
          target={"_blank"}
          rel="noreferrer"
        >
          Go LinkedIn
        </a>
      </div>
    </ContactSt>
  );
};

export default Contact;
