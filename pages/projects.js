import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getAllProjectsData } from "../lib/projects";

const pageTitle = "My Projects";
const pageDescription = "My latest projects from GitHub";

export default function Projects({ allProjectsData }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription}></meta>
                {/* Twitter tags */}
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                {/*Open graph tags */}
                <meta name="og:title" content={pageTitle} />
                <meta name="og:description" content={pageDescription} />
            </Head>
            <Layout blog>
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h1 className={utilStyles.headingLg}>My projects</h1>
                    <p>Take a look at my projects 🎈</p>
                    <ul className={utilStyles.list}>
                        {allProjectsData.map(
                            ({
                                id,
                                title,
                                description,
                                githubURL,
                                url,
                                npmURL,
                            }) => (
                                <li className={utilStyles.listItem} key={id}>
                                    <p>
                                        <strong>{title}:</strong>
                                    </p>
                                    <p> {description}</p>
                                    <a href={githubURL} target="blank">
                                        GitHub
                                    </a>
                                    {url && (
                                        <a href={url} target="blank">
                                            Website
                                        </a>
                                    )}
                                    {npmURL && (
                                        <a href={npmURL} target="blank">
                                            npm
                                        </a>
                                    )}
                                </li>
                            )
                        )}
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

async function getInitialProps() {
    return {
        props: {
            
        }
    }
}
