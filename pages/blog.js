import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Rodzy's blog</title>
        <meta
          name="description"
          content="On this blog you will find all topics related to web development, modern applications architectural
            patterns, tutorials and sometimes just my toughts about certain
            technologies."
        ></meta>
      </Head>
      <Layout blog>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h1 className={utilStyles.headingLg}>Rodzy's blog</h1>
          <p>
            On this blog you will find all topics related to web development (
            <i>mostly frontend stuff</i>), modern applications architectural
            patterns, tutorials and sometimes just my toughts about certain
            technologies.
          </p>
          <h2>Check the latests posts down bellow</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
