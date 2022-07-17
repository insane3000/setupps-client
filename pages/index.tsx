import type { NextPage } from "next";
import Welcome from "../components/Welcome";

import Layout from "../layouts/Layout";
const Home: NextPage = () => {
  const TITLE = "Setupps - Noticias, Análisis y Guías sobre Informática";
  const CANONICAL = "";
  const TYPE = "article";
  const DESCRIPTION =
    "Setupps es el blog más importante de noticias de hardware, análisis, reviews, gaming, periféricos, smartphone, windows, Linux en Español ?";
  return (
    <Layout title={TITLE} canonical={CANONICAL} image="" type={TYPE} description={DESCRIPTION}>
      <Welcome />
    </Layout>
  );
};

export default Home;
