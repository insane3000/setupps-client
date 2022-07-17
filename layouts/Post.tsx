import styled from "styled-components";
const PostSt = styled.main`
  width: 90%;
  height: auto;
  margin: auto;
  color: white;
  word-wrap: break-word;

  h1 {
    font-size: 6vw;
    margin-top: 4vw;
    margin-bottom: 2vw;
  }
  h2 {
    font-size: 5vw;
    margin-bottom: 1vw;
  }
  h3 {
    font-size: 4.5vw;
    margin-bottom: 0vw;
  }
  p {
    font-size: 4.5vw;
    margin-bottom: 3vw;
    margin-top: 0;
  }
  .quotation {
    font-size: 4.5vw;
    font-style: italic;
    margin-bottom: 3vw;
    margin-top: 0;
    color: #ffffff;
    background: #ff002f;
    padding: 4vw;
    border-radius: 2vw;
  }
  figcaption {
    font-size: 3.5vw;
    margin-bottom: 3vw;
    margin-top: 0;
    font-style: italic;
  }
  ul {
    font-size: 4vw;
    margin-bottom: 3vw;
    padding-left: 2vw;
    li {
      font-size: 4vw;
    }
  }
  img {
    width: 100%;
    height: auto;
    margin: auto;
    object-fit: contain;
    margin-top: 0vw;
    margin-bottom: 1.5vw;
  }
  iframe {
    width: 100%;
    height: 50vw;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 65%;
    height: auto;
    color: white;
    h1 {
      font-size: 2.5vw;
      margin-top: 2vw;
      margin-bottom: 1vw;
    }
    h2 {
      font-size: 2vw;
      margin-bottom: 0.5vw;
    }
    h3 {
      font-size: 1.5vw;
      margin-bottom: 0vw;
    }
    p {
      font-size: 1.5vw;
      margin-bottom: 1.5vw;
      margin-top: 0;
    }
    .quotation {
      font-size: 1.5vw;
      font-style: italic;
      margin-bottom: 1.5vw;
      margin-top: 0;
      color: #ffffff;
      background: #ff002f;
      padding: 1vw;
      border-radius: 0.5vw;
    }
    figcaption {
      font-size: 1vw;
      margin-bottom: 1.5vw;
      margin-top: 0;
    }
    ul {
      font-size: 1.5vw;
      margin-bottom: 1.5vw;
      padding-left: 2vw;
      li {
        font-size: 1.5vw;
      }
    }
    img {
      width: 100%;
      height: auto;
      max-height: 35vw;
      margin: auto;
      object-fit: contain;
      margin-top: 0vw;
      margin-bottom: 1.5vw;
    }
    iframe {
      width: 100%;
      height: 40vw;
    }
  }
`;
interface props {
  children: any;
}
const Post = (props: props) => {
  return <PostSt>{props.children}</PostSt>;
};
export default Post;
