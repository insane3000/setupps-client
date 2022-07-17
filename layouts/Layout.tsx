import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import styled from "styled-components";
const DashboardLayoutSt = styled.div`
  width: 100%;
  height: auto;
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;
interface props {
  children: any;
  title: string;
  canonical: string;
  description: string;
  image: string;
  type: string;
}
const DashboardLayout = (props: props) => {
  const date = new Date().toISOString();
  const URI = "https://blog.setupps.com/";
  //   const canonical =
  //     props.type === "website" ? URI : `${URI}${props.title.toLowerCase().replace(/\ /g, "-")}`;
  //   const removeAccents = (str: string) => {
  //     return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  //   };
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="canonical" href={URI + props.canonical} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content={props.type} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={URI + props.canonical} />
        <meta property="og:site_name" content="Setupps" />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="og:image" content={props.image} />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="540" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <DashboardLayoutSt>
        <Navbar />
        {props.children}
        <Footer />
      </DashboardLayoutSt>
    </>
  );
};
export default DashboardLayout;
