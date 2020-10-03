import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import useGetProjects from "../hooks/useGetProjects";

const pageTitle = "My Projects";
const pageDescription = "My latest projects from GitHub";

export default function Projects() {
    const { data, error, isValidating } = useGetProjects();

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
                    {error && <h1>Oops something went wrong 😓</h1>}
                    {isValidating && <h1>Loading...</h1>}
                    <ul className={utilStyles.list}>
                        {data &&
                            data.map((item) => (
                                <li
                                    className={utilStyles.listItem}
                                    key={item.id}
                                >
                                    <p>
                                        <strong>{item.name}</strong>
                                    </p>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                    </ul>
                    {/* <ul className={utilStyles.list}>
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
                    </ul> */}
                </section>
            </Layout>
        </>
    );
}
