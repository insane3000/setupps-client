import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import img01 from "../pages/img01.webp";
import { posts } from "../public/posts";
const WelcomeSt = styled.main`
  width: 90%;
  height: auto;
  margin: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .font300 {
    width: 100%;
    font-weight: 300;
    font-size: 5vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
  }
  ul {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 120vw;
    gap: 4vw;
    list-style-type: none;
    .post {
      background: #000000;
      border-radius: 2vw;
      border: 4px solid #292727;
      overflow: hidden;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .thumbnail {
        width: 100%;
        height: 60vw;
        line-height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .data-container {
        width: 100%;
        height: 40vw;
        padding: 1vw 2vw;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;

        .title {
          font-size: 5vw;
          margin-bottom: 0.5vw;
          color: white;
        }
        .description {
          font-size: 4.5vw;
          color: #ebebeb;
        }
      }
      .readMore {
        width: max-content;
        padding: 2vw 3vw;
        font-size: 4vw;
        background: #4800ff;
        color: white;
        border-radius: 1vw;
        margin-left: 2vw;
        margin-top: 3vw;
        font-weight: 700;
      }
    }
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    width: 65%;
    height: auto;
    margin: auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .font300 {
      width: 100%;
      font-weight: 300;
      font-size: 2vw;
      margin-top: 1vw;
      margin-bottom: 1vw;
    }
    ul {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 40vw;
      gap: 1vw;
      list-style-type: none;
      .post {
        background: #000000;
        border-radius: 1vw;
        border: 4px solid #292727;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .thumbnail {
          width: 100%;
          height: 20vw;
          line-height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .data-container {
          width: 100%;
          height: 15vw;
          padding: 0.5vw 1vw;
          display: flex;
          flex-direction: column;
          overflow-y: scroll;
          // !Firefox
          scrollbar-color: #3b3b3b #000000;
          scrollbar-width: thin;
          // !Chrome
          &::-webkit-scrollbar {
            width: 0.5vw;
            height: 0vw;
          }
          &::-webkit-scrollbar-track {
            background: #000000;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 0.1vw;
            background: #212121;
          }
          &::-webkit-scrollbar-thumb:hover {
            background: #3b3b3b;
            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
          }
          &::-webkit-scrollbar-thumb:active {
            background-color: rgb(41, 41, 41);
          }
          .title {
            font-size: 2vw;
            margin-bottom: 0.5vw;
            color: white;
          }
          .description {
            font-size: 1.4vw;
            color: #ebebeb;
          }
        }
        .readMore {
          width: max-content;
          padding: 0.5vw 1vw;
          font-size: 1vw;
          background: #4800ff;
          color: white;
          border-radius: 0.3vw;
          margin-left: 1vw;
          margin-top: 1vw;
          font-weight: 700;
        }
      }
    }
  }
`;
const Welcome = () => {
  return (
    <WelcomeSt>
      <section className="font300">Artículos más recientes</section>
      <ul>
        {posts.map((i) => (
          <li className="post" key={i.id}>
            <a className="thumbnail" href={`https://blog.setupps.com/${i.canonical}`}>
              <img src={i.img.src} alt={i.title} loading="lazy" />
            </a>
            <div className="data-container">
              <a href={`https://blog.setupps.com/${i.canonical}`}>
                <h2 className="title">{i.title}</h2>
              </a>
              <p className="description">{i.description}</p>
            </div>
            <a className="readMore" href={`https://blog.setupps.com/${i.canonical}`}>
              Leer Mas
            </a>
          </li>
        ))}
      </ul>
    </WelcomeSt>
  );
};

export default Welcome;
