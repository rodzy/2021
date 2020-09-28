import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getAllProjectsData } from "../lib/projects";
import Link from "next/link";
import Date from "../components/date";

export default function Projects({ allProjectsData }) {
  return (
    <>
      <Head>
        <title>My projects</title>
      </Head>
      <Layout blog>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h1 className={utilStyles.headingLg}>My projects</h1>
          <p>Take a look at my projects 🎈</p>
          <ul className={utilStyles.list}>
            {allProjectsData.map(({ id, date, title, description }) => (
              <Link href="/posts/[id]" as={`/posts/${id}`} key={id}>
                <li className={utilStyles.listItem}>
                  <p>
                    <strong>{title}:</strong>
                  </p>
                  <p> {description}</p>
                  <small className={utilStyles.lightText}>
                    Published: <Date dateString={date} />
                  </small>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjectsData = getAllProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
