import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import Post from "../layouts/Post";

const Cookies: NextPage = () => {
  const TITLE = "Disclosure";
  const CANONICAL = "disclosure";
  const TYPE = "article";
  const DESCRIPTION = "";
  return (
    <Layout title={TITLE} canonical={CANONICAL} image="" type={TYPE} description={DESCRIPTION}>
      <Post>
        <h1>{TITLE}</h1>
        <p>
          Setupps, owned by Setupps, LLC, receives compensation through affiliate relationships with
          merchants listed on this site. Please know that this in no way affects reviews,
          benchmarks, content, or this site's opinions of products, services, manufacturers,
          partners, or merchants. The mission of Setupps is to provide the best functionality for
          this site's users, regardless of any potential affiliate commissions.
        </p>
        <p>
          Setupps is a participant in the Amazon Services LLC Associates Program, an affiliate
          advertising program designed to provide a means for sites to earn advertising fees by
          advertising and linking to amazon.com.
        </p>
      </Post>
    </Layout>
  );
};

export default Cookies;
