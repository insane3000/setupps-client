import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import Post from "../layouts/Post";

const Cookies: NextPage = () => {
  const TITLE = "Cookies";
  const CANONICAL = "cookies";
  const TYPE = "article";
  const DESCRIPTION = "";
  return (
    <Layout title={TITLE} canonical={CANONICAL} image="" type={TYPE} description={DESCRIPTION}>
      <Post>
        <h1>{TITLE}</h1>
        <h2>About Cookies</h2>
        <p>
          A cookie is a file containing an identifier (a string of letters and numbers) that is sent
          by a web server to a web browser and is stored by the browser. The identifier is then sent
          back to the server each time the browser requests a page from the server.
        </p>
        <p>
          Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will
          be stored by a web browser and will remain valid until its set expiry date, unless deleted
          by the user before the expiry date; a session cookie, on the other hand, will expire at
          the end of the user session, when the web browser is closed.
        </p>
        <p>
          Cookies do not typically contain any information that personally identifies a user, but
          personal information that we store about you may be linked to the information stored in
          and obtained from cookies.
        </p>
        <h2>Cookies That We Use</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>
            authentication - we use cookies to identify you when you visit our website and as you
            navigate our website (cookies used for this purpose are: xsessionid);
          </li>
          <li>
            status - we use cookies to help us to determine if you are logged into our website
            (cookies used for this purpose are: xsessionid);
          </li>
          <li>
            part list - we use cookies to maintain the state of your part list as you navigate our
            website (cookies used for this purpose are: xsessionid);
          </li>
          <li>
            part list history - we use cookies to maintain the list of changes to your part list as
            you navigate our website (cookies used for this purpose are: xsessionid);
          </li>
          <li>
            personalisation - we use cookies to store information about your preferences and to
            personalise our website for you (cookies used for this purpose are: xsessionid, theme);
          </li>
          <li>
            security - we use cookies as an element of the security measures used to protect user
            accounts, including preventing fraudulent use of login credentials, and to protect our
            website and services generally (cookies used for this purpose are: xsessionid,
            xcsrftoken);
          </li>
          <li>
            analysis - we use cookies to help us to analyse the use and performance of our website
            and services (cookies used for this purpose are: xsessionid); and
          </li>
          <li>
            cookie consent - we use cookies to store your preferences in relation to the use of
            cookies more generally (cookies used for this purpose are: xgdpr-consent).
          </li>
        </ul>
        <p></p>
        <h2>Managing Cookies</h2>
        <p>
          Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for
          doing so vary from browser to browser, and from version to version. You can however obtain
          up-to-date information about blocking and deleting cookies via these links:
        </p>
        <ul>
          <li>https://support.google.com/chrome/answer/95647?hl=en (Chrome);</li>
          <li>
            https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
            (Firefox);
          </li>
          <li>https://www.opera.com/help/tutorials/security/cookies/ (Opera);</li>
          <li>
            https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
            (Internet Explorer);
          </li>
          <li>https://support.apple.com/kb/PH21411 (Safari); and</li>
          <li>https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy (Edge).</li>
        </ul>
        <p></p>
        <p>Blocking all cookies will have a negative impact upon the usability of many websites.</p>
        <p>If you block cookies, you will not be able to use all the features on our website.</p>

        <h2>Our Details</h2>
        <p>This website is owned and operated by Setupps, LLC.</p>
        <p>We are a Bolivia Limited Liability Corporation registered in the state of Cochabamba.</p>
        <p>Our principal place of business is at Cercado Jordan 723.</p>
      </Post>
    </Layout>
  );
};

export default Cookies;
