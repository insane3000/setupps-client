import type { NextPage } from "next";
import Contact from "../components/Contact";
import Layout from "../layouts/Layout";

const Cookies: NextPage = () => {
  const TITLE = "Contact";
  const CANONICAL = "contact";
  const TYPE = "article";
  const DESCRIPTION = "";
  return (
    <Layout title={TITLE} canonical={CANONICAL} image="" type={TYPE} description={DESCRIPTION}>
      <Contact />
    </Layout>
  );
};

export default Cookies;
