import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import Post from "../layouts/Post";

const Cookies: NextPage = () => {
  const TITLE = "About Us";
  const CANONICAL = "about";
  const TYPE = "article";
  const DESCRIPTION = "";
  return (
    <Layout title={TITLE} canonical={CANONICAL} image="" type={TYPE} description={DESCRIPTION}>
      <Post>
        <h1>{TITLE}</h1>
        <h2>Pick Parts. Build Your PC. And Compare.</h2>
        <p>
          Setupps provides computer part selection, compatibility, and pricing guidance for
          do-it-yourself computer builders. Assemble your virtual part lists with Setupps and we'll
          provide compatibility guidance.
        </p>
        <h2>Simplified Building</h2>
        <ul>
          <li>
            Part lists broken out by filterable categories to ensure you include all the necessary
            components.
          </li>
          <li>
            Automatic compatibility guidance limits choices to parts known to be compatible, and
            warns you if you pick incompatible parts.
          </li>
        </ul>
      </Post>
    </Layout>
  );
};

export default Cookies;
