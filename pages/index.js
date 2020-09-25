import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.socialsContainer}>
          <a href="mailto:irod2899@gmail.com">Email</a>
          <a href="https://github.com/rodzy" target="blank">GitHub</a>
          <a href="https://ko-fi/rodzy" target="blank">Ko-fi</a>
          <a href="#!" target="blank">LinkedIn</a>
          <a href="https://twitter.com/rodzyrm" target="blank">Twitter</a>
        </div>
        <p>
          Hey there! I'm a self tought modern web developer, currently doing freelance work
          and focusing on getting a gig at a great company that highly values
          professionals.
        </p>
        <p>
          As a side note I'm spending most of free time doing Open Source
          contributions and just started my new big side project{" "}
          <small>(Private info 👀)</small>.
        </p>
        <p>
          If you are intrested on any of my work checkout my{" "}
          <a href="https://github.com/rodzy">GitHub</a>, I'm very active on
          there and I got some public and very intresting projects to check out
          or even contribute to them.
        </p>
      </section>
      
    </Layout>
  );
}
