import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import TheHeader from "./TheHeader";

const name = "Isaac Rodríguez";
const title = "Software Engineer in Costa Rica";
export const siteTitle = `Rodzy`;

export default function Layout({ children, home, blog }) {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <TheHeader />
      <div className={styles.insiderContainer}>
        <div className={styles.container}>
          <header className={styles.header}>
            {home ? (
              <>
                <img
                  src="/images/49137701.jpg"
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
                <div>
                  <h1 className={styles.headingMain}>{name}</h1>
                  <h2 className={styles.headingSecond}>{title}</h2>
                </div>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <img
                      src="/images/49137701.jpg"
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt={name}
                    />
                  </a>
                </Link>
                <div>
                  <h1 className={styles.headingLgLayout}>
                    <Link href="/">
                      <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                  </h1>
                  <h2 className={styles.headingSecond}>{title}</h2>
                </div>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && !blog && (
            <div className={styles.backToHome}>
              <Link href="/blog">
                <a>← Back to blog</a>
              </Link>
            </div>
          )}
          {blog && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
