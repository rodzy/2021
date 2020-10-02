import Document, { Html, Head, Main, NextScript } from "next/document";
import { siteTitle, title } from "../components/layout";
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    {/* Twitter tags */}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={siteTitle} />
                    <meta
                        name="twitter:description"
                        content={siteTitle + `, ` + title}
                    />
                    <meta name="twitter:creator" content="@rodzyrm" />
                    <meta
                        name="twitter:image"
                        content="https://avatars1.githubusercontent.com/u/49137701?s=400&u=35e7614cc3215c045b58b4e352bd0616b9d795fd&v=4"
                    />
                    {/*Open graph tags */}
                    <meta name="og:title" content={siteTitle} />
                    <meta name="og:url" content="https://rodzy.vercel.app" />
                    <meta
                        name="og:description"
                        content={siteTitle + `, ` + title}
                    />
                    <meta name="og:site_name" content={siteTitle} />
                    <meta
                        property="og:image"
                        content="https://avatars1.githubusercontent.com/u/49137701?s=400&u=35e7614cc3215c045b58b4e352bd0616b9d795fd&v=4"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
